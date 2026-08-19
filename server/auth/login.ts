import { timingSafeEqual } from "node:crypto";
import * as cookie from "cookie";
import { Session } from "@contracts/constants";
import { Errors } from "@contracts/errors";
import { env } from "../lib/env";
import { signSessionToken, verifySessionToken } from "./session";
import { findUserByUnionId, upsertUser } from "../queries/users";

// Único administrador del sitio: no hay OAuth ni cuentas de terceros, así
// que el "usuario" es siempre esta fila fija, creada/actualizada al
// iniciar sesión por primera vez con la contraseña correcta.
const ADMIN_UNION_ID = "admin";

export function verifyAdminPassword(candidate: string): boolean {
  const expected = env.adminPassword;
  const a = Buffer.from(candidate);
  const b = Buffer.from(expected);
  // Compara siempre el mismo número de bytes (evita filtrar la longitud
  // real de la contraseña por temporización) y solo entonces compara
  // el contenido de forma segura frente a timing attacks.
  if (a.length !== b.length) {
    timingSafeEqual(a, a);
    return false;
  }
  return timingSafeEqual(a, b);
}

export async function createAdminSession(): Promise<string> {
  await upsertUser({
    unionId: ADMIN_UNION_ID,
    name: "Admin",
    role: "admin",
    lastSignInAt: new Date(),
  });
  return signSessionToken({ unionId: ADMIN_UNION_ID });
}

export async function authenticateRequest(headers: Headers) {
  const cookies = cookie.parse(headers.get("cookie") || "");
  const token = cookies[Session.cookieName];
  if (!token) {
    throw Errors.forbidden("Invalid authentication token.");
  }
  const claim = await verifySessionToken(token);
  if (!claim) {
    throw Errors.forbidden("Invalid authentication token.");
  }
  const user = await findUserByUnionId(claim.unionId);
  if (!user) {
    throw Errors.forbidden("User not found. Please re-login.");
  }
  return user;
}

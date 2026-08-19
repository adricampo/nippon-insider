import "dotenv/config";

function required(name: string): string {
  const value = process.env[name];
  if (!value && process.env.NODE_ENV === "production") {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value ?? "";
}

export const env = {
  // Firma las cookies de sesión del panel de administración.
  appSecret: required("APP_SECRET"),
  // Contraseña del único acceso de administrador (sin OAuth ni cuentas
  // de terceros). Compárala siempre con verifyAdminPassword() en
  // api/auth/login.ts, nunca directamente.
  adminPassword: required("ADMIN_PASSWORD"),
  isProduction: process.env.NODE_ENV === "production",
  databaseUrl: required("DATABASE_URL"),
};

import { useState } from "react";
import { useNavigate } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { trpc } from "@/providers/trpc";

export default function Login() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const utils = trpc.useUtils();

  const login = trpc.auth.login.useMutation({
    onSuccess: async () => {
      await utils.auth.me.invalidate();
      navigate("/admin");
    },
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!password) return;
    login.mutate({ password });
  }

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <Card className="w-full max-w-sm border-sumi/15">
        <CardHeader className="text-center">
          <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-sm bg-aka font-serif text-2xl text-washi">
            日
          </span>
          <CardTitle className="font-serif text-2xl text-sumi">
            Entrar en Nippon Insider
          </CardTitle>
          <p className="text-sm text-sumi/55">
            Acceso restringido al equipo editorial.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="password"
              placeholder="Contraseña"
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {login.isError && (
              <p className="text-sm text-red-600">{login.error.message}</p>
            )}
            <Button
              type="submit"
              className="w-full bg-aka text-washi hover:bg-aka-dark"
              size="lg"
              disabled={login.isPending || !password}
            >
              {login.isPending ? "Entrando…" : "Entrar"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

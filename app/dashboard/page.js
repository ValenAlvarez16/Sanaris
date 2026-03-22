import { auth0 } from "@/lib/auth0";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth0.getSession();

  if (!session) {
    redirect("/");
  }

  return (
    <div>
      <h1>Bienvenido, {session.user.name}</h1>
      <p>{session.user.email}</p>
      <a href="/auth/logout">Cerrar sesión</a>
    </div>
  );
}

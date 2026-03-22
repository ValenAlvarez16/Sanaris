"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CheckPerfil() {
  const router = useRouter();

  useEffect(() => {
    async function check() {
      try {
        const res = await fetch("/auth/profile");
        if (!res.ok) {
          router.replace("/");
          return;
        }
        const user = await res.json();
        const key = `perfil_completo_${user.email}`;
        const completo = localStorage.getItem(key);
        if (completo) {
          router.replace("/dashboard");
        } else {
          router.replace("/completar-perfil");
        }
      } catch {
        router.replace("/");
      }
    }
    check();
  }, []);

  return null;
}
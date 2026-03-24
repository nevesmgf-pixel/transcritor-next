"use client";

import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      style={{
        padding: "6px 10px",
        fontSize: 12,
        borderRadius: 6,
        border: "1px solid rgba(0,0,0,0.2)",
        background: "transparent",
        cursor: "pointer",
        opacity: 0.7
      }}
    >
      Sair
    </button>
  );
}
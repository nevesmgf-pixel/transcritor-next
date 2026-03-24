import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const password = String(body?.password ?? "");
    const expectedPassword = String(process.env.APP_PASSWORD ?? "");

    console.log("APP_PASSWORD carregada?", !!process.env.APP_PASSWORD);
    console.log("Senha recebida:", JSON.stringify(password));
    console.log("Senha esperada:", JSON.stringify(expectedPassword));

    if (!expectedPassword) {
      return NextResponse.json(
        { error: "APP_PASSWORD não configurada." },
        { status: 500 }
      );
    }

    if (password.trim() !== expectedPassword.trim()) {
      return NextResponse.json(
        { error: "Senha inválida." },
        { status: 401 }
      );
    }

    const response = NextResponse.json({ success: true });

    response.cookies.set("app_auth", "ok", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7
    });

    return response;
  } catch (error) {
    console.error("Erro no login:", error);

    return NextResponse.json(
      { error: "Falha ao autenticar." },
      { status: 500 }
    );
  }
}
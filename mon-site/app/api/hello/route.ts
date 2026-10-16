import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Bonjour ! Mon API fonctionne."
  });
}
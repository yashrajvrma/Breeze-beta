import { NextResponse } from "next/server";
import prisma from "@/db";

export async function GET() {
  try {
    const count = await prisma.user.count();
    return NextResponse.json({ data: count }, { status: 200 });
  } catch (error) {
    console.error("Sorry something went wrong");
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

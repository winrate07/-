import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { q1, q2, q3, q4, q5 } = await req.json();
    if (!q1 || !q2 || !q3 || !q4 || !q5) {
      return NextResponse.json({ error: "모든 문항에 답변해 주세요." }, { status: 400 });
    }
    const test = await prisma.aptitudeTest.create({
      data: { q1, q2, q3, q4, q5 },
    });
    return NextResponse.json({ success: true, test });
  } catch (error) {
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
} 
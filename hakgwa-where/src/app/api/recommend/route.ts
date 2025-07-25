import { PrismaClient } from "@/generated/prisma";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { grade, scores, aptitude, interest, region } = await req.json();
    if (!grade || !scores || !aptitude || !interest || !region) {
      return NextResponse.json(
        { error: "모든 항목을 입력해 주세요." },
        { status: 400 }
      );
    }
    const recommend = await prisma.recommend.create({
      data: { grade, scores, aptitude, interest, region },
    });
    return NextResponse.json({ success: true, recommend });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

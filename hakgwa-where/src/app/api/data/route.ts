import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type");
    const limit = parseInt(searchParams.get("limit") || "10");

    switch (type) {
      case "recommend":
        const recommends = await prisma.recommend.findMany({
          take: limit,
          orderBy: { createdAt: "desc" },
        });
        return NextResponse.json({ success: true, data: recommends });

      case "test":
        const tests = await prisma.aptitudeTest.findMany({
          take: limit,
          orderBy: { createdAt: "desc" },
        });
        return NextResponse.json({ success: true, data: tests });

      case "consult":
        const consults = await prisma.consult.findMany({
          take: limit,
          orderBy: { createdAt: "desc" },
        });
        return NextResponse.json({ success: true, data: consults });

      case "all":
        const [recommendData, testData, consultData] = await Promise.all([
          prisma.recommend.findMany({ take: limit, orderBy: { createdAt: "desc" } }),
          prisma.aptitudeTest.findMany({ take: limit, orderBy: { createdAt: "desc" } }),
          prisma.consult.findMany({ take: limit, orderBy: { createdAt: "desc" } }),
        ]);
        return NextResponse.json({
          success: true,
          data: {
            recommends: recommendData,
            tests: testData,
            consults: consultData,
          },
        });

      default:
        return NextResponse.json({ error: "유효하지 않은 타입입니다." }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
} 
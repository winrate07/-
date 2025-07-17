import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();
    if (!message) {
      return NextResponse.json({ error: "메시지를 입력해 주세요." }, { status: 400 });
    }
    // 간단한 AI 응답 로직 (실제 OpenAI API 연동은 추후 구현)
    const responses = [
      "안녕하세요! 학과 추천에 대해 궁금한 점이 있으시면 언제든지 물어보세요.",
      "성적과 적성, 흥미를 종합적으로 고려하여 맞춤형 학과를 추천해드릴 수 있습니다.",
      "고등학교 1~3학년 모두에게 적합한 진로 상담을 제공하고 있습니다.",
      "전문가 상담과 AI 상담을 통해 더 정확한 정보를 얻으실 수 있습니다.",
      "선호하는 지역이나 관심 분야가 있으시면 말씀해 주세요."
    ];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    return NextResponse.json({ 
      success: true, 
      response: randomResponse,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
} 
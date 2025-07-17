import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();
    if (!message) {
      return NextResponse.json({ error: "메시지를 입력해 주세요." }, { status: 400 });
    }

    // 키워드 기반 맞춤형 답변
    const lower = message.toLowerCase();
    let response = "";
    if (lower.includes("운동") || lower.includes("체육") || lower.includes("스포츠")) {
      response = "운동을 잘하신다면 체육학과, 스포츠과학과, 무용과, 레저스포츠학과 등을 추천합니다. 실기 위주 전형도 고려해보세요!";
    } else if (lower.includes("공부") || lower.includes("성적") || lower.includes("입시")) {
      response = "공부와 입시에 대해 고민이 있다면, 목표 대학의 전형 정보를 확인하고, 자기주도 학습 습관을 기르는 것이 중요합니다. 궁금한 점은 언제든 상담해 주세요.";
    } else if (lower.includes("예술") || lower.includes("음악") || lower.includes("디자인") || lower.includes("미술")) {
      response = "예술, 음악, 디자인에 관심이 많다면 예술대학, 디자인학과, 실기 전형 등을 추천합니다. 포트폴리오 준비도 중요해요!";
    } else if (lower.includes("심리")) {
      response = "심리학에 관심이 있다면 심리학과, 상담학과, 사회복지학과 등을 고려해보세요.";
    } else if (lower.includes("추천")) {
      response = "성적, 적성, 흥미, 관심 분야, 선호 지역을 알려주시면 맞춤형 학과를 추천해드릴 수 있습니다.";
    } else {
      response = "고등학교 1~3학년 모두에게 적합한 진로 상담을 제공하고 있습니다. 궁금한 점을 더 구체적으로 말씀해 주세요!";
    }

    return NextResponse.json({ 
      success: true, 
      response,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
} 
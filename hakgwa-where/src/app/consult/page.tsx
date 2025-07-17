"use client";

import React, { useState } from "react";
import Link from "next/link";

function getConsultAdvice(content: string) {
  // 간단한 키워드 기반 안내 메시지
  if (content.includes("운동")) {
    return "운동을 좋아하신다면 체육학과, 스포츠과학과, 무용과, 입시 컨설팅(체대입시) 등을 고려해보세요.";
  }
  if (content.includes("공부") && content.includes("싫어")) {
    return "공부가 부담스럽다면 실기 위주 전형이나, 실습 중심 학과(예: 예체능, 실용음악, 디자인 등)도 추천드립니다.";
  }
  if (content.includes("입시")) {
    return "입시를 준비하고 싶다면, 목표 대학과 학과의 전형 정보를 꼼꼼히 확인하고, 전문가 상담을 통해 전략을 세워보세요.";
  }
  return "상담 내용을 바탕으로 전문가가 빠르게 답변드릴 예정입니다. 추가 궁금한 점은 AI 챗봇을 이용해 주세요.";
}

export default function ConsultPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    content: "",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showSummary, setShowSummary] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const res = await fetch("/api/consult", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setResult("상담 신청이 성공적으로 저장되었습니다!");
        setShowSummary(true);
      } else {
        setError(data.error || "오류가 발생했습니다.");
      }
    } catch (err) {
      setError("서버와 통신 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  if (showSummary) {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700">상담 신청 요약 및 안내</h2>
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">입력하신 상담 내용</h3>
          <div className="mb-2"><span className="font-semibold">이름:</span> {form.name}</div>
          <div className="mb-2"><span className="font-semibold">이메일:</span> {form.email}</div>
          <div className="mb-4"><span className="font-semibold">상담 내용:</span> {form.content}</div>
          <div className="mt-4 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
            <span className="font-semibold text-indigo-700">AI 안내:</span> {getConsultAdvice(form.content)}
          </div>
        </div>
        <div className="text-center">
          <button 
            onClick={() => setShowSummary(false)}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            다시 상담 신청하기
          </button>
        </div>
        <div className="mt-8 text-center">
          <Link href="/chat">
            <button className="bg-green-600 text-white px-6 py-2 rounded font-bold hover:bg-green-700 transition-colors">
              AI 챗봇으로 추가 상담하기
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-indigo-700">상담 신청 및 AI 챗봇</h2>
      <p className="mb-8 text-gray-700">
        궁금한 점이 있거나 전문가의 상담이 필요하다면 아래에서 신청해 주세요.<br />
        24시간 AI 챗봇 상담도 언제든지 이용할 수 있습니다.
      </p>
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h3 className="text-xl font-semibold mb-4 text-indigo-600">전문가 상담 신청</h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block font-semibold mb-1">이름</label>
            <input name="name" type="text" className="w-full border rounded px-3 py-2" placeholder="이름을 입력하세요" value={form.name} onChange={handleChange} />
          </div>
          <div>
            <label className="block font-semibold mb-1">이메일</label>
            <input name="email" type="email" className="w-full border rounded px-3 py-2" placeholder="이메일을 입력하세요" value={form.email} onChange={handleChange} />
          </div>
          <div>
            <label className="block font-semibold mb-1">상담 내용</label>
            <textarea name="content" className="w-full border rounded px-3 py-2" rows={4} placeholder="상담받고 싶은 내용을 입력하세요" value={form.content} onChange={handleChange} />
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded font-bold hover:bg-indigo-700 transition-colors" disabled={loading}>
            {loading ? "저장 중..." : "상담 신청하기"}
          </button>
          {result && <div className="mt-4 text-green-600 font-semibold">{result}</div>}
          {error && <div className="mt-4 text-red-600 font-semibold">{error}</div>}
        </form>
      </div>
      <div className="bg-indigo-50 p-6 rounded-lg shadow text-center">
        <h3 className="text-lg font-semibold mb-2 text-indigo-700">24시간 AI 챗봇 상담</h3>
        <p className="mb-4 text-gray-700">AI 챗봇에게 언제든지 궁금한 점을 물어보세요!</p>
        <Link href="/chat">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded font-bold hover:bg-indigo-700 transition-colors">
            AI 챗봇 시작하기
          </button>
        </Link>
      </div>
    </div>
  );
} 
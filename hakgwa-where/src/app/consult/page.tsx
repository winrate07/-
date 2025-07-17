"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ConsultPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    content: "",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

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
      } else {
        setError(data.error || "오류가 발생했습니다.");
      }
    } catch (err) {
      setError("서버와 통신 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

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
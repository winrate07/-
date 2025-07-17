"use client";

import React, { useState } from "react";

interface TestResult {
  logical: number;
  creative: number;
  social: number;
  artistic: number;
  scientific: number;
  personality: string;
  recommendedFields: string[];
}

export default function TestPage() {
  const [form, setForm] = useState({
    q1: "매우 그렇다",
    q2: "매우 그렇다",
    q3: "매우 그렇다",
    q4: "매우 그렇다",
    q5: "매우 그렇다",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [testResult, setTestResult] = useState<TestResult | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const analyzeResults = (answers: any): TestResult => {
    // 답변을 점수로 변환
    const scoreMap: { [key: string]: number } = {
      "매우 그렇다": 5,
      "그렇다": 4,
      "보통이다": 3,
      "아니다": 2,
      "전혀 아니다": 1,
    };

    const logical = scoreMap[answers.q1];
    const creative = scoreMap[answers.q2];
    const social = scoreMap[answers.q3];
    const artistic = scoreMap[answers.q4];
    const scientific = scoreMap[answers.q5];

    // 성격 유형 분석
    let personality = "";
    if (logical >= 4 && scientific >= 4) {
      personality = "분석적 사고형";
    } else if (creative >= 4 && artistic >= 4) {
      personality = "창의적 예술형";
    } else if (social >= 4) {
      personality = "사교적 소통형";
    } else if (scientific >= 4) {
      personality = "과학적 탐구형";
    } else {
      personality = "균형잡힌 일반형";
    }

    // 추천 분야
    const recommendedFields = [];
    if (logical >= 4) recommendedFields.push("컴퓨터공학", "수학", "경영학");
    if (creative >= 4) recommendedFields.push("디자인", "광고홍보", "문학");
    if (social >= 4) recommendedFields.push("심리학", "사회학", "교육학");
    if (artistic >= 4) recommendedFields.push("미술", "음악", "연극영화");
    if (scientific >= 4) recommendedFields.push("생명과학", "화학", "물리학");

    return {
      logical,
      creative,
      social,
      artistic,
      scientific,
      personality,
      recommendedFields: [...new Set(recommendedFields)].slice(0, 5),
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const res = await fetch("/api/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setResult("적성검사 결과가 성공적으로 저장되었습니다!");
        // 결과 분석 및 표시
        const analysis = analyzeResults(form);
        setTestResult(analysis);
        setShowResults(true);
      } else {
        setError(data.error || "오류가 발생했습니다.");
      }
    } catch (err) {
      setError("서버와 통신 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  if (showResults && testResult) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 text-indigo-700">적성 및 흥미 검사 결과</h1>
        
        {/* 성격 유형 */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">성격 유형 분석</h2>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">{testResult.personality}</div>
            <p className="text-gray-600">당신의 성격 유형입니다</p>
          </div>
        </div>

        {/* 영역별 점수 */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">영역별 분석</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">논리적 사고</span>
                <span className="text-indigo-600 font-bold">{testResult.logical}/5</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-indigo-500 h-3 rounded-full" 
                  style={{ width: `${(testResult.logical / 5) * 100}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">창의성</span>
                <span className="text-green-600 font-bold">{testResult.creative}/5</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-green-500 h-3 rounded-full" 
                  style={{ width: `${(testResult.creative / 5) * 100}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">사교성</span>
                <span className="text-purple-600 font-bold">{testResult.social}/5</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-purple-500 h-3 rounded-full" 
                  style={{ width: `${(testResult.social / 5) * 100}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">예술성</span>
                <span className="text-pink-600 font-bold">{testResult.artistic}/5</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-pink-500 h-3 rounded-full" 
                  style={{ width: `${(testResult.artistic / 5) * 100}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">과학적 탐구</span>
                <span className="text-orange-600 font-bold">{testResult.scientific}/5</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-orange-500 h-3 rounded-full" 
                  style={{ width: `${(testResult.scientific / 5) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* 추천 분야 */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">추천 학과 분야</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testResult.recommendedFields.map((field, index) => (
              <div key={index} className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                <h3 className="font-semibold text-indigo-700">{field}</h3>
                <p className="text-sm text-gray-600 mt-1">당신의 적성에 맞는 분야입니다</p>
              </div>
            ))}
          </div>
        </div>

        {/* 추가 안내 */}
        <div className="bg-indigo-50 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-semibold mb-2 text-indigo-700">검사 결과에 대한 안내</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• 이 결과는 간단한 설문을 바탕으로 한 참고 자료입니다.</li>
            <li>• 더 정확한 진로 상담을 원하시면 전문가 상담을 이용해 주세요.</li>
            <li>• 추천된 분야에 대해 더 자세히 알아보고 싶으시면 AI 챗봇을 이용해 주세요.</li>
            <li>• 학과 추천 페이지에서 이 결과를 활용하여 더 구체적인 학과를 추천받을 수 있습니다.</li>
          </ul>
        </div>

        {/* 다시 검사하기 버튼 */}
        <div className="text-center">
          <button 
            onClick={() => setShowResults(false)}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            다시 검사하기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-indigo-700">적성 및 흥미 검사</h2>
      <p className="mb-8 text-gray-700">
        아래 간단한 설문에 답변하시면, 나의 적성과 흥미를 분석해드립니다.<br />
        결과는 맞춤형 학과 추천에 활용됩니다.
      </p>
      <form className="space-y-6 bg-white p-6 rounded-lg shadow" onSubmit={handleSubmit}>
        <div>
          <label className="block font-semibold mb-1">1. 나는 논리적으로 문제를 해결하는 것을 좋아한다.</label>
          <select name="q1" className="w-full border rounded px-3 py-2" value={form.q1} onChange={handleChange}>
            <option>매우 그렇다</option>
            <option>그렇다</option>
            <option>보통이다</option>
            <option>아니다</option>
            <option>전혀 아니다</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-1">2. 새로운 아이디어를 생각해내는 것이 즐겁다.</label>
          <select name="q2" className="w-full border rounded px-3 py-2" value={form.q2} onChange={handleChange}>
            <option>매우 그렇다</option>
            <option>그렇다</option>
            <option>보통이다</option>
            <option>아니다</option>
            <option>전혀 아니다</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-1">3. 사람들과 소통하고 협력하는 것을 선호한다.</label>
          <select name="q3" className="w-full border rounded px-3 py-2" value={form.q3} onChange={handleChange}>
            <option>매우 그렇다</option>
            <option>그렇다</option>
            <option>보통이다</option>
            <option>아니다</option>
            <option>전혀 아니다</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-1">4. 예술, 음악, 디자인 등 창의적 활동에 관심이 많다.</label>
          <select name="q4" className="w-full border rounded px-3 py-2" value={form.q4} onChange={handleChange}>
            <option>매우 그렇다</option>
            <option>그렇다</option>
            <option>보통이다</option>
            <option>아니다</option>
            <option>전혀 아니다</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-1">5. 자연, 과학, 기술 분야에 흥미가 있다.</label>
          <select name="q5" className="w-full border rounded px-3 py-2" value={form.q5} onChange={handleChange}>
            <option>매우 그렇다</option>
            <option>그렇다</option>
            <option>보통이다</option>
            <option>아니다</option>
            <option>전혀 아니다</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded font-bold hover:bg-indigo-700 transition-colors" disabled={loading}>
          {loading ? "저장 중..." : "검사 결과 보기"}
        </button>
        {result && <div className="mt-4 text-green-600 font-semibold">{result}</div>}
        {error && <div className="mt-4 text-red-600 font-semibold">{error}</div>}
      </form>
    </div>
  );
} 
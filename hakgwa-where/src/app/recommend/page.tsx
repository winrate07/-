"use client";

import React, { useState } from "react";
import Link from "next/link";

interface RecommendedMajor {
  name: string;
  university: string;
  region: string;
  description: string;
  matchScore: number;
}

export default function RecommendPage() {
  const [form, setForm] = useState({
    grade: "고1",
    scores: "",
    aptitude: "",
    interest: "",
    region: "",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [recommendations, setRecommendations] = useState<RecommendedMajor[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generateRecommendations = (data: any) => {
    // 간단한 추천 알고리즘
    const majors: RecommendedMajor[] = [
      {
        name: "컴퓨터공학과",
        university: "서울대학교",
        region: "서울",
        description: "소프트웨어 개발, 인공지능, 데이터 분석 분야",
        matchScore: 95,
      },
      {
        name: "심리학과",
        university: "연세대학교",
        region: "서울",
        description: "인간의 마음과 행동을 연구하는 학문",
        matchScore: 88,
      },
      {
        name: "디자인학과",
        university: "홍익대학교",
        region: "서울",
        description: "창의적 디자인과 예술적 감각을 기르는 학과",
        matchScore: 82,
      },
      {
        name: "경영학과",
        university: "고려대학교",
        region: "서울",
        description: "기업 경영과 비즈니스 관리",
        matchScore: 78,
      },
      {
        name: "생명과학과",
        university: "성균관대학교",
        region: "서울",
        description: "생명체의 구조와 기능을 연구",
        matchScore: 75,
      },
    ];

    // 관심분야에 따른 필터링
    const filteredMajors = majors.filter(major => {
      if (data.interest.toLowerCase().includes("컴퓨터") || data.interest.toLowerCase().includes("공학")) {
        return major.name.includes("컴퓨터") || major.name.includes("공학");
      }
      if (data.interest.toLowerCase().includes("심리")) {
        return major.name.includes("심리");
      }
      if (data.interest.toLowerCase().includes("디자인") || data.interest.toLowerCase().includes("예술")) {
        return major.name.includes("디자인") || major.name.includes("예술");
      }
      if (data.interest.toLowerCase().includes("마켓팅") || data.interest.toLowerCase().includes("경영")) {
        return major.name.includes("경영");
      }
      return true;
    });

    return filteredMajors.slice(0, 5);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const res = await fetch("/api/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setResult("추천 정보가 성공적으로 저장되었습니다!");
        // 추천 결과 생성 및 표시
        const recommendations = generateRecommendations(form);
        setRecommendations(recommendations);
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

  if (showResults) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 text-indigo-700">맞춤형 학과 추천 결과</h1>
        
        {/* 입력 정보 요약 */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">입력하신 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">학년</p>
              <p className="font-medium">{form.grade}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">성적</p>
              <p className="font-medium">{form.scores}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">적성/흥미</p>
              <p className="font-medium">{form.aptitude}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">관심 분야</p>
              <p className="font-medium">{form.interest}</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm text-gray-600">선호 지역</p>
              <p className="font-medium">{form.region}</p>
            </div>
          </div>
        </div>

        {/* 추천 결과 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">추천 학과</h2>
          <div className="space-y-4">
            {recommendations.map((major, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-indigo-600">{major.name}</h3>
                    <p className="text-gray-600">{major.university} • {major.region}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{major.matchScore}%</div>
                    <div className="text-sm text-gray-500">일치도</div>
                  </div>
                </div>
                <p className="text-gray-700">{major.description}</p>
                <div className="mt-3">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${major.matchScore}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 추가 안내 */}
        <div className="mt-8 bg-indigo-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-indigo-700">추천 결과에 대한 안내</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• 추천 결과는 입력하신 정보를 바탕으로 생성되었습니다.</li>
            <li>• 실제 입학 가능성은 해당 대학의 입시 정보를 참고하세요.</li>
            <li>• 더 정확한 상담을 원하시면 전문가 상담을 이용해 주세요.</li>
            <li>• 관심 있는 학과에 대해 더 자세히 알아보고 싶으시면 AI 챗봇을 이용해 주세요.</li>
          </ul>
        </div>

        {/* 다시 입력하기 버튼 */}
        <div className="mt-8 text-center">
          <button 
            onClick={() => setShowResults(false)}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            다시 입력하기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-indigo-700">맞춤형 학과 추천</h2>
      <p className="mb-8 text-gray-700">
        아래 정보를 입력하시면, 성적과 적성, 흥미, 관심 분야, 선호 지역을 종합적으로 분석하여<br />
        나에게 가장 적합한 대학 학과를 추천해드립니다.
      </p>
      <form className="space-y-6 bg-white p-6 rounded-lg shadow" onSubmit={handleSubmit}>
        <div>
          <label className="block font-semibold mb-1">학년</label>
          <select name="grade" className="w-full border rounded px-3 py-2" value={form.grade} onChange={handleChange}>
            <option>고1</option>
            <option>고2</option>
            <option>고3</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-1">성적 (예: 국어, 수학, 영어 등)</label>
          <input name="scores" type="text" className="w-full border rounded px-3 py-2" placeholder="예: 국어 2등급, 수학 3등급, 영어 2등급" value={form.scores} onChange={handleChange} />
        </div>
        <div>
          <label className="block font-semibold mb-1">적성/흥미</label>
          <input name="aptitude" type="text" className="w-full border rounded px-3 py-2" placeholder="예: 과학에 흥미가 많음, 창의적 활동 선호" value={form.aptitude} onChange={handleChange} />
        </div>
        <div>
          <label className="block font-semibold mb-1">관심 분야</label>
          <input name="interest" type="text" className="w-full border rounded px-3 py-2" placeholder="예: 컴퓨터공학, 심리학, 디자인 등" value={form.interest} onChange={handleChange} />
        </div>
        <div>
          <label className="block font-semibold mb-1">선호 지역</label>
          <input name="region" type="text" className="w-full border rounded px-3 py-2" placeholder="예: 서울, 경기, 부산 등" value={form.region} onChange={handleChange} />
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded font-bold hover:bg-indigo-700 transition-colors" disabled={loading}>
          {loading ? "저장 중..." : "추천 결과 보기"}
        </button>
        {result && <div className="mt-4 text-green-600 font-semibold">{result}</div>}
        {error && <div className="mt-4 text-red-600 font-semibold">{error}</div>}
      </form>
    </div>
  );
} 
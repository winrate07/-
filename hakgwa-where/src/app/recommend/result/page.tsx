"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

interface RecommendResult {
  id: number;
  grade: string;
  scores: string;
  aptitude: string;
  interest: string;
  region: string;
}

interface RecommendedMajor {
  name: string;
  university: string;
  region: string;
  description: string;
  matchScore: number;
}

export default function RecommendResultPage() {
  const searchParams = useSearchParams();
  const [result, setResult] = useState<RecommendResult | null>(null);
  const [recommendations, setRecommendations] = useState<RecommendedMajor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestRecommend = async () => {
      try {
        const res = await fetch("/api/data?type=recommend&limit=1");
        const data = await res.json();
        if (res.ok && data.data.length > 0) {
          setResult(data.data[0]);
          generateRecommendations(data.data[0]);
        }
      } catch (error) {
        console.error("데이터 조회 실패:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestRecommend();
  }, []);

  const generateRecommendations = (data: RecommendResult) => {
    // 간단한 추천 알고리즘 (실제로는 더 복잡한 로직 필요)
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
      return true;
    });

    setRecommendations(filteredMajors.slice(0, 5));
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="text-center">
          <p className="text-gray-500">추천 결과를 분석 중입니다...</p>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="text-center">
          <p className="text-red-500">추천 데이터를 찾을 수 없습니다.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-indigo-700">맞춤형 학과 추천 결과</h1>
      
      {/* 입력 정보 요약 */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">입력하신 정보</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">학년</p>
            <p className="font-medium">{result.grade}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">성적</p>
            <p className="font-medium">{result.scores}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">적성/흥미</p>
            <p className="font-medium">{result.aptitude}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">관심 분야</p>
            <p className="font-medium">{result.interest}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm text-gray-600">선호 지역</p>
            <p className="font-medium">{result.region}</p>
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
    </div>
  );
} 
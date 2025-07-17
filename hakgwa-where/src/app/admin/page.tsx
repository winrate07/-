"use client";

import React, { useState, useEffect } from "react";

interface Recommend {
  id: number;
  grade: string;
  scores: string;
  aptitude: string;
  interest: string;
  region: string;
  createdAt: string;
}

interface AptitudeTest {
  id: number;
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  createdAt: string;
}

interface Consult {
  id: number;
  name: string;
  email: string;
  content: string;
  createdAt: string;
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("recommend");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({
    recommend: 0,
    test: 0,
    consult: 0,
  });

  const fetchData = async (type: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/data?type=${type}&limit=50`);
      const result = await res.json();
      if (res.ok) {
        setData(result.data);
      }
    } catch (error) {
      console.error("데이터 조회 실패:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const res = await fetch("/api/data?type=all&limit=1");
      const result = await res.json();
      if (res.ok) {
        setStats({
          recommend: result.data.recommends.length,
          test: result.data.tests.length,
          consult: result.data.consults.length,
        });
      }
    } catch (error) {
      console.error("통계 조회 실패:", error);
    }
  };

  useEffect(() => {
    fetchData(activeTab);
    fetchStats();
  }, [activeTab]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("ko-KR");
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-indigo-700">관리자 대시보드</h1>
      
      {/* 통계 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">학과 추천</h3>
          <p className="text-3xl font-bold text-indigo-600">{stats.recommend}</p>
          <p className="text-sm text-gray-500">총 신청 건수</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">적성 검사</h3>
          <p className="text-3xl font-bold text-green-600">{stats.test}</p>
          <p className="text-sm text-gray-500">총 검사 건수</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">상담 신청</h3>
          <p className="text-3xl font-bold text-purple-600">{stats.consult}</p>
          <p className="text-sm text-gray-500">총 신청 건수</p>
        </div>
      </div>

      {/* 탭 네비게이션 */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="border-b">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab("recommend")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "recommend"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              학과 추천
            </button>
            <button
              onClick={() => setActiveTab("test")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "test"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              적성 검사
            </button>
            <button
              onClick={() => setActiveTab("consult")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "consult"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              상담 신청
            </button>
          </nav>
        </div>

        <div className="p-6">
          {loading ? (
            <div className="text-center py-8">
              <p className="text-gray-500">데이터를 불러오는 중...</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              {activeTab === "recommend" && data && (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">학년</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">성적</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">적성/흥미</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">관심분야</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">선호지역</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">신청일시</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((item: Recommend) => (
                      <tr key={item.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.grade}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{item.scores}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{item.aptitude}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{item.interest}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{item.region}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(item.createdAt)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {activeTab === "test" && data && (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Q1</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Q2</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Q3</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Q4</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Q5</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">검사일시</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((item: AptitudeTest) => (
                      <tr key={item.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.id}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{item.q1}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{item.q2}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{item.q3}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{item.q4}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{item.q5}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(item.createdAt)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {activeTab === "consult" && data && (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">이름</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">이메일</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상담내용</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">신청일시</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((item: Consult) => (
                      <tr key={item.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.email}</td>
                        <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">{item.content}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(item.createdAt)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 
"use client";

import { Play, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

// Fallback data or empty initial state
const INITIAL_CASES: any[] = [];

const CATEGORIES = ["All", "F&B", "Beauty", "Education", "Health", "Professional", "Fashion"];

export default function CasesPage() {
  const [filter, setFilter] = useState("All");
  const [cases, setCases] = useState<any[]>(INITIAL_CASES);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/cases')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const formattedData = data.map((item: any) => ({
            ...item,
            // Fallback for demo if no thumbnail provided
            thumbnail: item.thumbnail || null,
            image: item.image || "bg-slate-50" 
          }));
          setCases(formattedData);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch cases:", err);
        setLoading(false);
      });
  }, []);

  const filteredCases = filter === "All" 
    ? cases 
    : cases.filter(c => c.category === filter);

  return (
    <div className="bg-white min-h-screen py-20 text-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 pt-20">
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">성공 사례</h1>
          <p className="text-gray-500 text-lg font-medium">아이캔스토리와 함께 성장한 브랜드들을 소개합니다.</p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all border ${
                filter === cat
                  ? "bg-primary text-white border-primary shadow-lg shadow-blue-500/30"
                  : "bg-white text-gray-500 border-gray-200 hover:border-primary hover:text-primary hover:bg-blue-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className={`relative aspect-[9/16] md:aspect-video ${item.thumbnail ? '' : item.image} bg-slate-100 rounded-2xl overflow-hidden mb-4 shadow-md border border-gray-200 group-hover:border-blue-300 group-hover:shadow-xl transition-all duration-300`}>
                {item.thumbnail ? (
                  <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                ) : (
                   <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-105 transition-transform duration-700" />
                )}
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-[2px]">
                  <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center border border-white shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-primary fill-current ml-1" />
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                   <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-2 text-primary border border-gray-200 shadow-sm">
                    <TrendingUp className="w-4 h-4" /> {item.metric}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-primary bg-blue-50 px-2 py-1 rounded border border-blue-100">{item.category}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{item.title}</h3>
            </div>
          ))}
          
          {/* Demo Item if empty */}
          {cases.length === 0 && !loading && (
            <div className="col-span-full text-center py-20 text-gray-500 bg-slate-50 rounded-2xl border border-gray-100">
              <p className="mb-2">등록된 성공 사례가 없습니다.</p>
              <p className="text-sm text-gray-400">관리자 페이지에서 사례를 추가해주세요.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Reference } from "@/lib/types";
import { Play, ExternalLink } from "lucide-react";

interface ReferenceListProps {
  initialReferences: Reference[];
}

export default function ReferenceList({ initialReferences }: ReferenceListProps) {
  const [filter, setFilter] = useState("ALL");
  
  // Extract unique categories
  const categories = ["ALL", ...Array.from(new Set(initialReferences.map(r => r.category)))];

  const filteredReferences = filter === "ALL" 
    ? initialReferences 
    : initialReferences.filter(r => r.category === filter);

  return (
    <div className="w-full">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
              filter === cat 
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30" 
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredReferences.map((ref) => (
          <div key={ref.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            {/* Thumbnail */}
            <div className="relative aspect-[9/16] bg-slate-100 overflow-hidden">
              {ref.thumb_url ? (
                <img 
                  src={ref.thumb_url} 
                  alt={ref.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-400">
                  <Play className="w-12 h-12 opacity-50" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              <div className="mb-2">
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md uppercase tracking-wider">
                  {ref.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">{ref.title}</h3>
              <p className="text-slate-500 text-sm line-clamp-3 mb-6 flex-1">
                {ref.description}
              </p>
              
              <a 
                href={ref.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl border border-slate-200 font-bold text-slate-700 flex items-center justify-center gap-2 hover:bg-slate-50 hover:border-slate-300 transition-all"
              >
                영상 보러가기 <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredReferences.length === 0 && (
        <div className="text-center py-20 text-slate-400">
          해당 카테고리의 레퍼런스가 없습니다.
        </div>
      )}
    </div>
  );
}

"use client";

import { MessageCircle } from "lucide-react";

export default function KakaoFloatingBtn() {
  return (
    <a
      href="https://open.kakao.com/o/s8Xm3p6h"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#FEE500] text-[#000000] px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-bold"
      aria-label="카카오톡 상담하기"
    >
      <MessageCircle className="w-6 h-6 fill-black" />
      <span className="hidden md:inline">카카오톡 상담</span>
    </a>
  );
}

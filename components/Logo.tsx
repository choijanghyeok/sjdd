import React from "react";

interface LogoProps {
  className?: string;
  isFooter?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", isFooter = false }) => {
  return (
    <div className={`flex items-center gap-[10px] no-underline ${className}`}>
      {/* 로고 아이콘 */}
      <svg
        width={isFooter ? "32" : "40"}
        height={isFooter ? "32" : "40"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:rotate-[5deg]"
      >
        <path
          d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
          stroke={isFooter ? "white" : "#2563eb"}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
          stroke={isFooter ? "white" : "#2563eb"}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {/* 로고 텍스트 */}
      <span
        className={`font-bold tracking-tighter ${
          isFooter ? "text-white text-xl" : "text-royal-blue text-2xl"
        }`}
      >
        I CAN STORY
      </span>
    </div>
  );
};

export default Logo;

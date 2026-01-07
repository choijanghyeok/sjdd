import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "I CAN STORY - SNS 디렉팅 서비스",
  description: "90일 동안 매출과 SNS 마케팅 기준을 함께 만듭니다. 소상공인, 1인 사업가, 기업을 위한 졸업형 SNS 디렉팅 프로그램.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

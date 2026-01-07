"use client";

import AdminGuard from "@/components/AdminGuard";
import ReferenceForm from "@/components/ReferenceForm";

export default function AdminPage() {
  return (
    <AdminGuard>
      <div className="mb-8">
        <h1 className="text-3xl font-black text-slate-900">레퍼런스 관리</h1>
        <p className="text-slate-500 mt-2">홈페이지에 노출되는 레퍼런스를 등록, 수정, 삭제합니다.</p>
      </div>
      <ReferenceForm />
    </AdminGuard>
  );
}

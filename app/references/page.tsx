
import ReferenceList from "@/components/ReferenceList";
import { supabase } from "@/lib/supabaseClient";
import { Reference } from "@/lib/types";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const revalidate = 0; // Disable cache for real-time updates

export default async function ReferencesPage() {
  const { data: references, error } = await supabase
    .from("references")
    .select("*")
    .eq("is_public", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching references:", error);
    return <div>Error loading references</div>;
  }

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <header className="pt-24 pb-16 container mx-auto px-4 text-center">
        <div className="mb-8">
           <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold transition-colors">
              <ArrowLeft size={20} /> 홈으로 돌아가기
           </Link>
        </div>
        <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-slate-900">
          주요 레퍼런스
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
          아이캔스토리의 성공적인 숏폼 마케팅 사례를 확인하세요.
        </p>
      </header>

      <main className="container mx-auto px-4 pb-24">
        <ReferenceList initialReferences={references as Reference[] || []} />
      </main>
    </div>
  );
}

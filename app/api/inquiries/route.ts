import { NextResponse } from 'next/server';
import { supabase, isDemoMode } from '@/lib/supabaseClient';

export const dynamic = 'force-dynamic';

// In-memory storage for demo mode (Note: this resets on server restart/redeploy)
let demoInquiries: any[] = [];

export async function GET() {
  try {
    if (isDemoMode) {
      console.log('Running in DEMO MODE');
      return NextResponse.json(demoInquiries);
    }

    const { data, error } = await supabase
      .from('inquiries')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      // Fallback to demo mode if DB connection fails
      return NextResponse.json(demoInquiries);
    }

    // Map created_at to date for frontend compatibility
    const formattedData = data.map(item => ({
      ...item,
      date: item.created_at
    }));

    return NextResponse.json(formattedData);
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json([]);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const newInquiry = {
      id: Date.now(), // Mock ID for demo
      name: body.name,
      company: body.company || "",
      phone: body.phone,
      email: body.email || "",
      sns: body.sns || "",
      channel: body.channel || "", // Added channel field
      plan: body.plan || "consulting", // Added plan field
      message: body.message || "",
      status: 'new', // new, contacted, closed
      created_at: new Date().toISOString(), // Mock date
      date: new Date().toISOString() // Mock date
    };

    if (isDemoMode) {
      console.log('Saving to DEMO storage:', newInquiry);
      demoInquiries.unshift(newInquiry);
      return NextResponse.json(newInquiry);
    }
    
    const { data, error } = await supabase
      .from('inquiries')
      .insert([{
        name: newInquiry.name,
        company: newInquiry.company,
        phone: newInquiry.phone,
        email: newInquiry.email,
        sns: newInquiry.sns,
        channel: newInquiry.channel,
        plan: newInquiry.plan,
        message: newInquiry.message,
        status: newInquiry.status
      }])
      .select();

    if (error) {
      console.error('Supabase insert error:', error);
      // Fallback to demo mode if DB fails so user doesn't see error
      demoInquiries.unshift(newInquiry);
      return NextResponse.json(newInquiry); 
    }
    
    return NextResponse.json(data ? data[0] : newInquiry);
  } catch (error) {
    console.error('Request processing error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

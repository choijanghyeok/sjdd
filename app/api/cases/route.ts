import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'cases.json');

// Helper to read data
function getCases() {
  try {
    const fileData = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(fileData);
  } catch (error) {
    return [];
  }
}

// Helper to write data
function saveCases(cases: any[]) {
  fs.writeFileSync(dataFilePath, JSON.stringify(cases, null, 2));
}

export async function GET() {
  const cases = getCases();
  return NextResponse.json(cases);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const cases = getCases();
    
    const newCase = {
      id: Date.now().toString(),
      ...body,
    };
    
    cases.push(newCase);
    saveCases(cases);
    
    return NextResponse.json(newCase, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create case' }, { status: 500 });
  }
}

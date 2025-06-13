import { NextRequest, NextResponse } from 'next/server';
import { moods, MoodEntry } from '../../utils/moods';


export async function GET() {
  return NextResponse.json(moods);
}

export async function POST(req: NextRequest) {
  const { mood, comment } = await req.json();
  const newEntry: MoodEntry = {
    mood,
    comment,
    time: new Date().toISOString(),
  };
  moods.unshift(newEntry);
  return NextResponse.json({ message: 'Mood saved' });
}

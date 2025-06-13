'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Mood Tracker</h1>
      <Link href="/mood">
        <Button className="text-lg">Submit Your Mood</Button>
      </Link>
    </main>
  );
}
'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const moods = [
  { icon: '😄', label: 'Happy' },
  { icon: '😐', label: 'Normal' },
  { icon: '😞', label: 'Sad' },
];

export default function MoodPage() {
  const [selected, setSelected] = useState('');
  const [comment, setComment] = useState('');
  const router = useRouter();

  async function handleSubmit() {
    if (!selected) return alert('Please select a mood');
    await fetch('/api/mood', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mood: selected, comment }),
    });
    router.push('/admin');
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4 p-4">
      <h2 className="text-3xl font-semibold">How are you feeling today?</h2>
      <div className="flex gap-4">
        {moods.map((m) => (
          <button
            key={m.label}
            className={`text-4xl p-4 border rounded-xl ${selected === m.label ? 'bg-gray-200' : ''}`}
            onClick={() => setSelected(m.label)}>
            {m.icon}
          </button>
        ))}
      </div>
      <textarea
        placeholder="Optional comment..."
        className="border p-2 rounded w-64"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </main>
  );
}
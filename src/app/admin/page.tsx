'use client';
import useSWR from 'swr';
import { columns } from './columns';
import { DataTable } from '@/components/ui/Data-Table';

async function fetcher(url: string) {
  const res = await fetch(url);
  return res.json();
}

export default function AdminPage() {
  const { data, error } = useSWR('/api/mood', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mood Submissions</h1>
      <DataTable columns={columns} data={data} />
    </main>
  );
}
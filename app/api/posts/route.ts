import { NextResponse } from 'next/server';

export async function GET() {
  // This is mock data. In a real app, you'd fetch this from a database or file system
  const posts = [
    { id: 1, title: 'First Post', date: '2024-06-29' },
    { id: 2, title: 'Second Post', date: '2024-06-30' },
  ];

  return NextResponse.json(posts);
}
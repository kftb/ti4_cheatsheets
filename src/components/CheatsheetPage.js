import dynamic from 'next/dynamic';
import React from 'react';

const Cheatsheet = dynamic(import('./SheetGenerator'), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center justify-center h-screen gap-4 text-gray-300">
      <div className="w-12 h-12 border-4 border-gray-600 border-t-orange-500 rounded-full animate-spin" />
      <span className="text-lg">Generating cheat sheet…</span>
    </div>
  ),
});

function CheatsheetPage() {
  return (
    <div>
      <Cheatsheet />
    </div>
  );
}

export default CheatsheetPage;

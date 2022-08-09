import dynamic from 'next/dynamic';
import React from 'react';

function CheatsheetPage() {
  const Cheatsheet = dynamic(import('./SheetGenerator'), { ssr: false });
  return (
    <div>
      <Cheatsheet />
    </div>
  );
}

export default CheatsheetPage;

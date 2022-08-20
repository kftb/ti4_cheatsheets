import dynamic from 'next/dynamic.js';
import React from 'react';

function FactionCardPage() {
  const FCPage = dynamic(import('./FactionCardSheetGenerator.js'), { ssr: false });
  return (
    <div>
      <FCPage />
    </div>
  );
}

export default FactionCardPage;

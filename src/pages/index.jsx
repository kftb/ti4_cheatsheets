import ReactPDF from '@react-pdf/renderer';
import dynamic from 'next/dynamic';

export default function Home() {
  const CheatSheet = dynamic(import('../components/CheatSheet'), { ssr: false });

  return (
    <>
      <div>
        {' '}
        <CheatSheet />
      </div>
    </>
  );
}

'use client';

import { HeroHome } from '@/components/hero-home';

export default function Home() {
  const handleContextMenu = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  };


  return (
    <main className="min-h-screen bg-background"
    onContextMenu={handleContextMenu}>
      <HeroHome />
    </main>
  )
}

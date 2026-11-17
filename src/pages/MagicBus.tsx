import { useEffect } from 'react';

// The Magic Cool Bus Challenge, embedded full screen.
// The demo link opens the game with every station unlocked and saves nothing.
const GAME_URL = 'https://magiccoolbus.vercel.app/?demo=mcb-tour-27';

export default function MagicBus() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'The Magic Cool Bus Challenge | Justin Shaifer';
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <iframe
      src={GAME_URL}
      title="The Magic Cool Bus Challenge"
      allow="autoplay; fullscreen; clipboard-write"
      allowFullScreen
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100dvh',
        border: 'none',
        margin: 0,
        padding: 0,
        background: '#fff9ec',
      }}
    />
  );
}

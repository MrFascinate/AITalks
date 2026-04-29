export default function TheUniverseGame() {
  return (
    <iframe
      src="https://the-universe-game.vercel.app/"
      title="The Universe Game"
      allow="autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; accelerometer"
      allowFullScreen
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        border: 'none',
        margin: 0,
        padding: 0,
      }}
    />
  );
}

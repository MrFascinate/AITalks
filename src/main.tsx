import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import AISpeakerCorporate from './pages/AISpeakerCorporate.tsx'
import AISpeakerHigherEd from './pages/AISpeakerHigherEd.tsx'
import AILiteracyWorkshop from './pages/AILiteracyWorkshop.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ai-keynote-speaker-corporate" element={<AISpeakerCorporate />} />
        <Route path="/ai-keynote-speaker-higher-education" element={<AISpeakerHigherEd />} />
        <Route path="/ai-literacy-workshop" element={<AILiteracyWorkshop />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

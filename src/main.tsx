import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Parent from './Parent.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="flex justify-center items-center min-h-screen">
      <Parent />
    </div>
  </StrictMode>
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import InlineApp from './components/inlineApp';


createRoot(document.getElementById('root')).render(
  <StrictMode>
 <InlineApp/>
  </StrictMode>,
);

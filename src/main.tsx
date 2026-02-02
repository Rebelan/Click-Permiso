import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Pagina } from './Pagina'



createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Pagina />
  </BrowserRouter>
)

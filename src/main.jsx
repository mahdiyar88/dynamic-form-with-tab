import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import TabCreator from './components/tabCreator/tabCreator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div dir='rtl'>
    <TabCreator />
    </div>

  </StrictMode>,
)

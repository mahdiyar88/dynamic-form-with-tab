import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import FormCreator from './components/formCreator/FormCreator'
// import App from './App'
// import FormCreator from './components/formCreator/FormCreator'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div dir='rtl'>
      {/* <TabCreator />
     */}
      <FormCreator data={[{name:"djebd"}]}/>
    </div>

  </StrictMode>,
)

import React, { useState } from 'react'

const TabCreator = () => {
  const tab = [
    {
      id: 0,
      title: "اطلاعات من",
      content: <div>
        this is a main content for step1
        
      </div>
    }, {
      id: 1,
      title: "اطلاعات من2",
      content: <div>this is a main content for step2</div>
    }, {
      id: 2,
      title: "اطلاعات من3",
      content: <div>this is a main content for step3</div>
    }
  ]
  const [step, setStep] = useState(0)
  return (
    <div className='w-full mt-56  '>
      <div className='w-6/12 mx-auto flex gap-5   p-2 border rounded'>
        {
          tab.map(el =>
            <div onClick={()=>setStep(el.id)} className={`${step == el.id ? "bg-blue-500 ":"bg-blue-300"}  p-2 rounded-xl hover:bg-blue-700 duration-150 cursor-pointer `}>
              {el.title}
            </div>
          )
        }
      </div>
      <div className='bg-neutral-900/70   min-h-96 w-8/12 mx-auto rounded-lg shadow-md m-5 p-5  '>
        {tab[step].content }
      </div>
    </div>
  )
}

export default TabCreator
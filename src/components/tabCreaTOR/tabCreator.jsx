import React, { useState } from 'react'
import FormCreator from '../formCreator/FormCreator'

const TabCreator = () => {
  const tab = {
    tabs: [
      {
        id: 0,
        title: "اطلاعات من",
        fields: [{ name: "t1-n1" }, { name: "t1-n2" }],
        content: <div>
          this is a main content for step1
          {/* <FormCreator data={[{ name: "t1-n1" }, { name: "t1-n2" }]} /> */}
        </div>
      }, {
        id: 1,
        title: "اطلاعات من2",
        fields: [{ name: "t12-n1" }, { name: "t12-n2" }],
        content: <div>this is a main content for step2 </div>

      }, {
        id: 2,
        title: "اطلاعات من3",
        fields: [{ name: "t13-n1" }, { name: "t13-n2" }],
        content: <div>this is a main content for step3 </div>
      }
    ]
  }
  const onSubmit = (data) => {
    console.log(data)

  }
  const [step, setStep] = useState(0);
  const allFields = () => {
    let fields = []
    tab.tabs.forEach(tabEl => {
      tabEl.fields.forEach(el => {
        el["page"] = tabEl.id
        fields.push(el)
      })
    })
    return fields
  }
  return (
    <div className='w-full mt-56  '>
      <div className='w-6/12 mx-auto flex gap-5   p-2 border rounded'>
        {
          tab.tabs.map(el =>
            <div onClick={() => setStep(el.id)} className={`${step == el.id ? "bg-blue-500 " : "bg-blue-300"}  p-2 rounded-xl hover:bg-blue-700 duration-150 cursor-pointer `}>
              {el.title}
            </div>
          )
        }
      </div>
      <div className='bg-neutral-900/70   min-h-96 w-8/12 mx-auto rounded-lg shadow-md m-5 p-5  '>
        {tab.tabs[step].content}
        <FormCreator onSubmit={onSubmit} step={[step, tab.tabs.length - 1, () => setStep(e => e + 1)]} allData={allFields()} data={tab.tabs[step].fields} />
      </div>
    </div>
  )
}

export default TabCreator
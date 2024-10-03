
import { Field } from 'formik'
import React from 'react'

const FieldCreator = ({ data }) => {
    return (
        <div className='flex flex-col gap-5 ' >
            {data.map(el => <div>
                <h2 className='text-white '>کد فیلد شما:{el.name + "--" + el.page} </h2>

                <Field className="w-72 rounded-xl px-2  h-10 " id={el.name} placeHolder={el.name} name={el.name} />
            </div>
            )}
        </div>
    )
}
export default FieldCreator
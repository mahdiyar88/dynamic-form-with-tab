
import { Field } from 'formik'
import React from 'react'

const FieldCreator = ({ data }) => {
    return (
        <div className='flex flex-col gap-5 ' >
            {data.map(el =>
                <Field placeHolder={el.name} name={el.name} />
            )}
        </div>
    )
}

export default FieldCreator
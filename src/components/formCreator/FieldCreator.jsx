
import { Field } from 'formik'
import React from 'react'

const FieldCreator = ({ data }) => {
    return (
        <div >
            {data.map(el =>
                <Field placeHolder={el.name} name={el.name} />
            )}
        </div>
    )
}

export default FieldCreator
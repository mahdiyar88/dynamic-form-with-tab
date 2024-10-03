import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import FieldCreator from './FieldCreator';
import DataCreator from './DataCreator';

const FormCreator = () => {
    const [data,setData]=useState([]);
    const [initialValue, setInitialValue] = useState();
    useEffect(() => {
        setInitialValue();
        let values = {};
        data.forEach(el => {
            values[el.name] = ""
        })
        setInitialValue(values)
    }, [data])
    return (
        <div className='flex justify-around items-center pt-56 '>
            <DataCreator  setData={setData} />
            {initialValue && <Formik onSubmit={console.log} initialValues={initialValue}>
                <Form>
                    <FieldCreator data={data} />
                    <button type="submit" className='p-3 rounded-xl bg-red-500 '>submit</button>
                    {/* {renderValue} */}
                </Form>
            </Formik>}

        </div>
    )
}

export default FormCreator
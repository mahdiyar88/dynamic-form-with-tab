import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import FieldCreator from './FieldCreator';
import DataCreator from './DataCreator';

const FormCreator = ({ data, allData, onSubmit, step }) => {
    // const [data, setData] = useState([{ name: "hbjv" }, { name: "hbj2v" }]);
    const [initialValue, setInitialValue] = useState(null);
    const [start, setStart] = useState(false);
    useEffect(() => {
        // setData(null);
        console.log(allData)
        let values = {};
        allData.forEach(el => {
            values[el.name] = ""
        })
        setInitialValue(values)
        // console.log(data,initialValue)
    }, [data])

    return (
        <div className='flex justify-around items-center '>
            {/* <DataCreator data={data} setData={setData} /> */}
            {initialValue != null && <Formik initialValues={initialValue} onSubmit={step[0] == step[1] ? onSubmit : () => step[2]()}>
                <Form>
                    <FieldCreator data={data} />
                    <button type="submit" className='p-3 mt-2  rounded-xl w-full  bg-red-500 '>submit</button>
                    {/* {renderValue} */}
                </Form>
            </Formik>}

        </div>
    )
}

export default FormCreator
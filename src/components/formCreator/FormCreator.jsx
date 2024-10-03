import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import FieldCreator from './FieldCreator';
import DataCreator from './DataCreator';

const FormCreator = () => {
    const [data, setData] = useState([{ name: "hbjv" }, { name: "hbj2v" }]);
    const [initialValue, setInitialValue] = useState(null);
    const [start,setStart]=useState(false);
    useEffect(() => {
        // setData(null);

        let values = {};
        data.forEach(el => {
            values[el.name] = ""
        })
        setInitialValue(values)
        console.log(data,initialValue)
    }, [data])
    return (
        <div className='flex justify-around items-center pt-56 '>
            {/* <DataCreator data={data} setData={setData} /> */}
            {initialValue != null && <Formik onSubmit={console.log}>
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
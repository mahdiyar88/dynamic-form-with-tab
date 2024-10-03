import React from 'react'

const DataCreator = ({ setData ,data}) => {
    return (
        <div className='p-10 w-96 bg-slate-200/30 rounded-lg '>
            <button className='p-2 bg-green-500 w-full ' onClick={() => setData([...data,{name:Math.random()}])}>
                Add Field
            </button>
            <button className='p-2 mt-2  bg-red-500 w-full '>
                Delete Field
            </button>
        </div>
    )
}

export default DataCreator
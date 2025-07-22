import React from 'react'

const Select = ({title, options}) => {
  return (
    <div className='flex justify-between p-4'>
        <div className='w-[50%]'>
            <p className='font-semibold text-[15px] text-[#333333]'>{title}</p>
        </div>
        <div className='w-[50%]'>
            <select className='bg-white p-[3px] border-1 border-[#ced4da] w-full rounded-sm px-2'>
                {options.map((data, index) => (
                    <option key={index} value={data.option}>
                        {data.option}
                    </option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default Select
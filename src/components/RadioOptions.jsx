import React from 'react';

const RadioOptions = ({ title, options }) => {
  return (
    <div className='flex flex-col p-4 shadow-[0_1px_4px_rgba(0,0,0,0.35)] rounded-xl min-h-[200px]'>
      <p className='font-black text-[15px] text-[#333333]'>{title}</p>
      <div className='mt-2 space-y-2'>
        {options.map((option, index) => (
          <div key={index} className='flex items-center'>
            <input
              type='radio'
              id={`${title.replace(/\s+/g, '-').toLowerCase()}-${index}`}
              name={title.replace(/\s+/g, '-').toLowerCase()}
              value={option.option}
              className='mr-2'
            />
            <label htmlFor={`${title.replace(/\s+/g, '-').toLowerCase()}-${index}`} className='text-[15px]'>
              {option.option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioOptions; 
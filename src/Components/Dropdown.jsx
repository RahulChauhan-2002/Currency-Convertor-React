import React from 'react'


const Dropdown=(
    {
        currency,
        title
    }
)=>{
    return (
        <div>
            <label className='block font-bold text-gray-700 text-xl' htmlFor={title}>
              {title}
            </label>
            <div>
                <select className='w-full p-2 border border-gray-300 rounded-md shadow-sm block font-bold text-gray-500'>
                    {currency?.map((currency)=>{
                        return (
                            <option value={currency} key={currency}>
                                {currency}
                            </option>
                        );
                    })}
                </select>
            </div>
        </div>
      )
}

 
export default Dropdown
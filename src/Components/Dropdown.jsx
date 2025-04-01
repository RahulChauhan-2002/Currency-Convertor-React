import React from 'react'


const Dropdown=(
    {
        setCurrency,
        currency,
        currencies,
        title
    }
)=>{
    return (
        <div>
            <label className='block font-bold text-gray-700 text-xl' htmlFor={title}>
              {title}
            </label>
            <div>
                <select 
                  value={currency}
                  onChange={(e)=>setCurrency(e.target.value)}
                  className='w-full p-2 px-4  border border-gray-300 rounded-md shadow-sm block font-bold text-gray-500'>
                    {currencies?.map((currency)=>{
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
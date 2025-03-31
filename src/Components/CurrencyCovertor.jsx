import React, { useEffect, useState } from 'react'
import Dropdown from './Dropdown'

const CurrencyCovertor = () => {

    const [amount,setAmount]=useState(0)
    const [currency,setCurrency]=useState([])
    const [fromCurrency,setfromCurrency]=useState("USD")
    const [ToCurrency,setToCurrency]=useState("INR")

    const fetchcurrency=async()=>{
        try {
            const res=await fetch("https://api.frankfurter.app/currencies")
            const data=await res.json()
            setCurrency(Object.keys(data))
        } catch (error) {
            console.log("Error at fetching data: ",error)
        }
    }

    useEffect(()=>{
        fetchcurrency();
    },[])
    

    const convertCurrency=async()=>{
        try {
            const res=await fetch("https://api.frankfurter.app/latest?amount=1&from=USD&to=INR")
            const data=await res.json()
        } catch (error) {
            console.log("Error at fetching data: ",error)
        }
    }

  return (
    <div className='max-w-xl mx-auto my-10 p-5 bg-white shadow-md rounded-lg'>
        <h2 className='font-bold text-3xl mb-5'>
            Currency Convertor
        </h2>
        <div>
            <Dropdown currency={currency} title="From: "/>
            {/* swap */}
            <div>
                <button>
                    
                </button>
            </div>
            <Dropdown currency={currency} title="To: "/>
        </div>

        <div className='mt-4'>
            <label 
              htmlFor="amount" 
              className='block font-bold text-gray-700 text-xl'
            >Amount:
            </label>

            <input 
              value={amount}
              onChange={(e)=>setAmount(e.target.value)}
              type="number" 
              className='w-full p-2 border border-gray-400 rounded-xl shadow-sm focus:outline-none focus:ring-2'
            />
        </div>

        <div className='flex gap-3'>
            <div className='mt-4 flex justify-end' >
                <button 
                  onClick={convertCurrency}
                  className='bg-indigo-600 px-4 py-2 m-1 text-white font-bold rounded-2xl cursor-pointer hover:bg-indigo-800'>Convert</button>
            </div>
            <div className='flex justify-right items-center mt-2 text-blue-600 font-bold'>
                Converted Amount: 85 INR
            </div>
        </div>
    </div>
  )
}

export default CurrencyCovertor
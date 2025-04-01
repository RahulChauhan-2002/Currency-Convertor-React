import React, { useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import { LuArrowRightLeft } from "react-icons/lu";

const CurrencyCovertor = () => {

    const [amount,setAmount]=useState(1)
    const [currency,setCurrency]=useState([])
    const [fromCurrency,setfromCurrency]=useState("USD")
    const [ToCurrency,setToCurrency]=useState("INR")
    const [convertedmount,setConvertedmount]=useState(null)

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
            const res=await fetch(`https://api.frankfurter.app/latest?amount=1&from=${fromCurrency}&to=${ToCurrency}`)
            const data=await res.json()
            const fromdata=data.rates[ToCurrency]
            const todata=amount
            const converted_amt=fromdata*todata
            setConvertedmount(converted_amt.toFixed(2))
        } catch (error) {
            console.log("Error at fetching data: ",error)
        }
    }

    const swapCurrency=()=>{
        setfromCurrency(ToCurrency)
        setToCurrency(fromCurrency)
    }

  return (
    <div className='max-w-xl mx-auto my-10 p-5 bg-white shadow-md rounded-lg'>
        <h2 className='font-bold text-3xl mb-5'>
            Currency Convertor
        </h2>
        <div className='flex justify-between items-center '>
            <Dropdown 
              currency={fromCurrency}
              setCurrency={setfromCurrency}
              currencies={currency} 
              title="From: "
            />
            <div className='pt-6'>
                <button onClick={swapCurrency} className='w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center cursor-pointer'>
                <LuArrowRightLeft />
                </button>
            </div>
            <Dropdown 
               currency={ToCurrency}
               setCurrency={setToCurrency}
               currencies={currency} 
               title="To: "
            />
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
                Converted Amount: {convertedmount} {ToCurrency}
            </div>
        </div>
    </div>
  )
}

export default CurrencyCovertor
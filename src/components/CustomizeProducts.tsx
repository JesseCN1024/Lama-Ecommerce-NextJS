'use client' // user can interact 
import React, { useEffect, useState } from 'react'
import Add from './Add'
import { products } from '@wix/stores'
import clsx from 'clsx';

function CustomizeProducts({productId, variants, productOptions} : {productId: string, variants: products.Variant[], productOptions: products.ProductOption[]}) {
    const [optionParams, setOptionParams] = useState<{
        [key: string]: string
    }>({});
    useEffect(() => {
        // console.log(productId)
        // console.log(variants);
        console.log(productOptions);
    }, [])

    const updateParams = (key:string, value: string) => {
        setOptionParams(prev => ({
            ...prev,
            [key]: value
        }))
    }

    const isVariantInStock = (choices: {[key: string]: string}) => {
        return variants.some(variant => {
            if (!Object.keys(optionParams).length) return true;
            const variantChoices = variant.choices; // choices {Color: 'red', Size: 'M'}
            if (!variantChoices) return false; // false casue there is no variant
            // there is a match option and variant.quantity >
            return Object.entries(choices).every(([key,value]) => // [color,red], [ size, m]
                variantChoices[key] === value
            ) 
            && variant.stock?.inStock 
            && variant.stock?.quantity // not null
            && variant.stock?.quantity > 0 // comparision
        })
    }
   
    
    
    


  return (
    <div className='flex flex-col gap-6'>
        {productOptions.map((option, idx) => (
            <div key={option.name}>
                <h4 className="font-bold mb-4">Choose a {option.name}</h4>
                {
                    <ul className='flex gap-4'>
                        {option.choices?.map((choice ,idx) => {
                            if (!choice.visible) return <></>
                            const selected = optionParams[option.name!] === choice.value;
                            const disabled = !isVariantInStock({
                                ...optionParams,
                                [option.name!]: choice.value!
                            })
                            // console.log()
                            const clickHandler = disabled ? undefined : () => {
                                updateParams(option?.name!, choice.value!)
                            }

                            return option.name === 'Color' ?
                            <button  onClick={clickHandler} className={clsx(
                                'relative w-8 h-8 rounded-full cursor-pointer ring-1 ring-gray-200 ',
                                // disabled && "cursor-not-allowed"
                            )} style={{
                                backgroundColor: choice.value, 
                                // boxShadow: `0 0 0 4px ${choice.value}`
                                cursor: disabled ? 'not-allowed' : 'pointer'

                            }}> 
                                <div className={clsx(
                                    "absolute w-10 h-10 rounded-full ring-2  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent",
                                    selected ? 'ring-2 ring-gray-600' : 'ring-1 ring-gray-200'
                                )} ></div>
                                {disabled && "disabled"}
                            </button>
                            :
                            <button disabled={disabled} onClickCapture={clickHandler} className={clsx(
                                'px-3 py-2 border rounded-md hover:opacity-50',
                                selected ? 'bg-red-500 text-white' : 'bg-transparent text-red-500',
                                // disabled && "cursor-not-allowed"
                            )} style={{
                                cursor: disabled ? 'not-allowed' : 'pointer'
                            }}>{choice.description} {disabled && "disabled"}</button>

                            
                            
                        }
                        )}
                    </ul>
                    

                }
            </div>
        ))}
        {/* <ul className='flex gap-6'>
            
            <li className='relative w-8 h-8 rounde  d-full ring-1 ring-gray-200 cursor-pointer bg-blue-400'> 
            </li>
            <li className='relative w-8 h-8 rounded-full ring-1 ring-gray-200 cursor-pointer bg-green-400'> 
            </li>
            <li className='relative w-8 h-8 rounded-full ring-1 ring-gray-200 cursor-pointer bg-transparent'> 
                <div className='absolute w-10 h-[2px] rotate-45 rounded-full  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-700'></div>
            </li>
        </ul> */}
        
        {/* Quantity */}
        <h4 className="font-bold">Choose a Quantity</h4>
        <Add productId='1' variantId='2' stockNumber={3} />
    </div>
  )
}

export default CustomizeProducts
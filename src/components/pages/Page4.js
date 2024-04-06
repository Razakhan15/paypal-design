import { ArrowRightIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Page4 = () => {
  return (
    <div className='mt-14'>
    <div className='flex justify-center items-center' >
        <div >
            <h1 className='w-1/2 text-3xl font-bold'>Pay your bills in one place</h1>
            <p className='w-3/4 mt-3'>Securely pay your utilities, TV, internet, phone bills and more.</p>
            <button className='flex items-center gap-5 mt-3 text-blue-500'><p>Pay bills with PayPal</p> <ArrowRightIcon className='h-5 w-5'/></button>
        </div>
        <img className='w-1/4 rounded-xl' src="pic6.jpg" alt="" />
    </div>
    <div className='flex justify-center items-center mt-32 gap-28'>
        <img className='w-1/4 rounded-xl' src="credit card.jpg" alt="" />
        <div className='w-1/4'>
            <h1 className='text-3xl font-bold'>Meet the PayPal Cash Card</h1>
            <p className='mt-3'>Pay in person or online everywhere Mastercard is accepted. Plus, there's no monthly fee, minimum balance, or credit check required.</p>
            <button className='flex items-center gap-5 mt-3 text-blue-500'><p>About the PayPal Cash Card</p> <ArrowRightIcon className='h-5 w-5'/></button>
        </div>
    </div>
    </div>
  )
}

export default Page4
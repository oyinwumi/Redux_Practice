import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const{ amount }= useSelector((store)=>store.cart);
  // const amount = useSelector((store)=>store.cart.amount);
  return (
   <nav className='text-white bg-indigo-600 md:p-12 p-6'>
    <div className='flex justify-between item-center '>
        <h1 className='md:text-4xl text-3xl md:pl-6 pl-3'>Redux Toolkit</h1>
        <div className='relative'>
          <span className='md:text-4xl text-3xl '><ion-icon name="bag-outline"></ion-icon></span>
          <div className='w-5 h-5  text-sm rounded-full text-red-900 bg-blue-200 text-center absolute bottom-7 left-6 font-bold'>
         <p>{amount}</p>
        </div>
        </div>
        
    </div>
   </nav>
  );
}

export default Navbar;
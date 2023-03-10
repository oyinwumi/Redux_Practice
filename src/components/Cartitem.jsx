import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem , increase ,decrease } from '../features/cart/cartSlice'

const Cartitem = ({id, img, title, price, amount})=> {
  const dispatch = useDispatch();
  return (
    <section className='flex justify-between '>
   <div className='flex  mt-8' >
   <img src={img} alt={title} className='md:w-28 w-20'/>
     <div className=''>
        <h4 className='md:text-xl text-sm text-indigo-600 '>{title}</h4>
        <h4 className='md:text-xl text-sm text-red-500'>${price}</h4>
        <button 
        className='md:text-xl text-sm text-slate-400'
        onClick={()=> {
          dispatch(removeItem(id))
        }}
        >remove</button>
     </div>
   </div>
     <div className='flex flex-col '>
        <button onClick={()=> {dispatch(increase({ id }))}}><ion-icon name="chevron-up-outline"></ion-icon></button>
        <p className='text-red-500 text-center font-bold md:text-xl text-sm'>{amount}</p>
        <button 
        onClick={()=> 
        {
          if(amount === 1){
            dispatch(removeItem(id))
            return;
          }
          dispatch(decrease({ id }))}}><ion-icon name="chevron-down-outline"></ion-icon></button>
     </div>
    </section>
  )
}

export default Cartitem
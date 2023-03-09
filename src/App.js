import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartContainer from './components/CartContainer';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import { calculateTotals , getCartItems } from './features/cart/cartSlice';


function App() {
const { cartItems, isLoading } =  useSelector((store)=> store.cart);
const { isOpen } =  useSelector((store)=> store.modal);
const dispatch = useDispatch();

useEffect(()=>{
   dispatch(calculateTotals());
}, [cartItems]);

useEffect(()=>{
 dispatch(getCartItems())
}, []);

if( isLoading){
  return <div>
    <h1 className='md:text-3xl text-2xl'>Loading...</h1>
  </div>
}


  return (
    <div className='font-serif w-full relative'>
      {isOpen &&  <Modal/> }
      <Navbar />
      <CartContainer/>
    
    </div>
  );
}

export default App;

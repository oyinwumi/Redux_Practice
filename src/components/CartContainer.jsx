import Cartitem from "./Cartitem"
import { useSelector , useDispatch} from "react-redux"
// import { clearCart } from "../features/cart/cartSlice";
import { openModal} from "../features/modal/modalSlice";

const CartContainer = () => {
  const {cartItems, amount, total} = useSelector((store)=> store.cart);
  const dispatch = useDispatch()

  if(amount < 1){
    return(
        <div className="text-center mt-20">
            <header>
                <h2 className="font-bold text-5xl">Your Bag</h2>
                <h4 className="text-xl mt-8 font-normal text-gray-400">is currently empty</h4>
            </header>
        </div>
    )
  }

  return (
    <div className="mt-14 mds:px-12 px-6">
        <header>
            <h2 className=" text-center font-bold md:text-4xl text-3xl mb-6">Your Bag</h2>
        </header>
        {cartItems.map((item)=>{
       return <Cartitem key={item.id} {...item}/>
        })}
        <footer className="">
            <hr className="border-black" />
            <div className="mt-6">
                <h4 className="flex justify-between md:text-2xl text-sm">Total <span>${total.toFixed(2)}</span></h4>
            </div>
            <div className="md:w-1/6 w-1/4 mx-auto my-6">
            <button 
            className="border-2 border-red-700 rounded text-center  md:px-4 px-4 md:py-2 py-1  md:text-xl text-sm text-red-700  items-center"
            onClick={()=> dispatch(openModal())}
            >CLEAR CART</button>
            </div>
        </footer>
    </div>
  )
}

export default CartContainer
import { useDispatch } from "react-redux"
import { clearCart } from "../features/cart/cartSlice"
import { closeModal} from "../features/modal/modalSlice"


const Modal = () => {
const dispatch = useDispatch();

  return (
    <aside 
    className='bg-white text-center w-full h-full  tracking-widest  '>
        <div className='md:w-1/4  w-1/2 border-2 rounded border-slate-300  bg-slate-50 p-6  fixed left-1/3 top-1/3 z-10 items-center justify-center m-auto ' >
            <h4 className='md:text-2xl text-sm capitalize mb-6 font-extralight'>remove all items from your shopping cart ?</h4>
            <div className='flex gap-10 justify-center'>
                <button 
                onClick={() =>{
                  dispatch(clearCart());
                  dispatch(closeModal());
                }}
                className='border-indigo-500 md:text-xl text-sm border-2 rounded text-indigo-500 uppercase md:px-6 px-2 md:py-2 py-1'
                >Confirm</button>
                <button 
                   onClick={() =>{
                    dispatch(closeModal());
                  }}
                className='border-red-700 md:text-xl text-sm  border-2 rounded text-red-700 uppercase md:px-6 px-2 md:py-2 py-1'
                >Cancel</button>
            </div>
        </div>
    </aside>
  )
}

export default Modal
// position: fixed;
// top: 0;
// left: 0;
// width: 100%;
// height: 100%;
// background: rgba(0, 0, 0, 0.7);
// z-index: 10;
// display: flex;
// align-items: center;
// justify-content: center;
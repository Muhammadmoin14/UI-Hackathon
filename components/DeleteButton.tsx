'use client'
import React, {useContext, useState} from 'react'
// import carticon1 from "../../public/Cart.svg";
import Image from 'next/image';
import CartContext from '@/Context/NewContext';
// import { useCart } from '../Context/CartContext';
import deleteicon from '../public/Deleteicon.webp'


interface DeleteButtonProps {
  id: string
}

function ButtonCart({id}:DeleteButtonProps) {
    const [showNotification, setShowNotification] = useState(false);
    // const {decrementCart} = useContext(CartContext)!
    const { removeFromCart } = useContext(CartContext)!;
    const handleRemoveFromCart = () => {
      removeFromCart(id);
      // incrementCart
    if(id!=null){
      setShowNotification(true)
      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    }

    };

    return (
    <div >
        <button onClick={handleRemoveFromCart} className="w-[44px] h-[44px] rounded-md bg-white flex items-center justify-center">
        <Image src={deleteicon} alt="image" width={24} height={24} />
        </button>
        {showNotification && (
        <div className="fixed bottom-5 left-1/2 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg transition-opacity duration-500 ease-in-out opacity-95">
          Cart is deleted successfully!
        </div>
      )}
    </div>
  )
}

export default ButtonCart
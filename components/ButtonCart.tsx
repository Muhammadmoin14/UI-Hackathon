'use client';
import React, { useContext, useState } from 'react';
import Image from 'next/image';
import CartContext from '../Context/NewContext'; // Adjust the import path as necessary
import { ProductType } from '../types/product'; 
import CartImage from '../public/Buy 3.png'

interface ButtonCartProps {
  product: ProductType; // Accept product as a prop
}

function ButtonCart({ product }: ButtonCartProps) {
  const { addToCart } = useContext(CartContext)!; // Use addToCart from context
  const [showNotification, setShowNotification] = useState(false);
  // const {incrementCart} = useContext(CartContext)!
  
  const handleAddToCart = () => {
    addToCart({ id: product._id, title: product.title, price: product.price, quantity: 1 , image: product.image });
    // incrementCart
    setShowNotification(true)
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  

  };

  return (
    <div>
      <button onClick={handleAddToCart} className="w-[44px] h-[44px] rounded-md bg-bluesecond flex items-center justify-center">
        <Image src={CartImage} alt="Add to cart" width={24} height={24} />
      </button>
      {showNotification && (
        <div className="fixed bottom-5 left-1/2 bg-bluesecond text-white px-6 py-3 rounded-lg shadow-lg transition-opacity duration-500 ease-in-out opacity-95">
          Cart is added successfully!
        </div>
      )}
    </div>
  );
}

export default ButtonCart;


// 'use client'
// import React, {useContext, useState} from 'react'
// // import carticon1 from "../../public/Cart.svg";
// import Image from 'next/image';
// import CartContext from '@/Context/NewContext';
// // import { useCart } from '../Context/CartContext';




// function ButtonCart() {
        
//     const {incrementCart} = useContext(CartContext)!
    

//     return (
//     <div >
//         <button onClick={incrementCart} className="w-[44px] h-[44px] rounded-md bg-bluesecond flex items-center justify-center">
//         <Image src='/cart.svg' alt="image" width={24} height={24} />
//         </button>
    
//     </div>
//   )
// }

// export default ButtonCart
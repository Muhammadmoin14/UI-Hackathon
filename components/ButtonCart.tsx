'use client';
import React, { useContext } from 'react';
import Image from 'next/image';
import CartContext from '../Context/NewContext'; // Adjust the import path as necessary
import { ProductType } from '../types/product'; 
import CartImage from '../public/Buy 3.png'

interface ButtonCartProps {
  product: ProductType; // Accept product as a prop
}

function ButtonCart({ product }: ButtonCartProps) {
  const { addToCart } = useContext(CartContext)!; // Use addToCart from context
  // const {incrementCart} = useContext(CartContext)!
  
  const handleAddToCart = () => {
    addToCart({ id: product._id, title: product.title, price: product.price, quantity: 1 , image: product.image });
    // incrementCart
  };

  return (
    <div>
      <button onClick={handleAddToCart} className="w-[44px] h-[44px] rounded-md bg-bluesecond flex items-center justify-center">
        <Image src={CartImage} alt="Add to cart" width={24} height={24} />
      </button>
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
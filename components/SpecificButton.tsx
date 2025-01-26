'use client';
import carticon from "../public/Buy 3.png"
import React, { useContext, useState } from 'react';
import Image from 'next/image';
import CartContext from '../Context/NewContext'; // Adjust the import path as necessary
import { ProductType } from '../types/product'; 
import { Product } from '../types/product'; 
import { urlFor } from "@/sanity/lib/image";

interface ButtonCartProps {
  product: Product; // Accept product as a prop
}

function ButtonCart({ product }: ButtonCartProps) {
  const { addToCart } = useContext(CartContext)!; // Use addToCart from context
  // const {incrementCart} = useContext(CartContext)!
  const imageUrl = urlFor(product.image).width(675).height(607).url();
  const [showNotification, setShowNotification] = useState(false);
  const handleAddToCart = () => {
    addToCart({ id: product._id, title: product.title, price: product.price, quantity: 1, image:imageUrl });  
    // incrementCart()
    setShowNotification(true)
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  
  };

  return (
    <div>
      <button onClick={handleAddToCart} className="w-48 h-14 bg-bluesecond rounded-md flex items-center justify-center gap-3 text-white font-semibold text-xl">
              <Image src={carticon} alt="carticon" width={29} height={29} />
              Add to Cart
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

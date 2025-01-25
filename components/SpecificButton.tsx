'use client';
import carticon from "../public/Cart.webp";
import React, { useContext } from 'react';
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
  const {incrementCart} = useContext(CartContext)!
  const imageUrl = urlFor(product.image).width(675).height(607).url();
  
  const handleAddToCart = () => {
    addToCart({ id: product._id, title: product.title, price: product.price, quantity: 1, image:imageUrl });
    incrementCart()
  };

  return (
    <div>
      <button onClick={handleAddToCart} className="w-48 h-14 bg-bluesecond rounded-md flex items-center justify-center gap-3 text-white font-semibold text-xl">
              <Image src={carticon} alt="carticon" width={29} height={29} />
              Add to Cart
      </button>
    </div>
  );
}

export default ButtonCart;

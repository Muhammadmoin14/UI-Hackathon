'use client'
import React, { useContext } from "react";
import CartContext  from '../../Context/NewContext'; // Adjust the import path as necessary
// import { Product, ProductType } from "@/types/product";
import { CartItem } from "@/Context/CartContext";
import Image from "next/image";
import Link from "next/link";




function CartPage() {
  const { cartItems, removeFromCart, clearCart, addToCart, cartCount, updateCartItem  } = useContext(CartContext)!
  
  return (
    <div className="w-full md:h-auto sm:h-full md:px-[150px] sm:px-[25px] py-[76px] flex md:flex-row sm:flex-col space-x-20 ">
      <div className="md:w-3/4 sm:w-full flex flex-col space-y-6 ">
        <h4 className="text-[22px]">Bag</h4>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item:CartItem) => (
            
            <div key={item.id} className="flex flex-row space-x-6">
              
              <Link href={`/products/${item.id}`}>
              <Image src={item.image} alt="image" width={250} height={150} />
              </Link>
              
              <div className="w-full flex justify-between">
                <div className="flex flex-col justify-evenly">
                  <h2 className="text-2xl">{item.title}</h2>
                  <h3>Quantity: {item.quantity}</h3>
                  <div className="flex gap-10">

                  <button onClick={() => updateCartItem(item.id, item.quantity + 1)} className="w-4 text-green-700">Add</button>
                  <button onClick={() => updateCartItem(item.id, item.quantity - 1)} disabled={item.quantity <= 1} className="w-0 text-red-700">Subtract</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="scale-105">
                    <Image src="/Deleteicon.webp" alt="delete" width={20} height={20} />
                  </button>
                </div>
                <div className="flex flex-col justify-between items-center">
                  <h3>MRP: ${item.price * item.quantity}</h3>
                  
                </div>
              </div>
            </div>
          ))
        )}
        <button onClick={clearCart} className="font-semibold font-Poppins  text-red-700">Clear Cart</button>
      </div>
      <div className="md:w-1/4 flex flex-col space-y-6 md:items-start sm:items-center md:pt-0 sm:pt-6 sticky top-[76px] max-h-[calc(70lvh-76px)] ">
        <h4 className="text-xl">Summary</h4>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3>Subtotal</h3>
            <h3>${cartItems.reduce((total:number, item:CartItem) => total + item.price * item.quantity, 0).toFixed(2)}</h3>
          </div>
          <div className="flex items-center justify-between">
            <h3>Estimated Delivery & Handling</h3>
            <h3>Free</h3>
          </div>
          <div className="w-full border-b-[#757575] border"></div>
          <div className="flex items-center justify-between">
            <h3>Total</h3>
            <h3>${cartItems.reduce((total:number, item:CartItem) => total + item.price * item.quantity, 0).toFixed(2)}</h3>
          </div>
          <div className="w-full border-b-[#757575] border"></div>
          <div>
          <Link href="/checkout" >
          <button className="bg-bluesecond w-[334px] h-[60px] py-6 rounded-full text-white font-Inter flex items-center justify-center">
            Member Checkout
          </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;


// import React from "react";
// import i3 from "../../public/product03.webp";
// import i9 from "../../public/Category02.webp";
// import Image from "next/image";
// import hearticon from "../../public/Whislist Icon.webp";
// import deleteicon from "../../public/Deleteicon.webp";

// function page() {
//   return (
//     <div className="w-full md:h-lvh sm:h-full md:px-[150px] sm:px-[25px] py-[76px] flex md:flex-row sm:flex-col  space-x-20">
//       <div className="md:w-3/4 sm:w-full flex flex-col space-y-6 ">
//         <h4 className="text-[22px]">Bag</h4>
//         <div className="flex flex-row  space-x-6  ">
//           <Image src={i3} alt="image" width={150} height={150} />
//           <div className="w-full flex justify-between">
//             <div className="flex flex-col space-y-[26px] ">
//               <h3>Library Stool Chair</h3>
//               <div>
//                 <h3 className="text-[#757575]">Ashen Slate/Cobalt Bliss</h3>
//                 <div className="flex justify-between items-center pt-1">
//                   <h3 className="text-[#757575] ">Size L</h3>
//                   <h3 className="text-[#757575] ">Quantity 1</h3>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <Image src={hearticon} alt="image" width={24} height={24} />
//                 <Image src={deleteicon} alt="image" width={24} height={24} />
//               </div>
//             </div>
//             <div>
//               <h3>MRP: $99</h3>
//             </div>
//           </div>
//         </div>
//         <div className="w-full border-b-[#757575] border-b-2 pb-4 "></div>

//         <div className="flex flex-row space-x-6 ">
//           <Image src={i9} alt="image" width={150} height={150} />
//           <div className="w-full flex  justify-between">
//             <div className="flex flex-col space-y-[26px]">
//               <h3>Library Stool Chair</h3>
//               <div>
//                 <h3 className="text-[#757575]">Ashen Slate/Cobalt Bliss</h3>
//                 <div className="flex justify-between items-center pt-1">
//                   <h3 className="text-[#757575] ">Size L</h3>
//                   <h3 className="text-[#757575] ">Quantity 1</h3>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <Image src={hearticon} alt="image" width={24} height={24} />
//                 <Image src={deleteicon} alt="image" width={24} height={24} />
//               </div>
//               <div className="w-full border-b-[#757575] "></div>
//             </div>
//             <div>
//               <h3>MRP: $99</h3>
//             </div>
//           </div>
//         </div>

//         <div className="w-full border-b-[#757575] border-b-2 pb-4 "></div>
//       </div>
//       <div className="md:w-1/4 flex flex-col space-y-6 md:items-start sm:items-center md:pt-0 sm:pt-6 ">
//         <h4 className="text-xl">Summary</h4>
//         <div className="space-y-6">
//           <div className="flex items-center justify-between">
//             <h3>Subtotal</h3>
//             <h3>$198.00</h3>
//           </div>
//           <div className="flex items-center justify-between">
//             <h3>Estimated Delivery & Handling</h3>
//             <h3>Free</h3>
//           </div>
//           <div className="w-full border-b-[#757575] border"></div>
//           <div className="flex items-center justify-between">
//             <h3>Total</h3>
//             <h3>$198.00</h3>
//           </div>
//           <div className="w-full border-b-[#757575] border"></div>
//           <button className="bg-bluesecond w-[334px] h-[60px] rounded-full text-white font-Inter flex items-center justify-center">
//             Member Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default page;

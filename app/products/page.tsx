import { fetchProducts } from '../../components/FetchData';
import React from 'react'
import Image from 'next/image';
import carticon from "../../public/Cart.webp";
import { ShoppingCartIcon } from '@heroicons/react/solid';
import Link from 'next/link';

interface Category {
  _id: string;
  title: string;
}

type ProductType = {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount: number | null;
  category: Category;
  tags: string[];
  badge: string | null;
  image: string;
  description: string;
  inventory: number;
}


const Page = async () => {

  const products: ProductType[] = await fetchProducts();
  
  return (
    <div className="w-full h-full bg-white">
    <div className="md:px-[150px] sm:px-[25px] pt-[57px] pb-[136px] space-y-12">
      <h2 className="text-secondary md:items-start sm:items-center">All Products</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-4 md:grid-row-3 gap-6">
      {products && products.length > 0 ? (
            products.map((product: ProductType) => ( 
              <Link href={`/products/${product._id}`} 
              key={product._id} className="flex flex-col space-y-5">
                <Image
                  src={product.image ? product.image : '/images/default-image.png'} // Fallback if image is invalid
                  alt={product.title}
                  width={312}
                  height={312}
                  className="object-cover"
                />
                
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col">
                    <h3 className="text-secondary">{product.title}</h3>
                    <h1 className="text-black text-sm">${product.price}</h1>
                  </div>
                  <div className="w-[44px] h-[44px] rounded-md bg-bluesecond flex items-center justify-center">
                    <Image src={carticon} alt="Cart" width={24} height={24} />
                  </div>
                </div>
              </Link>
              
            ))
          ) : (
            <div>No products available</div> // Handle no products case
          )}
      </div>
    </div>
  </div>

);
};



export default Page ;


















































































// import React from "react";
// import Image from "next/image";
// import i1 from "../../public/product01.webp";
// import i2 from "../../public/Product04.webp";
// import i3 from "../../public/product03.webp";
// import i4 from "../../public/product02.webp";
// // import i5 from '../../public/i5.webp'
// import i6 from "../../public/i6.webp";
// import i7 from "../../public/i7.webp";
// import i8 from "../../public/Category01.webp";
// import i9 from "../../public/Category02.webp";
// import i10 from "../../public/Category03.webp";

// import carticon from "../../public/Cart.webp";

// function page() {
//   return (
//     <div className="w-full h-full bg-white">
//       <div className=" md:px-[150px] sm:px-[25px] pt-[57px] pb-[136px] space-y-12">
//         <h2 className="text-secondary md:items-start sm:items-center">
//           All Products
//         </h2>
//         <div className="grid sm:grid-cols-1 md:grid-cols-4 md:grid-row-3 gap-6">
//           <div className="flex flex-col space-y-5">
//             <Image src={i1} alt="image" width={312} height={312} />
//             <div className="flex flex-row justify-between ">
//               <div className="flex flex-col ">
//                 <h3 className="text-secondary">Library Stool Chair</h3>
//                 <h1 className="text-black text-sm ">$20</h1>
//               </div>
//               <div className="w-[44px] h-[44px] rounded-md bg-bluesecond flex items-center justify-center">
//                 <Image src={carticon} alt="image" width={24} height={24} />
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col space-y-5">
//             <Image src={i2} alt="image" width={312} height={312} />
//             <div className="flex flex-row justify-between ">
//               <div className="flex flex-col ">
//                 <h3 className="text-secondary">Library Stool Chair</h3>
//                 <h1 className="text-black text-sm ">$20</h1>
//               </div>
//               <div className="w-[44px] h-[44px] rounded-md bg-[#F0F2F3] flex items-center justify-center">
//                 <Image src={carticon} alt="image" width={24} height={24} />
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col space-y-5">
//             <Image src={i3} alt="image" width={312} height={312} />
//             <div className="flex flex-row justify-between ">
//               <div className="flex flex-col ">
//                 <h3 className="text-secondary">Library Stool Chair</h3>
//                 <h1 className="text-black text-sm ">$20</h1>
//               </div>
//               <div className="w-[44px] h-[44px] rounded-md bg-[#F0F2F3] flex items-center justify-center">
//                 <Image src={carticon} alt="image" width={24} height={24} />
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col space-y-5">
//             <Image src={i4} alt="image" width={312} height={312} />
//             <div className="flex flex-row justify-between ">
//               <div className="flex flex-col ">
//                 <h3 className="text-secondary">Library Stool Chair</h3>
//                 <h1 className="text-black text-sm ">$20</h1>
//               </div>
//               <div className="w-[44px] h-[44px] rounded-md bg-[#F0F2F3] flex items-center justify-center">
//                 <Image src={carticon} alt="image" width={24} height={24} />
//               </div>
//             </div>
//           </div>

//           {/* First Row Ended */}

//           <div className="flex flex-col space-y-5">
//             <Image src={i9} alt="image" width={312} height={312} />
//             <div className="flex flex-row justify-between ">
//               <div className="flex flex-col ">
//                 <h3 className="text-secondary">Library Stool Chair</h3>
//                 <h1 className="text-black text-sm ">$20</h1>
//               </div>
//               <div className="w-[44px] h-[44px] rounded-md bg-[#F0F2F3] flex items-center justify-center">
//                 <Image src={carticon} alt="image" width={24} height={24} />
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col space-y-5">
//             <Image src={i6} alt="image" width={312} height={312} />
//             <div className="flex flex-row justify-between ">
//               <div className="flex flex-col ">
//                 <h3 className="text-secondary">Library Stool Chair</h3>
//                 <h1 className="text-black text-sm ">$20</h1>
//               </div>
//               <div className="w-[44px] h-[44px] rounded-md bg-[#F0F2F3] flex items-center justify-center">
//                 <Image src={carticon} alt="image" width={24} height={24} />
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col space-y-5">
//             <Image src={i7} alt="image" width={312} height={312} />
//             <div className="flex flex-row justify-between ">
//               <div className="flex flex-col ">
//                 <h3 className="text-secondary">Library Stool Chair</h3>
//                 <h1 className="text-black text-sm ">$20</h1>
//               </div>
//               <div className="w-[44px] h-[44px] rounded-md bg-[#F0F2F3] flex items-center justify-center">
//                 <Image src={carticon} alt="image" width={24} height={24} />
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col space-y-5">
//             <Image src={i1} alt="image" width={312} height={312} />
//             <div className="flex flex-row justify-between ">
//               <div className="flex flex-col ">
//                 <h3 className="text-secondary">Library Stool Chair</h3>
//                 <h1 className="text-black text-sm ">$20</h1>
//               </div>
//               <div className="w-[44px] h-[44px] rounded-md bg-[#F0F2F3] flex items-center justify-center">
//                 <Image src={carticon} alt="image" width={24} height={24} />
//               </div>
//             </div>
//           </div>

//           {/* Second Row Ended */}

//           <div className="flex flex-col space-y-5">
//             <Image src={i8} alt="image" width={312} height={312} />
//             <div className="flex flex-row justify-between ">
//               <div className="flex flex-col ">
//                 <h3 className="text-secondary">Library Stool Chair</h3>
//                 <h1 className="text-black text-sm ">$20</h1>
//               </div>
//               <div className="w-[44px] h-[44px] rounded-md bg-[#F0F2F3] flex items-center justify-center">
//                 <Image src={carticon} alt="image" width={24} height={24} />
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col space-y-5">
//             <Image src={i2} alt="image" width={312} height={312} />
//             <div className="flex flex-row justify-between ">
//               <div className="flex flex-col ">
//                 <h3 className="text-secondary">Library Stool Chair</h3>
//                 <h1 className="text-black text-sm ">$20</h1>
//               </div>
//               <div className="w-[44px] h-[44px] rounded-md bg-[#F0F2F3] flex items-center justify-center">
//                 <Image src={carticon} alt="image" width={24} height={24} />
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col space-y-5">
//             <Image src={i3} alt="image" width={312} height={312} />
//             <div className="flex flex-row justify-between ">
//               <div className="flex flex-col ">
//                 <h3 className="text-secondary">Library Stool Chair</h3>
//                 <h1 className="text-black text-sm ">$20</h1>
//               </div>
//               <div className="w-[44px] h-[44px] rounded-md bg-[#F0F2F3] flex items-center justify-center">
//                 <Image src={carticon} alt="image" width={24} height={24} />
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col space-y-5">
//             <Image src={i10} alt="image" width={312} height={312} />
//             <div className="flex flex-row justify-between ">
//               <div className="flex flex-col ">
//                 <h3 className="text-secondary">Library Stool Chair</h3>
//                 <h1 className="text-black text-sm ">$20</h1>
//               </div>
//               <div className="w-[44px] h-[44px] rounded-md bg-[#F0F2F3] flex items-center justify-center">
//                 <Image src={carticon} alt="image" width={24} height={24} />
//               </div>
//             </div>
//           </div>

//           {/* Third Row Ended */}
//         </div>
//       </div>
//       <div className="w-full md:h-[754px] sm:h-full bg-[#1E2832]/5 sm:px-[25px] md:px-[150px] py-[100px] flex flex-col items-center md:space-y-20 sm:space-y-10">
//         <h1 className="font-Roboto font-medium sm:text-xl md:text-[50px] text-black">
//           Or Subscribe To The Newsletter
//         </h1>
//         <div className="flex space-x-4">
//           <input
//             type="text"
//             placeholder="Email Address..."
//             className="border-b-2 border-b-black focus:outline-none w-5/6 bg-transparent px-2 py-2"
//           />
//           <input
//             type="text"
//             placeholder="Submit"
//             className="border-b-2 border-b-black focus:outline-none w-1/6 bg-transparent px-2 py-2"
//           />
//         </div>
//         <h1 className="font-Roboto font-medium sm:text-xl md:text-[50px] text-black ">
//           Follow Products And Discounts On Instagram
//         </h1>
//         <div className="grid grid-cols-6 md:gap-6 sm:gap-2">
//           {/* Images */}
//           <div>
//             <Image src={i9} alt="image" width={312} height={312} />
//           </div>
//           <div>
//             <Image src={i8} alt="image" width={312} height={312} />
//           </div>
//           <div>
//             <Image src={i2} alt="image" width={312} height={312} />
//           </div>
//           <div>
//             <Image src={i1} alt="image" width={312} height={312} />
//           </div>
//           <div>
//             <Image src={i3} alt="image" width={312} height={312} />
//           </div>
//           <div>
//             <Image src={i10} alt="image" width={312} height={312} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default page;

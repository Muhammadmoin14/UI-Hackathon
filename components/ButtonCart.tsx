'use client'
import React, {useState} from 'react'
// import carticon1 from "../../public/Cart.svg";
import Image from 'next/image';





function ButtonCart() {
    
    const [count , setcount] = useState<number>(0);
    
    
    const increment = () => {
        return setcount(count + 1)
    }
    const decrement = () => {
        return setcount(count - 1)
    }
    
    console.log(count);
  
    return (
    <div >
            <button onClick={increment} className="w-[44px] h-[44px] rounded-md bg-bluesecond flex items-center justify-center">
                <Image src='/cart.svg' alt="image" width={24} height={24} />
            </button>
            <p className="text-[14px] text-black">{count}</p>
              </div>
  )
}

export default ButtonCart
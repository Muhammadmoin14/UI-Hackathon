'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import CartContext from './NewContext';

export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    // Load cart items from local storage
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  useEffect(() => {
    // Save cart items to local storage whenever they change
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const getTotalCartCount = (items: CartItem[]) =>
    items.reduce((count, item) => count + item.quantity, 0);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

    // const [cartCount, setCartCount] = useState(0);
    // const incrementCart = () => {
    // setCartCount((prev) => prev + 1);
    // };
  
    // const decrementCart = () => {
    //   setCartCount((prev) =>
    //   prev >= 1 ? prev - 1 : 0
    // );
    // };

    // console.log({ cartCount }); // Debug: Check cartCount value

    const updateCartItem = (id: string, quantity: number) => {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
        )
      );
    };
    const cartCount = getTotalCartCount(cartItems);

  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, cartCount, updateCartItem,  }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };


// 'use client';

// import React, { createContext, useContext, useState, ReactNode } from 'react';
// import CartContext from './NewContext';

// // interface CartContextType {
// //   cartCount: number;
// //   incrementCart: () => void;
// // }

// // // Create the context
// // const CartContext = createContext<CartContextType | undefined>(undefined);

// // Create the provider component
// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cartCount, setCartCount] = useState(0);

//   const incrementCart = () => {
//     setCartCount((prev) => prev + 1);
//   };
  
//   const decrementCart = () => {
//     setCartCount((prev) =>
//       prev >= 1 ? prev - 1 : 0
//   );
//   };

//   console.log({ cartCount }); // Debug: Check cartCount value

//   return (
//     <CartContext.Provider value={{ cartCount, incrementCart, decrementCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // // Custom hook to use the CartContext
// // export const useCart = () => {
// //   const context = useContext(CartContext);
// //   if (!context) {
// //     throw new Error('useCart must be used within a CartProvider');
// //   }
// //   return context;
// // };



import React from "react";
import Image from "next/image";
import carticon from "../../../public/Cart.webp";
import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";

interface ProductImage {
  asset: {
    _ref: string;
    _type: string;
  };
  _type: string;
}

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  image: ProductImage;
}

// Fetch product data server-side within the component using async function
async function fetchProduct(id: string): Promise<Product | null> {
  const query = `*[_type == "products" && _id == $id][0]{
    _id,
    title,
    price,
    description,
    image
  }`;

  const product = await client.fetch(query, { id });

  return product || null; // Return null if no product is found
}

// Server Component
const ProductPage = async ({ params }: { params: { id: string } }) => {
  const product = await fetchProduct(params.id);

  console.log('Fetched Product:', product); // Debugging the fetched product
  if (!product) {
    return (
      <div className="w-full h-full flex items-center justify-center py-32">
        <h2 className="text-xl text-red-500">Product not found</h2>
      </div>
    ); // Show a message when the product is not found
  }

  const imageUrl = urlFor(product.image).width(675).height(607).url();
  

  return (
    <div className="w-full h-full md:px-[150px] sm:px-[25px] py-[132px] flex flex-col space-y-36 bg-white">
      <div className="flex md:flex-row sm:flex-col items-center">
        <div className="md:w-1/2 sm:w-full">
          <Image src={imageUrl} alt={product.title} width={675} height={607} />
        </div>
        <div className="md:w-1/2 sm:w-full flex flex-col sm:justify-normal md:justify-center px-24 space-y-10">
          <h1 className="text-secondary md:text-6xl sm:text-4xl">
            {product.title}
          </h1>
          <div className="w-[144px] h-[44px] bg-bluesecond rounded-full flex justify-center items-center">
            <h2 className="text-xl text-white">{`$${product.price} USD`}</h2>
          </div>
          <div className="w-full border border-[#D9D9D9]"></div>
          <div>
            <h3 className="text-lg text-[#9A9CAA]">{product.description}</h3>
          </div>
          <div>
            <button className="w-48 h-14 bg-bluesecond rounded-md flex items-center justify-center gap-3 text-white font-semibold text-xl">
              <Image src={carticon} alt="carticon" width={29} height={29} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

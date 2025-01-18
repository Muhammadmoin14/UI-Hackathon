// fetchProducts.js
import {client} from '../sanity/lib/client'

export const fetchProducts = async () => {
    const query = `*[_type == "products"]{
        _id,
        title,
        price,
        priceWithoutDiscount,
        "categoryTitle": category->title,
        tags,
        badge,
        "image": image.asset->url,
        description,
        inventory
  }`;
  const products = await client.fetch(query);
  return products;
};

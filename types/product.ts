

export interface Category {
  _id: string;
  title: string;
}

export interface ProductType {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount?: number | null; // Optional property
  category: Category;
  tags: string[];
  badge?: string | null; // Optional property
  image: string;
  description: string;
  inventory: number;
}

export interface ProductImage {
    asset: {
      _ref: string;
      _type: string;
    };
    _type: string;
  }
  
export interface Product {
    _id: string;
    title: string;
    price: number;
    description: string;
    image: ProductImage;
  }
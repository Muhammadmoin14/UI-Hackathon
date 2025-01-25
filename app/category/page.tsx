'use client'
import React, { useState } from "react";
import Category from "@/components/Category";
import { client } from "@/sanity/lib/client";

const fetchCategories = async () => {
  const query = `*[_type == "categories"]{_id, title, products}`;
  const categories = await client.fetch(query);
  return categories;
};

const ProductPage = () => {
  const [filteredCategory, setFilteredCategory] = useState<string | null>(null);

  const handleCategorySelect = (categoryId: string) => {
    setFilteredCategory(categoryId);
    console.log("Selected category:", categoryId); // Replace this with filtering logic
  };

  return (
    <div className="product-page">
      <h1 className="text-2xl font-bold">Product Categories</h1>
      <Category fetchCategories={fetchCategories} onCategorySelect={handleCategorySelect} />
      <div className="product-list">
        {/* Replace with your product list filtered by `filteredCategory` */}
        <p>Selected Category: {filteredCategory || ''}</p>
      </div>
    </div>
  );
};

export default ProductPage;

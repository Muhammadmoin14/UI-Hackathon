'use client'
import React, { useState, useEffect } from "react";

interface Category {
  _id: string;
  title: string;
}

interface CategoryProps {
  fetchCategories: () => Promise<Category[]>; // Function to fetch categories
  onCategorySelect: (categoryId: string) => void; // Callback for category selection
}

const Category: React.FC<CategoryProps> = ({ fetchCategories, onCategorySelect }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    loadCategories();
  }, [fetchCategories]);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    onCategorySelect(categoryId);
  };

  return (
    <div className="category-container flex gap-4 py-4">
      {categories.map((category) => (
        <button
          key={category._id}
          className={`px-4 py-2 rounded-md ${
            selectedCategory === category._id
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => handleCategoryClick(category._id)}
        >
          {category.title}
        </button>
      ))}
    </div>
  );
};

export default Category;

import React, { useEffect, useState } from 'react';
import { getCategories } from '../services';
import Link from "next/link";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((result) => setCategories(result));
  }, []);

  // console.log('categories', categories);

  return (
    <div className={'bg-white shadow-lg rounded-lg p-8 mb-8 pb-12'}>
      <h3 className={'text-xl mb-8 font-semibold  border-b pb-4'}>
          Categories
      </h3>
        {categories.map((category, index) => (

            <Link
                key={index}
                href={`/category/${category.slug}`}>
                <span className={'block cursor-pointer pb-3 mb-3'}>
                    {category.name}
                </span>

            </Link>

        ))}
    </div>
  );
};

export default Categories;

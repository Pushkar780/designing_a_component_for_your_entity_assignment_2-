// write product card here
import React from "react";
import ViewProductButton from "../component/button";

const ProductCard = () => {
  // Static product details
  const productImage = "https://via.placeholder.com/150";
  const productName = "Sample Product";
  const productPrice = "$49.99";

  return (
    <div className="p-4 border rounded-lg shadow-md w-64 text-center bg-white">
      <img src={productImage} alt={productName} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{productName}</h2>
      <p className="text-gray-600">{productPrice}</p>
      <ViewProductButton />
    </div>
  );
};

export default ProductCard;

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, title, description, price, image } = product;

  return (
    <div className="border shadow-lg hover:scale-105 duration-300 rounded-lg">
      <Link to={`/products/${id}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-[250px] object-cover rounded-t-lg"
        />
        <div className="flex flex-col justify-between px-2 py-4">
          <p className="font-bold">{title}</p>
          <p className="mt-2">
            <span className="bg-orange-500 text-white p-1 rounded-full px-2">
              {price} $
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

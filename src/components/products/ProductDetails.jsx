import React, { useEffect } from "react";
import Announce from "../Announce";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSelectedProduct,
  selectedProduct,
} from "../../redux/products/productsAction";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { title, description, price, image } = product;

  const fetchProductDetails = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => console.log("Err ", err));

    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    fetchProductDetails(productId);
    dispatch(removeSelectedProduct());
  }, [productId]);

  console.log(product);

  return (
    <div>
      <Announce />
      <Navbar />
      <div className="max-w-[1640px] mx-auto px-4 py-8">
        <div className="flex">
          <div className="w-[250px]">
            <img src={image} alt="title" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold">{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;

import { useEffect, useContext } from "react";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import "./Home.scss";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
  const { categories, setCategories, products, setproducts } =
    useContext(Context);
  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      setCategories(res);
      console.log(res);
    });
  };
  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      setproducts(res);
      console.log(res);
    });
  };

  return (
    <>
      <div>
        <Banner />
        <div className='main-content'>
          <div className='layout'>
            <Category categories={categories} />
            <Products products={products} headingText='Popular Products' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

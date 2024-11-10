import { useDispatch, useSelector } from "react-redux";
import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import Categories from "../Categories/Categories";
import Banner from "../Banner/Banner";
import { useEffect } from "react";
import { getFilteredProducts } from "../../../features/products/productsSlice";

const Home = () => {
    // pria datele din redux si transit conponentei cu useSelector
    const {products, categories} = useSelector((state) => state)
    const dispatch = useDispatch()

    // in caz ca array exista -> fa-mi dispatch , daca nu -> iesi din use effect.
    useEffect(() => {
      if (!products.list) {
        return;
      }
      dispatch(getFilteredProducts(50))
      
    }, [products.list, dispatch]);

    return (
      <>
        <Poster />
        <Products products={products.list} amount={5} title={"Trending"} />
        <Categories
          products={categories.list}
          amount={5}
          title={"Worth seeing"}
        />
        <Banner />
        <Products products={products.filtered} amount={5} title={"Cheaper than 50$"} />
      </>
    );
}
 
export default Home;
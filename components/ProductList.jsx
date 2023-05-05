import ProductCard from "./ProductCard";
import Image from "next/image";
import pizza1p from "../public/img/pizza1p.jpeg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProductList = () => {
  return (
    <>
      <div className="text-center mt-36 ">
        <div className="mt-2 text-5xl">Best Pizza In Hildesheim</div>
        <p className=" flex mx-auto justify-center mt-2 w-3/6 mb-2 text-xl">
          Enjoy and nurture your body with what you love and crave for
        </p>
      </div>

      <div className="flex justify-center ">
        <div className="grid lg:grid-cols-3 gap-9  md:grid-cols-2 sm:grid-cols-1 ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      {/* <div className="flex justify-center my-2  ">
<Image className=" h-auto w-900 max-w-l flex justify-center" src={pizza1p} alt="our Restaurant photo "  />
<button className=" btn-us">About Us</button> 
</div> */}
      <div className="flex justify-center mt-10 ">
        <div className="grid lg:grid-cols-3 gap-7 md:grid-cols-2 sm:grid-cols-1 ">
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>
      </div>
    </>
  );
};

export default ProductList;

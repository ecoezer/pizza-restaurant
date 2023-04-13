import ProductCard from "./ProductCard";

const ProductList = () => {
    return (
        

        <>
        <div className="text-center mt-36 ">
        <div className="mt-2 text-xl">Best Pizza In Hildesheim</div>
        <p className="bg-yellow-200 flex mx-auto mt-2 w-3/6 mb-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>

</div>


<div className="flex justify-center">
  <div className="grid grid-cols-4 gap-4">
  <ProductCard />
  <ProductCard />
  <ProductCard />
  <ProductCard />
  </div>
</div>
<div className="flex justify-center mt-4">
  <div className="grid grid-cols-3 gap-4">
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
  <ProductCard />


  </div>
  
</div>



</>
    );
};

export default ProductList;
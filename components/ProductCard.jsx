import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl card-effects ">
      <figure>
        <Image
          src="/img/pepperoni.png"
          alt="Shoes "
          width={300}
          height={200}
          draggable={false}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Pizza Salami</h2>
        <p>
          Knuspriger Boden, saftige Tomaten, würzige Salami: deine Pizza Salami
        </p>
        <div className="card-actions justify-end">
          <p className="italic text-3xl ">12.99€</p>
          <button className="btn btn-primary ">Add to cart</button>
        </div>
      </div>
    </div>
  );

  {
    /* <div className="bg-slate-200 w-44 rounded-xl text-center pb-2 px-auto shadow-xl">
    <Image className=" mx-auto " src="/img/pepperoni.png" width={100} height={100} />
    <h1 className="font-bold text-xl">Pizza Salami</h1>
    <p className="">Knuspriger Boden, saftige Tomaten, würzige Salami: deine Pizza Salami </p>
    <p className="italic text-2xl">12.99€</p>
</div> */
  }
};

export default ProductCard;

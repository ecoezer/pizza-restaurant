import Image from "next/image";

const ProductCard = () => {
    return (
<div className="bg-slate-200 w-44 rounded-xl text-center pb-2 px-auto shadow-xl">
    <Image className=" mx-auto " src="/img/pepperoni.png" width={100} height={100} />
    <h1 className="font-bold">Pizza Salami</h1>
    <p className="italic">12.99€</p>
    <p className="">Knuspriger Boden, saftige Tomaten, würzige Salami: deine Pizza Salami </p>
</div>
    )
}

export default ProductCard;

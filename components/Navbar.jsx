import { BsTelephone } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiFullPizza } from "react-icons/gi";
const Navbar = () => {
  return (
    <>
 
      <main className="fixed top-0 z-10 w-full h-28  bg-red-600 px-6 items-center flex justify-between">
        <div className="flex w-2/12 items-center text-white">
          <div className="ml-0 mr-2">
            <BsTelephone
              size={20}
              color="red"
              className="bg-white rounded-full w-14 h-14 py-3"
            />
          </div>

          <div>
            <div className="uppercase">Order Now</div>
            <div className="uppercase">123456 78</div>
          </div>
        </div>

        <div className="text-white w-8/12">
          <ul className="flex justify-between items-center">
            <li>Homepage</li>
            <li>Products</li>
            <li>Menu</li>
            <GiFullPizza size={100} color="white" />
            <li>Events</li>
            <li>Blogs</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="text-white w-1/12 items-center flex">
      
            <AiOutlineShoppingCart size={40} className="ml-auto items-center"/>
            <div className="bg-white h-6 w-6 text-center text-red-500 rounded-full">2</div>
      
        </div>
      </main>
     
    </>
  );
};

export default Navbar;

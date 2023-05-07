import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProductCard = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 9,
      slidesToSlide: 9,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 9,
      slidesToSlide: 9,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 9,
      slidesToSlide: 9,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 3,
    },
  };
  return (
    <div className="my-16">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        ssr={true} // set to true if server-side rendering is enabled
        infinite={false}
        autoPlay={false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5s"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-10-px"
      >
        <div className="hover:bg-slate-200 cursor-pointer py-1 mr-2 text-center text-black font-medium rounded-xl">
          <p>Action</p>
        </div>
        <div className="hover:bg-slate-200 cursor-pointer py-1 mr-2 text-center text-black font-medium rounded-xl">
          <p>Burger</p>
        </div>
        <div className="hover:bg-slate-200 cursor-pointer py-1 mr-2 text-center text-black font-medium rounded-xl">
          <p>Salad</p>
        </div>
        <div className="hover:bg-slate-200 cursor-pointer py-1 mr-2 text-center text-black font-medium rounded-xl">
          <p>Sushi</p>
        </div>
        <div className="hover:bg-slate-200 cursor-pointer py-1 mr-2 text-center text-black font-medium rounded-xl">
          <p>Chinese</p>
        </div>
        <div className="hover:bg-slate-200 cursor-pointer py-1 mr-2 text-center text-black font-medium rounded-xl">
          <p>Italian</p>
        </div>
        <div className="hover:bg-slate-200 cursor-pointer py-1 mr-2 text-center text-black font-medium rounded-xl">
          <p>Indian</p>
        </div>
        <div className="hover:bg-slate-200 cursor-pointer py-1 mr-2 text-center text-black font-medium rounded-xl">
          <p>Mexican</p>
        </div>
        <div className="hover:bg-slate-200 cursor-pointer py-1 mr-2 text-center text-black font-medium rounded-xl">
          <p>Greek</p>
        </div>
        <div className="hover:bg-slate-200 cursor-pointer py-1 mr-2 text-center text-black font-medium rounded-xl">
          <p>Turkish</p>
        </div>
        <div className="hover:bg-slate-200 cursor-pointer py-1 mr-2 text-center text-black font-medium rounded-xl">
          <p>Pizza</p>
        </div>
        <div className="bg-slate-200 cursor-pointer py-1 mr-2 text-center text-black font-medium rounded-xl">
          <p>More</p>
        </div>
      </Carousel>
    </div>
  );
};

export default ProductCard;

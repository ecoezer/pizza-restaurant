import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";

function Test() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="flex justify-center ">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={false}
        showDots={false}
        ssr={true} // set to true if server-side rendering is enabled
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5s"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Carousel>
    </div>
  );
}

export default Test;

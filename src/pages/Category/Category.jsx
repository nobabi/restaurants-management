import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Mousewheel } from "swiper/modules";

import "./Category.css";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
 

const Category = () => {
  return (
    <section className="category-container">
 <SectionTitle
  subHeading="From 11.00am to 10.00pm"
  heading="Order Online"
/>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}

        mousewheel={{
          enabled: true,
          forceToAxis: false,
          sensitivity: 1,
          thresholdDelta: 10,
          thresholdTime: 100,
        }}

        pagination={{
          clickable: true,
        }}

        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 35,
          },
        }}

        modules={[Pagination, Mousewheel]}
        className="category-swiper"
      >

        <SwiperSlide>
          <div className="category-slide">
            <img src={slide1} alt="Salads" />
            <h2 className="category-title">Salads</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="category-slide">
            <img src={slide2} alt="Pizzas" />
            <h2 className="category-title">Pizzas</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="category-slide">
            <img src={slide3} alt="Soups" />
            <h2 className="category-title">Soups</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="category-slide">
            <img src={slide4} alt="Desserts" />
            <h2 className="category-title">Desserts</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="category-slide">
            <img src={slide5} alt="Drinks" />
            <h2 className="category-title">Drinks</h2>
          </div>
        </SwiperSlide>

       

      </Swiper>
    </section>
  );
};

export default Category;
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Banner.css";

import imag1 from "../../assets/home/01.jpg";
import imag2 from "../../assets/home/02.jpg";
import imag3 from "../../assets/home/03.png";
import imag4 from "../../assets/home/04.jpg";
import imag5 from "../../assets/home/05.png";
import imag6 from "../../assets/home/06.png";

const Banner = () => {
  return (
    <section className="banner-container">
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        stopOnHover={false}
        swipeable={true}
        emulateTouch={true}
        
      >
        <div className="banner-slide">
          <img src={imag1} alt="Banner 1"  />
        </div>

        <div className="banner-slide">
          <img src={imag2} alt="Banner 2" />
        </div>

        <div className="banner-slide">
          <img src={imag3} alt="Banner 3" />
        </div>

        <div className="banner-slide">
          <img src={imag4} alt="Banner 4" />
        </div>

        <div className="banner-slide">
          <img src={imag5} alt="Banner 5" />
        </div>

        <div className="banner-slide">
          <img src={imag6} alt="Banner 6" />
        </div>
      </Carousel>
    </section>
  );
};

export default Banner;
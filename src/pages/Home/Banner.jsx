import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import imag1 from "../../assets/home/01.jpg";
import imag2 from "../../assets/home/02.jpg";
import imag3 from "../../assets/home/03.png";
import imag4 from "../../assets/home/04.png";
import imag5 from "../../assets/home/05.png";
import imag6 from "../../assets/home/06.png";

const Banner = () => {
  return (
    <div className="w-full m-0 p-0 mt-0 pt-0">
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showStatus={false}
      >
        <div className="m-0 p-0">
          <img
            src={imag1}
            alt="Banner 1"
            className="block w-full m-0 p-0"
          />
        </div>

        <div className="m-0 p-0">
          <img
            src={imag2}
            alt="Banner 2"
            className="block w-full m-0 p-0"
          />
        </div>

        <div className="m-0 p-0">
          <img
            src={imag3}
            alt="Banner 3"
            className="block w-full m-0 p-0"
          />
        </div>
          <div className="m-0 p-0">
          <img
            src={imag4}
            alt="Banner 4"
            className="block w-full m-0 p-0"
          />
        </div>
          <div className="m-0 p-0">
          <img
            src={imag5}
            alt="Banner 5"
            className="block w-full m-0 p-0"
          />
        </div>
          <div className="m-0 p-0">
          <img
            src={imag6}
            alt="Banner 6"
            className="block w-full m-0 p-0"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
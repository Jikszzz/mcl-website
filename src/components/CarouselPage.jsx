import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrowMCL(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        right: "20px",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}
function PrevArrowMCL(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: "20px",
        position: "absolute",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}

class CarouselPage extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      centerPadding: "50px",
      dots: false,
      autoplay: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true,
      nextArrow: <NextArrowMCL />,
      prevArrow: <PrevArrowMCL />,
    };
    return (
      <section>
        <div className="mt-[75px]">
          <Slider {...settings}>
            <div>
              <img
                src={require("../assets/img/1.jpg")}
                alt="Credit to Joshua Earle on Unsplash"
              />
            </div>
            <div>
              <img
                src={require("../assets/img/2.jpg")}
                alt="Credit to Alisa Anton on Unsplash"
              />
            </div>
            <div>
              <img
                src={require("../assets/img/3.jpg")}
                alt="Credit to Igor Ovsyannykov on Unsplash"
              />
            </div>
            <div>
              <img
                src={require("../assets/img/4.png")}
                alt="Credit to Pierre Châtel-Innocenti on Unsplash"
              />
            </div>
            <div>
              <img
                src={require("../assets/img/5.jpeg")}
                alt="Credit to Richard Nolan on Unsplash"
              />
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}

export default CarouselPage;

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      autoplay: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <section className="mt-20">
        <div className="container">
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
                src={require("../assets/img/4.jpg")}
                alt="Credit to Pierre Châtel-Innocenti on Unsplash"
              />
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}

export default Carousel;

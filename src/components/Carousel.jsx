import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousel1 from "../assets/carousel1.jpeg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpeg";
import carousel4 from "../assets/carousel4.jpeg";
import carousel5 from "../assets/carousel5.jpeg";
import carousel6 from "../assets/carousel6.jpeg";

const Carousel = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: '0px',
    slidesToShow: 3,
    speed: 300,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      }
    ]
  };

  const images = [carousel1, carousel2, carousel3, carousel4, carousel5, carousel6];

  return (
    <div style={{ width: "90%", margin: "auto", marginTop: "50px" }}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} style={{ padding: "10px" }}>
            <img
              src={img}
              alt={`Carousel ${index + 1}`}
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

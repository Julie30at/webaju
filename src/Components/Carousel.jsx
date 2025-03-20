import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import "../styles/carousel.css";

function Carousel({ slides }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className={`slide ${slide.className}`}>
            <h2>{slide.title}</h2>

            {slide.img && <img src={slide.img} alt={slide.alt} title={slide.alt} />}

            {Array.isArray(slide.text)
              ? slide.text.map((paragraph, i) => <p key={i}>{paragraph}</p>)
              : slide.text && <p>{slide.text}</p>}

            {slide.extraImg && <img src={slide.extraImg} alt={slide.extraAlt} title={slide.extraAlt} />}
            {slide.extraText && <p>{slide.extraText}</p>}
          </div>
        ))}
      </Slider>
    </div>
  );
}

Carousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      title: PropTypes.string,
      img: PropTypes.string,
      alt: PropTypes.string,
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
      extraImg: PropTypes.string,
      extraAlt: PropTypes.string,
      extraText: PropTypes.string,
    })
  ).isRequired,
};

export default Carousel;

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "#021f86",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };
  return (
    <main>
      <section className="active">
        <Slider {...settings}>
          <div className="carousel-item">
            <img
              src={process.env.PUBLIC_URL + "/img/OFFERS/OfferGaryBox.png"}
              alt="Slide 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src={process.env.PUBLIC_URL + "/img/OFFERS/OfferCheeseGary.png"}
              alt="Slide 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src={process.env.PUBLIC_URL + "/img/OFFERS/OfferGreatGary.png"}
              alt="Slide 3"
            />
          </div>
          <div className="carousel-item">
            <img
              src={process.env.PUBLIC_URL + "/img/OFFERS/OfferFresh.png"}
              alt="Slide 4"
            />
          </div>
        </Slider>
      </section>
    </main>
  );
}

export default SimpleSlider;

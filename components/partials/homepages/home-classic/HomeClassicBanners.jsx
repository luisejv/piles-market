import React from "react";
import NextArrow from "~/components/elements/carousel/NextArrow";
import PrevArrow from "~/components/elements/carousel/PrevArrow";
import Slider from "react-slick";

const HomeClassicBanners = () => {
  const carouselSetting = {
    dots: false,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="ps-home-banner">
      <div className="ps-section__container">
        <Slider {...carouselSetting} className="ps-carousel">
          <div className="carousel-item">
            <div
              className="ps-banner--3 classic small bg--top-right y1"
              style={{
                backgroundImage: `url(/static/img/banner/home-classic/5.jpg)`,
              }}
            >
              <div className="ps-banner__content">
                <p>Available Now</p>
                <h3>
                  Black <br /> Cap
                </h3>
                <h5>
                  La marca de estilo de vida del skateboarding y streetwear{" "}
                  <br />
                  peruano ha confeccionado una gorra de color negro atemporal{" "}
                  <br />
                  con un pequeño detalle especial en la parte delantera y <br />
                  trasera.
                </h5>
                <a
                  className="ps-btn ps-btn--outline"
                  href="#"
                  data-animation-in="fadeInUp"
                  data-animation-out="animate-out fadeOutDown"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="ps-banner--3 classic small bg--top-right y2"
              style={{
                backgroundImage: `url(/static/img/banner/home-classic/3.jpg)`,
              }}
            >
              <div className="ps-banner__content">
                <p>Available Now</p>
                <h3>
                  Doberman <br />
                  Tee
                </h3>
                <h5>
                  Doberman Tee para la colección SS22, color gris plata en{" "}
                  <br />
                  algodón premium peruano con un clásico corte oversize.
                </h5>
                <a
                  className="ps-btn ps-btn--outline"
                  href="#"
                  data-animation-in="fadeInUp"
                  data-animation-out="animate-out fadeOutDown"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="ps-banner--3 classic small bg--top-right y3"
              style={{
                backgroundImage: `url(/static/img/banner/home-classic/2.jpg)`,
              }}
            >
              <div className="ps-banner__content">
                <p>Available Now</p>
                <h3>
                  PAAP <br />
                  Tee
                </h3>
                <h5>
                  PAAP Tee de la colección SS22, es perfecto para usarlo en{" "}
                  <br />
                  cualquier ocasión, la comodidad que te brinda un algodón{" "}
                  <br />
                  premium peruano con un clásico corte oversize.
                </h5>
                <a className="ps-btn ps-btn--outline" href="#">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="ps-banner--3 classic small bg--top-right y2"
              style={{
                backgroundImage: `url(/static/img/banner/home-classic/1.jpg)`,
              }}
            >
              <div className="ps-banner__content">
                <p>Available Now</p>
                <h3>
                  Birmania Smoke <br />
                  Tee
                </h3>
                <h5>
                  Birmania Smoke no es perjudicial para la salud, pero <br />
                  te hará adicto a su algodón premium peruano y clásico corte{" "}
                  <br />
                  oversize, cuello redondo.
                </h5>
                <a className="ps-btn ps-btn--outline" href="#">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="ps-banner--3 classic small bg--top-right y4"
              style={{
                backgroundImage: `url(/static/img/banner/home-classic/4.jpg)`,
              }}
            >
              <div className="ps-banner__content">
                <p>Available Now</p>
                <h3>
                  Vision <br />
                  Tee
                </h3>
                <h5>
                  La Vision que todos necesitamos ahora en tu espalda con Vision{" "}
                  <br />
                  Tee para la colección SS22, en algodón premium peruano con un{" "}
                  <br />
                  clásico corte oversize.
                </h5>
                <a className="ps-btn ps-btn--outline" href="#">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HomeClassicBanners;

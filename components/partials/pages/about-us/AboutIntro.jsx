import React from "react";

const AboutIntro = () => {
  return (
    <div className="ps-about-intro">
      <div className="ps-section__left col-12 col-md-5">
        <div className="ps-section__content">
          <h5>About us</h5>
          <h3>
            <span style={{ fontFamily: "mytype", fontSize: "70px" }}>
              PILES
            </span>{" "}
            representando el streetwear y skateboarding peruano
          </h3>
          <p>
            Desde pequeños Gonzalo y Gabriel montaban skate en un parque de
            Trujillo después del colegio, siempre al salir a montar vestían
            marcas americanas de esa época tales como DC, Baker, Etnies entre
            otras, siendo niños solo buscaban la diversión y lucir como los
            skater profesionales que se veían en la TV
          </p>
          <p className="my-5 py-2">
            Por motivos de la vida Gonzalo tuvo que mudarse a otra ciudad
            dejando a Gabriel, después de algunos años esos niños fueron
            desarrollando y teniendo diferentes habilidades y vivencias, Gabriel
            se empezó a interesar mas por la moda y Gonzalo por la edición de
            videos y el skateboarding.
          </p>
          <p className="my-5 py-2">
            Un día se reencontraron cerca de aquel parque donde solían montar
            skate para volver realidad un sueño que tenían de pequeños,
            decidieron usar todos sus conocimientos y experiencias para crear su
            propia marca, no una marca cualquiera, una marca que sabrían que
            representaría su país, con la mejor calidad el mercado, diseños
            frescos y sin perder la esencia de lo que querían transmitir.
          </p>
          <p className="my-5 py-2">
            Así no solamente podrían aportar al skateboarding si no a la moda
            Peruana, y que cada vez mas personas se puedan ver frescas vistiendo
            PILES.
          </p>
        </div>
      </div>
      <div className="ps-section__right col-12 col-md-7">
        <img
          src="/static/img/pages/image00004.jpeg"
          width={"475"}
          height={"715"}
          alt=""
        />
        <img
          src="/static/img/pages/image00003.jpeg"
          width={"475"}
          className="pl-3"
          // height={"715"}
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutIntro;

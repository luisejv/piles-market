import React from "react";

const AboutLeadership = () => {
  return (
    <div className="ps-about-leadership">
      <div className="container">
        <div className="ps-section__header">
          <h1>Fundadores</h1>
        </div>
        <div className="ps-section__content">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 text-center ">
              <div className="ps-block--leadership">
                <img src="img/pages/member-1.jpg" alt="" />
                <figure>
                  <figcaption>Gonzalo Fuentes</figcaption>
                  <p>FOUNDER</p>
                </figure>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 text-center ">
              <div className="ps-block--leadership">
                <img src="img/pages/member-2.jpg" alt="" />
                <figure>
                  <figcaption>Gabriel Venegas</figcaption>
                  <p>FOUNDER</p>
                </figure>
              </div>
            </div>
            {/* <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 ">
                <div className="ps-block--leadership">
                  <img src="img/pages/member-3.jpg" alt="" />
                  <figure>
                    <figcaption>Wayne Swanson</figcaption>
                    <p>LEAD DESIGNER</p>
                  </figure>
                </div>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLeadership;

import React from "react";

const ModuleDetailDescription = ({ product }) => {
  return (
    <div className="row">
      <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12 ">
        <div className="ps-document">
          {/* <h4>Introduction</h4> */}
          {product.description.split("\n").map((paragraph, idx) => (
            <p key={"p" + idx}>{paragraph}</p>
          ))}
          <h4>Features</h4>
          <ul>
            {product.features.map((feature, idx) => {
              return <li key={"feature" + idx}>{feature}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12 ">
        {/* <img src="/static/img/product/default/default-content.jpg" alt="" /> */}
        <img src={product.photoDescription} alt="" />
      </div>
    </div>
  );
};

export default ModuleDetailDescription;

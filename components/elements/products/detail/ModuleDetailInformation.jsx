import React from "react";
import { connect } from "react-redux";

import Rating from "~/components/elements/Rating";
import SubModuleDetailSpecification from "~/components/elements/products/detail/modules/SubModuleDetailSpecification";
import SubModuleDetailShopping from "~/components/elements/products/detail/modules/SubModuleDetailShopping";

const ModuleDetailInformation = ({ product }) => {
  return (
    <div className="ps-product__info">
      <div className="ps-product__info-header">
        {/* <div className="ps-product__rating">
                    <Rating />
                    <span>1 Review</span>
                </div> */}
        <h2 className="ps-product__title">{product.name}</h2>
        {/* <span className="ps-product__sku">SKU: AB1609456789</span> */}
        <h4 className="ps-product__price">S/.{product.price}</h4>
      </div>
      <div className="ps-product__desc">
        {/* <p>{product.description}</p> */}
        <p>
          <strong>ENVIO NACIONAL GRATUITO</strong>
        </p>
        <p>
          <strong>SIZE: {product.size.join("-")}</strong>
        </p>
      </div>
      <SubModuleDetailShopping product={product} />
      {/* <SubModuleDetailSpecification /> */}
    </div>
  );
};

export default connect((state) => state.cart)(ModuleDetailInformation);

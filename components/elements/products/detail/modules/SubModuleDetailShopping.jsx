import React, { useState } from "react";
import { addItem } from "~/store/cart/action";
import { useDispatch } from "react-redux";
import { addItemToWishlist } from "~/store/wishlist/action";

const SubModuleDetailShopping = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  return (
    <div className="ps-product__shopping">
      <figure>
        <div className="form-group--number">
          <button
            className="up"
            onClick={() => setQuantity(quantity + 1)}
          ></button>
          <button
            className="down"
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
          ></button>
          <input
            className="form-control"
            type="text"
            placeholder={quantity}
            onChange={(e) => setQuantity(+e.currentTarget.value)}
          />
        </div>
        <a
          className="ps-btn ps-btn--black"
          href="#"
          onClick={(e) =>
            dispatch(addItem({ id: product.id, quantity: quantity }))
          }
        >
          Add to cart
        </a>
        <a
          className="ps-product__favorite"
          href="#"
          onClick={(e) => dispatch(addItemToWishlist(product.id))}
        >
          <i className="fa fa-heart-o"></i>
        </a>
      </figure>
      <div className="ps-product__buynow">
        <a
          className="ps-btn ps-btn--black ps-btn--fullwidth"
          href="#"
          onClick={(e) =>
            dispatch(addItem({ id: product.id, quantity: quantity }))
          }
        >
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default SubModuleDetailShopping;

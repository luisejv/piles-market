import React, { useState } from "react";
import { addItem } from "~/store/cart/action";
import { useDispatch } from "react-redux";
import { addItemToWishlist } from "~/store/wishlist/action";

const SubModuleDetailShopping = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("M");
  const dispatch = useDispatch();

  return (
    <div className="ps-product__shopping">
      <div className="ps-product__buynow">
        <a
          className="ps-btn ps-btn--black ps-btn--fullwidth"
          href="#"
          onClick={(e) =>
            dispatch(
              addItem({ _id: product._id, quantity: quantity, size: size })
            )
          }
        >
          Buy Now
        </a>
      </div>
      <div className="col-sm-12 px-0">
        <div className="form-group">
          <label>
            Size <sup>*</sup>
          </label>
          <select
            className="ps-select form-control"
            value={size}
            onChange={(e) => setSize(e.currentTarget.value)}
          >
            {product.size.map((_size) => (
              <option key={_size} value={_size}>
                {_size}
              </option>
            ))}
          </select>
        </div>
      </div>
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
            value={quantity}
            onChange={(e) => setQuantity(+e.currentTarget.value)}
          />
        </div>
        <a
          className="ps-btn ps-btn--black"
          href="#"
          onClick={(e) =>
            dispatch(
              addItem({ _id: product._id, quantity: quantity, size: size })
            )
          }
        >
          Add to cart
        </a>
        <a
          className="ps-product__favorite"
          href="#"
          onClick={(e) => dispatch(addItemToWishlist(product._id))}
        >
          <i className="fa fa-heart-o"></i>
        </a>
      </figure>
    </div>
  );
};

export default SubModuleDetailShopping;

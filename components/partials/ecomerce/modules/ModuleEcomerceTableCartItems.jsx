import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { getCartItemsHelper } from "~/utilities/ecomerce-helpers";
import {
  decreaseItemQty,
  increaseItemQty,
  removeItem,
} from "~/store/cart/action";
import ProductOnCart from "~/components/elements/products/ProductOnCart";

const ModuleEcomerceTableCartItems = ({ cart }) => {
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();

  async function getProductByCardItems(cart) {
    const shoppingCart = await getCartItemsHelper(cart);
    if (shoppingCart) {
      setCartItems(shoppingCart.items);
    }
  }

  useEffect(() => {
    getProductByCardItems(cart);
  }, [cart]);

  // View
  let cartItemsViews;
  if (cartItems) {
    if (cartItems.length > 0) {
      const items = cartItems.map((item) => (
        <tr key={item._id}>
          <td>
            <ProductOnCart product={item} />
          </td>
          <td>
            <strong>S/.{item.price}</strong>
          </td>
          <td>
            <div className="form-group--number">
              <button
                className="up"
                onClick={() => dispatch(increaseItemQty({ _id: item._id }))}
              ></button>
              <button
                className="down"
                onClick={() => dispatch(decreaseItemQty({ _id: item._id }))}
              ></button>
              <input
                className="form-control"
                type="text"
                value={item.quantity}
                placeholder={item.quantity}
                onChange={(e) => {}}
              />
            </div>
          </td>
          <td width={150}>
            <p>
              <strong>S/.{(item.price * item.quantity).toFixed(2)}</strong>
            </p>
          </td>
          <td>
            <a
              className="ps-icon"
              href="#"
              onClick={(e) => dispatch(removeItem({ _id: item._id }))}
            >
              <i className="icon-cross"></i>
            </a>
          </td>
        </tr>
      ));
      cartItemsViews = <tbody>{items}</tbody>;
    } else {
      cartItemsViews = (
        <tbody>
          <tr>
            <td colSpan={5} className="text-left">
              No product found.
            </td>
          </tr>
        </tbody>
      );
    }
  }
  return (
    <table className="table ps-table ps-table--shopping-cart ps-table--resonsive">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
      </thead>
      {cartItemsViews}
    </table>
  );
};

export default connect((state) => state.cart)(ModuleEcomerceTableCartItems);

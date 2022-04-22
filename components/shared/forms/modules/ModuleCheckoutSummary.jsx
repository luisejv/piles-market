import React, { useEffect, useState } from "react";
import { getCartItemsHelper } from "~/utilities/ecomerce-helpers";
import { connect } from "react-redux";
import Link from "next/link";
import { notification } from "antd";
import PilesAPI from "~/utilities/api";

const ModuleCheckoutSummary = ({ cart, email }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  async function getProductByCardItems(cart) {
    const shoppingCart = await getCartItemsHelper(cart);
    if (shoppingCart) {
      setCartItems(shoppingCart.items);
      setTotal(
        shoppingCart.items
          .reduce((a, b) => {
            return a + b.price * b.quantity;
          }, 0)
          .toFixed(2)
      );
    }
  }

  useEffect(() => {
    getProductByCardItems(cart);
  }, [cart]);

  const postBuyOrder = async () => {
    try {
      if (email && email.length > 0) {
        const body = {
          // useId:
          email: email,
          items: cartItems.map((item) => {
            return {
              itemId: item.id,
              quantity: item.quantity,
            };
          }),
          currency: "PEN",
          date: new Date(),
          total: total,
        };
        console.log(body);
        const response = await PilesAPI.post("/buyOrder", body);
        console.log(response);
      } else {
        notification["warning"]({
          message: "Warning",
          description: "Can't create this order without your email.",
          duration: 1.5,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  let cartItemsViews;
  if (cartItems) {
    cartItemsViews = cartItems.map((item) => (
      <Link href="/" key={item.id}>
        <a>
          <strong>
            {item.title}
            <span>x{item.quantity}</span>
          </strong>
          <small>£{(item.price * item.quantity).toFixed(2)}</small>
        </a>
      </Link>
    ));
  }

  return (
    <div className="ps-block--checkout-order">
      <div className="ps-block__content">
        <figure>
          <figcaption>
            <strong>Product</strong>
            <strong>total</strong>
          </figcaption>
        </figure>
        <figure className="ps-block__items">{cartItemsViews}</figure>
        <figure>
          <figcaption>
            <strong>Subtotal</strong>
            <small>£{total}</small>
          </figcaption>
        </figure>
        <figure className="ps-block__shipping">
          <h3>Shipping</h3>
          <p>Enter your address to view shipping options.</p>
        </figure>
        <figure className="ps-block__total">
          <figcaption>
            Total<span>£{total}</span>
          </figcaption>
        </figure>
        <figure className="ps-block__payment-methods">
          {/* <div className="ps-radio">
            <input
              className="form-control"
              type="radio"
              id="payment-method-1"
              name="payment-method"
            />
            <label htmlFor="payment-method-1">Direct bank transfer</label>
          </div>
          <div className="ps-radio">
            <input
              className="form-control"
              type="radio"
              id="payment-method-2"
              name="payment-method"
            />
            <label htmlFor="payment-method-2">Paypal</label>
          </div> */}
          <p>
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our
            <a href="#"> privacy policy.</a>
          </p>
        </figure>
      </div>
      <div className="ps-block__footer">
        {/* <Link href="/shop/checkout-success"> */}
        {/* </Link> */}
        <button
          type="button"
          className="ps-btn ps-btn--fullwidth ps-btn--black"
          onClick={postBuyOrder}
        >
          Process to checkout
        </button>
        {/*<button className="ps-btn ps-btn--fullwidth ps-btn--black">
                    Process to checkout
                </button>*/}
      </div>
    </div>
  );
};

export default connect((state) => state.cart)(ModuleCheckoutSummary);

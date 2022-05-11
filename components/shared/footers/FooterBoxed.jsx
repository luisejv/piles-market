import React from "react";
import ListSocial from "~/components/elements/lists/ListSocial";
import Logo from "~/components/elements/basic/Logo";
import Link from "next/link";

const FooterBoxed = () => {
  return (
    <footer className="ps-footer--boxed">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 ">
            <div className="ps-site-info">
              <Logo light={true} />
              <a className="ps-logo" href="index.html">
                <img src="img/logo-white.png" alt="" />
              </a>
              <div className="row">
                {/* <div className="col-xl-12 col-lg-6 col-md-6 col-sm-12 col-12 ">
                  <figure>
                    <figcaption>Our Location:</figcaption>
                    <p>869 General Village Apt. 645, Moorebury</p>
                  </figure>
                </div> */}
                {/* <div className="col-xl-12 col-lg-6 col-md-6 col-sm-12 col-12 "> */}
                <div className="col-12 ">
                  <figure>
                    <figcaption>24/7 hotline:</figcaption>
                    <p>(+51) 940 067 367</p>
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 ">
            <div className="ps-footer__right">
              <ul className="ps-footer__nav">
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/shop"}>Shop</Link>
                </li>
                <li>
                  <Link href={"/pages/about-us"}>About Us</Link>
                </li>
                <li>
                  <Link href={"/pages/contact"}>Contact</Link>
                </li>
              </ul>
              {/* <ListSocial more={true} /> */}
              <p className="ps-footer__copyright">
                Copyright Piles 2022. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBoxed;

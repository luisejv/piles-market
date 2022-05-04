import React from "react";

const WidgetShopFilterByPriceRange = () => {
  return (
    <aside className="widget widget_shop">
      <h3 className="widget-title">Price</h3>
      <div className="widget__content">
        <ul className="ps-list--under">
          <li>
            <a href="#">S/.0.00 - S/.10.00</a>
          </li>
          <li>
            <a href="#">S/.10.00 - S/.20.00</a>
          </li>
          <li>
            <a href="#">S/.20.00 - S/.30.00</a>
          </li>
          <li>
            <a href="#">S/.30.00 - S/.40.00</a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default WidgetShopFilterByPriceRange;

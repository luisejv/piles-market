import React from 'react';
import MenuAccordion from '~/components/shared/menus/MenuAccordion';
import { main_menu } from '~/public/static/data/menu.json';

const ModuleDrawerMenuSidebar = () => {
  return (
    <section className="ps-navigation--sidebar">
      <div className="ps-navigation__top">
        <MenuAccordion data={main_menu} classes="menu menu--accordion" />
      </div>
      <figure className="ps-navigation__bottom">
        <figcaption>Contact Us</figcaption>
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:pilesapparel@gmail.com"
        >
          pilesapparel@gmail.com
        </a>
      </figure>
    </section>
  );
};

export default ModuleDrawerMenuSidebar;

import React from "react";
import ContainerHomeClassic from "~/components/layouts/ContainerHomeClassic";
import Subscribe from "~/components/shared/sections/Subscribe";
import HomeDefaultCollection from "~/components/partials/homepages/home-default/HomeDefaultCollection";
import InstagramImages from "~/components/shared/sections/InstagramImages";
import HomeBlog from "~/components/shared/sections/HomeBlog";
import HomeDefaultDealOfDay from "~/components/partials/homepages/home-default/HomeDefaultDealOfDay";
import HomeDefaultNewArrival from "~/components/partials/homepages/home-default/HomeDefaultNewArrival";
import HomeDefaultBanner from "~/components/partials/homepages/home-default/HomeDefaultBanner";
import HomeDefaultTopSellers from "~/components/partials/homepages/home-default/HomeDefaultTopSellers";
import HomeClassicBanners from "~/components/partials/homepages/home-classic/HomeClassicBanners";
import HomeClassicCategories from "~/components/partials/homepages/home-classic/HomeClassicCategories";
import HomeClassicProducts from "~/components/partials/homepages/home-classic/HomeClassicProducts";
import HomeClassicPromotions from "~/components/partials/homepages/home-classic/HomeClassicPromotions";
import SiteFeatures from "~/components/shared/sections/SiteFeatures";
const HomeDefaultPage = () => {
  return (
    <ContainerHomeClassic title="Apparel">
      {/* <HomeDefaultBanner />
      <HomeDefaultCollection />
      <HomeDefaultTopSellers collectionSlug="home-default-top-seller" />
      <HomeDefaultNewArrival collectionSlug="new-arrival" />
      <HomeDefaultDealOfDay /> */}
      <HomeClassicBanners />
      <SiteFeatures />
      <HomeClassicCategories />
      <HomeClassicProducts />
      <HomeClassicPromotions />
      <HomeBlog />
      <Subscribe />
      <InstagramImages />
    </ContainerHomeClassic>
  );
};

export default HomeDefaultPage;

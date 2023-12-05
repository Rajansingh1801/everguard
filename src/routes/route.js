import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/homepage/homepage";
import About_us from "../pages/Aboutus/about_us";
import Blogs from "../pages/blogs/Blogs";
import Contact_us from "../pages/contact_us/contact_us";
import Ingrediet from "../pages/Ingredient/Ingrediet";
import Podcast from "../pages/Podcast/Podcast";
import Refer_and_earn from "../pages/Refer_and_earn/Refer_and_earn";
import Reviews from "../pages/Reviews/reviews";
import Shop from "../pages/Shop/Shop";

const Routepage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About_us />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact" element={<Contact_us />} />
        <Route path="/ingredient" element={<Ingrediet />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/refer" element={<Refer_and_earn />} />
        <Route path="/review" element={<Reviews />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
};

export default Routepage;

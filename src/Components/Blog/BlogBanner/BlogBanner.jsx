import React from "react";
import { Link } from "react-router-dom";
import bg from "../../../assets/img/blog-page-bg-1.jpg";
import { AiOutlineRight } from "react-icons/ai";

const BlogBanner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="py-[150px] bg-gradient-to-r from-black/40 to-black/25">
        <h1 className="text-4xl lg:text-[120px] text-white mb-5 font-semibold leading-[0.92em] text-center">
          Blog
        </h1>
        <p className="flex items-center text-xl lg:text-2xl justify-center text-white/90">
          <Link to="/">Home</Link> <AiOutlineRight /> Blog Standard
        </p>
      </div>
    </div>
  );
};

export default BlogBanner;

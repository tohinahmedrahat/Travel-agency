import React from "react";
import BlogsContent from "./BlogsContent/BlogsContent";
import BlogSearch from "./BlogSearch/BlogSearch";

const Blogs = () => {
  return (
    <div className="flex max-w-7xl mx-auto pt-[100px] pb-[70px] flex-wrap lg:flex-nowrap">
      <BlogsContent></BlogsContent>
      <BlogSearch></BlogSearch>
    </div>
  );
};

export default Blogs;

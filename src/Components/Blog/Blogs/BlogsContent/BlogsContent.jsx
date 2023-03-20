import React from "react";
import blog from "../../../../assets/img/blog-standard-1.jpg";
import { SlCalender } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";
import { HiChevronDoubleRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const BlogsContent = () => {
  const blogData = [
    {
      blogImage: blog,
      publishDate: "November 23,2022",
      comment: "Comments (05)",
      title:
        "50 Resources And Tools To Turbocharge Amazon Product Scraper Copywriting Skills",
    },
    {
      blogImage: blog,
      publishDate: "November 23,2022",
      comment: "Comments (05)",
      title:
        "50 Resources And Tools To Turbocharge Amazon Product Scraper Copywriting Skills",
    },
    {
      blogImage: blog,
      publishDate: "November 23,2022",
      comment: "Comments (05)",
      title:
        "50 Resources And Tools To Turbocharge Amazon Product Scraper Copywriting Skills",
    },
    {
      blogImage: blog,
      publishDate: "November 23,2022",
      comment: "Comments (05)",
      title:
        "50 Resources And Tools To Turbocharge Amazon Product Scraper Copywriting Skills",
    },
    {
      blogImage: blog,
      publishDate: "November 23,2022",
      comment: "Comments (05)",
      title:
        "50 Resources And Tools To Turbocharge Amazon Product Scraper Copywriting Skills",
    },
  ];

  return (
    <div className="w-full lg:w-5/6 px-5 lg:px-0">
      {blogData.map((data, index) => (
        <div key={index}>
          <img src={data.blogImage} alt="" className="w-full" />
          <div>
            <div className="lg:flex items-center text-base font-light text-[#484848] mt-10 mb-2">
              <div className="flex items-center hover:text-[#63AC45] cursor-pointer">
                <SlCalender />
                <p className="ml-2">{data.publishDate}</p>
              </div>
              <div className="flex items-center lg:ml-20 mt-5 lg:mt-0 hover:text-[#63AC45] cursor-pointer">
                <FaRegComment />
                <p className="ml-2">{data.comment}</p>
              </div>
            </div>
            <Link
              to="/"
              className="text-xl md:text-3xl lg:text-[35px] font-medium mb-3 hover:text-[#63AC45] duration-300 block"
            >
              {data.title}
            </Link>
            <Link className="flex items-center hover:text-[#63AC45] text-[#1C231F] font-medium text-sm mb-8">
              Read More <HiChevronDoubleRight />
            </Link>
          </div>
        </div>
      ))}
      <div className="btn-group">
        <button className="btn">Previous</button>
        <button className="btn">1</button>
        <button className="btn btn-disabled">2</button>
        <button className="btn">3</button>
        <button className="btn">Next</button>
      </div>
    </div>
  );
};

export default BlogsContent;

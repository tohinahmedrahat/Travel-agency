import React from "react";
import { AiOutlineArrowRight, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import suggestionImage from "../../../../assets/img/blog-suggetion.jpg";

const BlogSearch = () => {
  const category = [
    { name: "Tent Camping" },
    { name: "Family Camping" },
    { name: "Wild Camping" },
    { name: "Campfire" },
    { name: "Luxury Cabin" },
  ];
  const tag = [
    { name: "Camping" },
    { name: "Tent Camp" },
    { name: "Wild" },
    { name: "Campfire" },
    { name: " Luxury Cabin" },
    { name: "Safari Tent" },
    { name: "House Tree" },
  ];
  return (
    <div className="w-full lg:w-1/3 lg:ml-16 px-5">
      <h3 className="text-[24px] font-semibold text-[#1C231F] mb-5">Search</h3>
      <p className="p-3 border border-[rgb(28 35 31 / 10%)] rounded flex items-center">
        <input
          type="search"
          className="w-full focus:outline-none text-xl"
          placeholder="Search"
        />
        <AiOutlineSearch className="text-3xl cursor-pointer" />
      </p>
      <h2 className="my-6 text-2xl font-semibold">Category</h2>
      <hr className="border-[0.5] border-black" />
      <ul>
        {category.map((categoryCamp, index) => (
          <li className="py-3 border-b " key={index}>
            <Link className="flex items-center justify-between hover:text-[#63AC45]">
              <span className="text-base font-light">{categoryCamp.name}</span>
              <AiOutlineArrowRight />
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-10 relative">
        <img src={suggestionImage} alt="" />
        <div className="absolute bottom-0 flex px-5 pb-5">
          <h2 className="text-2xl text-white font-semibold">
            Luxury Cauple Cabin
          </h2>
          <p className="bg-[#F7921E] text-xl h-20 w-20 flex items-center justify-center rounded-full text-center">
            $193
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-3xl font-semibold mt-8 border-b pb-5 border-b-black">
          Product Tag
        </h3>
        <div className="pt-5 grid md:grid-cols-3 lg:grid-cols-2 grid-cols-2 gap-4">
          {tag.map((tagname) => (
            <p className="px-3 py-2 border rounded-md cursor-pointer hover:bg-[#F7921E] duration-300 hover:text-white">
              {tagname.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSearch;

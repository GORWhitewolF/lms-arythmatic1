// src/components/BlogCard.jsx
import React from "react";
import cardContent from "../components/Cardcontent";

const BlogCard = ({ image, title, excerpt, category, author, date }) => {
  return (
    <div className="flex bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 hover:cursor-pointer">
      {/* Image */}
      <img src={image} alt={title} className="w-40 h-full object-cover" />

      {/* Content */}
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h2 className="font-bold text-2xl pb-5">{title}</h2>
          <p className="text-lg text-black-600 mt-2">
            <span className="font-bold">Excerpt:</span> {excerpt}
          </p>
          <p className="text-lg mt-2">
            <span className="font-bold">Category:</span> {category}
          </p>
          <div className="flex justify-between items-end  ">
            <p className="text-lg">
              <span className="font-bold">Author:</span> {author}
            </p>
            <p className="text-lg text-blue-600 font-semibold mt-3 ">
              Date: {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

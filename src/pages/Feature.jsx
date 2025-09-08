// src/components/Feature.jsx
import React from "react";
import feature from "../assets/featureasset.png";
import { CheckCircle, BookOpen, Settings } from "lucide-react"; // icons from lucide-react
import FeatureImage from "../components/FeatureImage";
import logobg from "../assets/logobg.png"

const Feature = () => {
  return (
    <div className=" rounded-lg p-8   relative bg-center bg-no-repeat " style={{ backgroundImage: `url(${logobg})` }}
>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {/* Left Side - Features */}
        
        <div className="pt-20">
          <h2 className="text-5xl font-bold text-black-600 mb-10 pl-17">
             Features
          </h2>
          
          {/* Learning Experience */}
          
          <h2 className="text-2xl font-bold text-blue-600 flex items-center gap-2 text-5xl ">
            <BookOpen className="w-10 h-10 mr-5" /> Learning Experience
          </h2>
          <ul className="mt-4 space-y-3 text-gray-800 font-bold text-2xl pl-2 backdrop-blur-[2px] bg-white/10">
            <li className="flex items-start gap-2">
              <CheckCircle className="text-blue-600 w-7 h-7 mt-1" />
              Live classes, recorded content & self-paced learning
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-blue-600 w-7 h-7 mt-1" />
              Built-in discussion forums & chat
            </li>
            <li className="flex items-start gap-2 ">
              <CheckCircle className="text-blue-600 w-7 h-7 mt-1" />
              Gamification badges & certificates
            </li>
          </ul>

          {/* Admin Tools */}
          <h2 className="text-2xl font-bold text-blue-600 mt-8 flex items-center gap-2 text-5xl ">
            <Settings className="w-10 h-10 mr-5" /> Admin Tools
          </h2>
          <ul className="mt-4 space-y-3 text-gray-800 font-bold text-2xl pl-2 backdrop-blur-[2px] bg-white/10">
            <li className="flex items-start gap-2  ">
              <CheckCircle className="text-blue-600  w-7 h-7 mt-1 r-4" />
              Institution-level analytics & reporting
            </li>
            <li className="flex items-start gap-2  ">
              <CheckCircle className="text-blue-600 w-7 h-7 mt-1" />
              Bulk enrollment & role-based access
            </li>
            <li className="flex items-start gap-2  ">
              <CheckCircle className="text-blue-600 w-7 h-7 mt-1" />
              Payment integration & monetization support
            </li>
          </ul>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          {/* <img
            src={feature} // replace with your image path
            alt="Feature illustration"
            className="rounded-lg shadow-lg w-full max-w-sm"
          /> */}
          <FeatureImage />
        </div>
      </div>

      {/* Read More Button */}
      <div className="flex justify-center mb-20">
        <button className="px-8 py-2 mt-4 border border-blue-600 text-blue-600 rounded-sm font-semibold hover:bg-blue-600 hover:text-white transition hover:cursor-pointer">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Feature;

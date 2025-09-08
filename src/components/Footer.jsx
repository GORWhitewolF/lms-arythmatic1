import React from 'react';

const Footer = () => {
  return (
    <>
      <style>
        {`
          /* Custom CSS for the shine animation */
          .shine {
            position: relative;
            overflow: hidden;
          }

          .shine:hover::before {
            animation: sh02 0.5s 0s linear;
          }

          .shine::before {
            content: '';
            display: block;
            width: 0px;
            height: 86%;
            position: absolute;
            top: 7%;
            left: 0%;
            opacity: 0;
            background: #fff;
            box-shadow: 0 0 50px 30px #fff;
            transform: skewX(-20deg);
          }

          @keyframes sh02 {
            from {
              opacity: 0;
              left: 0%;
            }
            50% {
              opacity: 1;
            }
            to {
              opacity: 0;
              left: 100%;
            }
          }

          .shine:active {
            box-shadow: 0 0 0 0 transparent;
            transition: box-shadow 0.2s ease-in;
          }
        `}
      </style>
      <div className="h-[200px] flex flex-col md:flex-row items-center justify-left bg-white font-sans p-6 space-y-8 md:space-y-0 md:space-x-12">
        <h1 className="p-3 pl-[70px] text-center md:text-left text-black text-4xl sm:text-5xl md:text-6xl font-extrabold max-w-2xl">
          Ready to scale to millions?
        </h1>
        
        <div className="relative">
          <button 
            className="
              shine
              ml-[750px]
              p-5 px-15
              font-bold 
              text-2xl 
              bg-[#0B53ED] 
              text-white 
              rounded-sm 
              border 
              border-[#0B53ED] 
              uppercase 
              tracking-wider
              transition-all duration-200 ease-in
              hover:shadow-lg hover:shadow-[#0B53ED]
              active:shadow-none
              hover:cursor-pointer
            "
          >
            Book A Demo
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;

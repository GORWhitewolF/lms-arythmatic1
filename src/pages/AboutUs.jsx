import { CheckCircle } from "lucide-react"; // for creative tick marks (lucide-react icons)
import bgImage from "../assets/bgAU.png";
import AboutUsBg from "../components/AboutUsBg";


// 
const AboutUs = () => {   
  return (
    <div className="px-10 py-10  text-black bg-cover bg-center bg-no-repeat " style={{ backgroundImage: `url(${bgImage})` }} >
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-8 text-white-600">
        About<span className="text-blue-600"> Us</span> 
      </h1>

      {/* Flex Layout: Content left + Image right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">
            At <span className="text-blue-600">AskmeIDentity</span>, we believe:
          </h2>

          <ul className="space-y-4 text-2xl font-semibold bg-white/70 p-8 rounded-xl ">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
              <span>
                Learning should be <span className="font-semibold">simple, powerful, and accessible</span> to everyone.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
              <span>
                Our mission: <span className="font-semibold">create an engaging space</span> where ideas meet innovation.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
              <span>
                Started with one idea — make <span className="text-blue-600">E-learning easier, enjoyable, and impactful.</span>
              </span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
              <span>
                Today, we connect <span className="font-semibold">students, professionals, and teams</span> with the same goal:
                to learn, grow, and succeed.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
              <span>
                What sets us apart? <span className="font-semibold">Quality, creativity, and real results.</span>
              </span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
              <span>
                We’re <span className="font-semibold">not just a company</span> — we’re your <span className="text-blue-600">partners in growth.</span>
              </span>
            </li>
          </ul>

          {/* View More Button */}
          <div className="flex mt-8">
            <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-sm font-semibold hover:bg-[#53C9FF] hover:text-white transition hover:cursor-pointer">
              View More
            </button>
          </div>
        </div>

        {/* Right Image Placeholder */}
        <div className="flex items-center justify-center">
          <AboutUsBg className="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

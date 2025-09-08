import dots from "../assets/dots.png";
import rectangle from "../assets/Rectangle.png";
import HomeImage from "../components/Homeimage";
const Home = () => {
  return (
    <div className=" w-screen h-[650px]  flex items-center justify-between px-16">
      <div className="pl-15 pt-30">
        <h1 className=" text-4xl  md:text-9xl font-extrabold tracking-tight text-[#0B53ED]">
          From classrooms to <br />
          careers,
        </h1>
        <h2 className="text-6xl font-small text-[#0B53ED]">
          our platform powers every step of learning.
        </h2>
           <div className="flex gap-12 mt-12 text-left">
          {/* Active Learners */}
          <div className="flex flex-col items-start ">
            <span className="text-6xl pl-18">😊</span>
            <p className="text-red-600 text-5xl font-bold font-lato">500,000+</p>
            <p className="text-[#0B53ED] text-3xl font-semibold">Active Learners</p>
          </div>

          {/* Institutional Partners */}
          <div className="flex flex-col items-start">
            <span className="text-6xl pl-1">🤝</span>
            <p className="text-red-600 text-5xl font-bold font-lato">100+</p>
            <p className="text-[#0B53ED] text-3xl font-semibold">Institutional Partners</p>
          </div>
        </div>
      </div>
      {/* <img src={rectangle} alt="rectangle" /> */}
      <div ><HomeImage className="h-[600px]" /></div>
      
    </div>
  );
};

export default Home;

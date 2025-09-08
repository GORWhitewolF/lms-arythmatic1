import arrow from "../assets/arrow.png";

const Pricing = () => {
  return (
    <div className="px-20 py-10">
      {/* Heading + Paragraph */}
      <div className="mb-6 w-full">
        <h1 className="text-5xl font-bold text-[#0B53ED] pt-15">
          Flexible Plans That <span className="text-[#F68714]">Grow</span> With
          You
        </h1>
        <p className="w-full leading-relaxed font-bold text-xl mt-6 text-gray-700 max-w-3xl">
          Whether you’re a solo educator, a growing institution, or a large
          enterprise, our platform scales to fit your needs. Start small and
          expand to millions of learners seamlessly.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="p-6 flex flex-col gap-2 text-left bg-white shadow-lg rounded-xl border-1">
          <div className="flex gap-10 items-end">
            <h2 className=" text-6xl font-bold text-[#0B53ED]">Starter </h2>
            <h2 className="text-3xl font-bold text-[#F68714]">$48/month</h2>
          </div>
          <div className="text-2xl font-bold text-gray-600">
            <div className="flex items-center">
              <img src={arrow} alt="" />
              <h1>Up to 500 active learners</h1>
            </div>
            <div className="flex items-center">
              <img src={arrow} alt="" />
              <h1>Unlimited courses & content uploads</h1>
            </div>
            <div className="flex items-center">
              <img src={arrow} alt="" />
              <h1>Live classes + recorded content</h1>
            </div>
            <div className="flex items-center">
              <img src={arrow} alt="" />
              <h1>Basic analytics & reporting</h1>
            </div>
            <div className="flex items-center">
              <img src={arrow} alt="" />
              <h1>Email support</h1>
            </div>
          </div>
          {/* Button aligned right */}
          <div className="w-full flex justify-end">
            <button className="px-10 py-3 bg-[#0B53ED] text-white text-xl rounded-sm hover:bg-[#687FB1] hover:cursor-pointer font-bold">
              Start Now
            </button>
          </div>
        </div>

        <div className="p-6 flex flex-col gap-2 text-left bg-white shadow-lg rounded-xl border-1">
          <div className="flex gap-10 items-end">
            <h2 className=" text-6xl font-bold">Growth </h2>
            <h2 className="text-3xl font-bold text-[#F68714]">$48/month</h2>
          </div>
          <div className="text-2xl font-bold text-gray-600">
            <div className="flex items-center">
              <img src={arrow} alt="" />
              <h1>Up to 10,000 active learners</h1>
            </div>
            <div className="flex items-center">
              <img src={arrow} alt="" />
              <h1>Branded student portal</h1>
            </div>
            <div className="flex items-center">
              <img src={arrow} alt="" />
              <h1>Advanced analytics & cohort tracking</h1>
            </div>
            <div className="flex items-center">
              <img src={arrow} alt="" />
              <h1>Payment integrations</h1>
            </div>
            <div className="flex items-center">
              <img src={arrow} alt="" />
              <h1>Priority email + chat support</h1>
            </div>
          </div>
          {/* Button aligned right */}
          <div className="w-full flex justify-end">
            <button className="px-10 py-3 bg-[#0B53ED] text-white text-xl rounded-sm hover:bg-[#687FB1] hover:cursor-pointer font-bold">
              Start Now
            </button>
          </div>
        </div>
        <div className="p-6 flex flex-col gap-2 text-left bg-white shadow-lg rounded-xl border-1">
          <div className="flex gap-10 items-end">
            <h2 className=" text-6xl font-bold text-[#F68714]">Enterprise </h2>
            <h2 className="text-3xl font-bold text-[#F68714]">$48/month</h2>
          </div>
          <div className="text-2xl font-bold text-gray-600">
            <div className="flex items-center">
              <img src={arrow} alt="" />
              <h1>Unlimited learners (scale to millions)</h1>
            </div>
            <div className="flex items-center">
              <img src={arrow} alt="" />
              <h1>Dedicated cloud environment</h1>
            </div>
            <div className="flex items-center">
              <img src={arrow} alt="" />
              <h1>Custom integrations (HRMS, ERP, SSO)</h1>
            </div>
            <div className="flex items-center">
              <img src={arrow} alt="" />
              <h1>Enterprise-grade IAM & security</h1>
            </div>
            <div className="flex items-center">
              <img src={arrow} alt="" />
              <h1>24/7 premium support & dedicated success manager</h1>
            </div>
          </div>
          {/* Button aligned right */}
          <div className="w-full flex justify-center">
            <a href="" className="text-3xl font-bold text-[#F68714] underline">
              Contact Us for Custom Pricing!
            </a>
          </div>
        </div>
        <div className="item-center">
            
        </div>
        <div className="flex justify-center mb-6">
          <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-sm font-semibold hover:bg-blue-600 hover:text-white transition hover:cursor-pointer">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

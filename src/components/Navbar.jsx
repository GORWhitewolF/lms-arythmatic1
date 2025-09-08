import logo from "../assets/logo.png";

const Navbar = ({ activeTab, onTabClick, onLogoClick }) => {
  const product = [
    { name: "UI", path: "/p1" },
    { name: "WEB", path: "/p3" },
    { name: "APP", path: "/p3" },
  ];

  return (
    <>
      <style>
        {`
          .active-tab {
            color: #0B53ED;
            font-weight: bold;
          }
        `}
      </style>

      <div className="h-10 p-10 flex justify-between items-center bg-[#BAC3C7] shadow-md cursor-pointer text-xl font-medium text-white">
        {/* ✅ Logo scrolls back to Home */}
        <div onClick={onLogoClick}>
          <img src={logo} alt="Logo" className="h-10 cursor-pointer" />
        </div>

        {/* Nav Links */}
        <div className="flex gap-10">
          <h6
            className={`${activeTab === "feature" ? "active-tab" : ""}`}
            onClick={() => onTabClick("feature")}
          >
            Feature
          </h6>

          <div className="relative group inline-block">
            <h6
              className={`cursor-pointer ${activeTab === "pricing" ? "active-tab" : ""}`}
              onClick={() => onTabClick("pricing")}
            >
              Pricing
            </h6>
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md p-2">
              {product.map((item, index) => (
                <ul key={index}>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    {item.name}
                  </li>
                </ul>
              ))}
            </div>
          </div>

          <h6
            className={`${activeTab === "blogs" ? "active-tab" : ""}`}
            onClick={() => onTabClick("blogs")}
          >
            Blog
          </h6>
          <h6 className={`${activeTab === "AboutUs" ? "active-tab" : ""}`}
            onClick={() => onTabClick("AboutUs")}>About us</h6>
        </div>

        {/* CTA Button */}
        <div>
          <button className="shine p-3 px-10 bg-white font-bold text-black rounded-sm hover:bg-[#0B53ED] hover:text-white transition-all duration-200 ease-out hover:cursor-pointer">
            Start a free trial
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

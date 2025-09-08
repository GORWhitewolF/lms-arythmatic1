import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Home from "../pages/home";
import Feature from "../pages/Feature";
import Pricing from "../pages/Pricing";
import Blogs from "../pages/Blogs";
import Footer from "../components/Footer";
import AboutUs from "../pages/AboutUs";
import "../index.css";

const Layout = () => {
  const scrollRef = useRef(null);
  const [activeTab, setActiveTab] = useState(null); // ✅ no tab active initially

  // ✅ Horizontal scroll on mouse wheel
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollBy({
          left: e.deltaY,
          behavior: "smooth",
        });
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // ✅ Scroll to section when navbar tab clicked
  const scrollToSection = (tab) => {
    const el = document.querySelector(`[data-tab="${tab}"]`);
    if (el && scrollRef.current) {
      scrollRef.current.scrollTo({
        left: el.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  // ✅ Scroll back to Home when logo clicked
  const scrollToHome = () => {
    const firstSection = document.querySelector(".section");
    if (firstSection && scrollRef.current) {
      scrollRef.current.scrollTo({
        left: firstSection.offsetLeft,
        behavior: "smooth",
      });
    }
    setActiveTab(null); // ✅ clear active tab when Home is shown
  };

  // ✅ Detect which section is visible
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisible = null;
        let maxRatio = 0;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisible = entry;
          }
        });

        if (mostVisible && mostVisible.isIntersecting) {
          const currentTab = mostVisible.target.dataset.tab;
          // ✅ If section has no data-tab (Home), clear highlight
          setActiveTab(currentTab || null);
        }
      },
      {
        root: scrollRef.current,
        threshold: Array.from({ length: 11 }, (_, i) => i / 10),
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full h-screen flex flex-col">
      <Navbar
        activeTab={activeTab}
        onTabClick={(tab) => scrollToSection(tab)}
        onLogoClick={scrollToHome}
      />

      {/* Horizontal Scrollable Sections */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide flex-1 bg-[radial-gradient(circle,_#d1d5db_1px,_transparent_3px)] [background-size:30px_30px]"
      >
        {/* ✅ Home has no data-tab */}
        <div className="section snap-start w-screen flex-shrink-0">
          <Home />
        </div>
        <div className="section snap-start w-screen flex-shrink-0" data-tab="feature">
          <Feature />
        </div>
        <div className="section snap-start w-screen flex-shrink-0" data-tab="pricing">
          <Pricing />
        </div>
        <div className="section snap-start w-screen flex-shrink-0" data-tab="blogs">
          <Blogs />
        </div>
        <div className="section snap-start w-screen flex-shrink-0" data-tab="AboutUs">
          <AboutUs />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;

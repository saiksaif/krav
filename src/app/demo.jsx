import "../App.css";

import React, { useRef, useEffect, useState } from "react";
import ParticleCanvas from "./ParticleCanavs";
import WindBooster2 from "../Images/WindBooster2.png";

import "font-awesome/css/font-awesome.min.css";
import NavbarComponent from "../components/navbar";
import explore from "../Images/explore.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import Products from "./products";
import GotWindbooster from "./gotWindbooster";
import GotBoost from "./gotBoost";
import Mobileappcontrol from "./mobileappcontrol";
import AboutUs from "./about";
import ContactUs from "./contactus";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: "1500", delay: "200" });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = [
        "introduction",
        "products",
        "wind-booster",
        "got-boost",
        "mobile-app-control",
        "about-us",
        "contact-us",
      ];

      const currentSection = sections.find((sectionId) => {
        const element = document.getElementById(sectionId);
        return (
          element?.offsetTop <= scrollY &&
          element?.offsetTop + element.offsetHeight > scrollY
        );
      });

      if (currentSection) {
        const newPathname = `/${currentSection}`;
        const currentPathname = window.location.pathname;

       

        if (newPathname !== currentPathname) {
          {
            window.history.replaceState(null, "", newPathname);
          }
        } 
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleInitialScroll = () => {
      const currentPathname = window.location.pathname;
      const sectionName = currentPathname.replace('/', '');

      if (sectionName) {
        scrollToSection(sectionName);
      } else {
        scrollToSection('introduction');
      }
    };

    handleInitialScroll();
  }, []);

  const [isNavbarVisible, setNavbarVisibility] = useState(false);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerRef = useRef(null);

  // useEffect(() => {
  //   const updateDimensions = () => {
  //     const { width, height } = containerRef.current.getBoundingClientRect();
  //     setDimensions({ width, height });
  //   };

  //   updateDimensions();
  //   window.addEventListener("resize", updateDimensions);

  //   return () => {
  //     window.removeEventListener("resize", updateDimensions);
  //   };
  // }, []);

  return (
    <div>
      <NavbarComponent
        enableScrollingBehavior="true"
        isNavbarVisible={isNavbarVisible}
        setNavbarVisibility={setNavbarVisibility}
      />

      <div className="w-[100vw] h-[100vh]  ">
        {/* Section 1 */}
        <section
          className=" snap-normal h-[100vh] relative w-[100vw] text-center bg-[#233B58] m-0 p-0 scroll-snap-align"
          id="introduction"
        >
          <div className="flex h-[65vh]  justify-center">
            {!isNavbarVisible && (
              <p className="text-white z-[102] pt-6 md:pt-8 text-center w-[195px] h-[89px] text-5xl font-extrabold z-[115]">
                GOT
              </p>
            )}
            <img
              src={WindBooster2}
              className=" shadow-custom1 aspect-auto z-[6] color1 absolute top-[56vh] md:top-[55vh]   sm:top-[52vh] lg:top-[48vh] xl:top-[50vh] w-[200px] sm:w-[150px] md:w-auto"
              alt=""
            />
            <div className="h-[219px] absolute  top-[68vh] w-[20%] rounded-[18px] blur-[22px] z-[5] rectangle-1" />
            <div
              className="absolute top-0 left-0 z-[1] h-[65vh]"
              ref={containerRef}
            >
              <ParticleCanvas
                width={window.innerWidth - 30}
                height={window.innerHeight}
              />
            </div>
          </div>
          <div className="  flex h-[35vh] justify-center lower relative">
            <p className="text-white m-0 text-transparent top-[-31%] lg:top-[-125%] md:h-[55vh] absolute sm:bottom-[70%] flex items-end leading-none align-bottom z-[5] md:font-extrabold tex">
              Boost
            </p>
            <div
              onClick={() => scrollToSection("introduction")}
              className="self-end pb-16 sm:pb-3  md:pb-20 lg:pb-8 xl:pb-8"
            >
              <img
                src={explore}
                alt=""
                className=" w-[150px] sm:w-[100px] md:w-auto"
              />
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <Products />

        {/* Section 3 */}
        <GotWindbooster />

        {/* Section 4 */}
        <GotBoost />

        {/* Section 5 */}
        <Mobileappcontrol />

        {/* Section 6 */}

        <AboutUs />
        {/* Section 6 */}

        <div className="     bg-[#142335] ">
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default Home;
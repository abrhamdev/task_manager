import HeroSection from "../../components/landingpage/hero";
import Navbar from "../../components/landingpage/navbar";
import Features from "../../components/landingpage/features";
import DescriptionSection from "../../components/landingpage/description";
import Carousel from "../../components/landingpage/carousel";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../../components/landingpage/footer";
import AboutUs from "../../components/landingpage/about";
import Features2 from "../../components/landingpage/features2";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("authtoken")) {
      navigate("/dashboard/home");
    }
  });

  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-black opacity-95 z-0"></div>
        <div className="relative z-10">
          <HeroSection />
          <DescriptionSection />
          <Features2/>
          <Features />
          <AboutUs />
          <Carousel />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
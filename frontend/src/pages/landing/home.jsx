import HeroSection from "../../components/landingpage/hero";
import Navbar from "../../components/landingpage/navbar";
import Features from "../../components/landingpage/features";
import DescriptionSection from "../../components/landingpage/description";
import Carousel from "../../components/landingpage/carousel";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../../components/landingpage/footer";
import AboutUs from "../../components/landingpage/about";

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
      <HeroSection />
      <DescriptionSection />
      <Features />
      <AboutUs />
      <Carousel />
      <Footer />
    </>
  );
};

export default Home;

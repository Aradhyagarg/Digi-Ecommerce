import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeatureProduct from "./components/FeatureProduct";
import Contact from "./Contact";

const Home = () => {
  const data = {
    name: "thapa store",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Contact />
    </>
  );
};

export default Home;

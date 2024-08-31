import {Layout} from "antd";
import AppHeader from "../components/molecules/Header";
import BrandLogos from "../components/pages/Home/BrandLogos";
import About from "../components/pages/Home/About";
import Pricing from "../components/pages/Home/Pricing";
import Contact from "../components/pages/Home/Contact";
import Footer from "../components/molecules/Footer";
import HeroSection from "../components/pages/Home/HeroSection";

const {Content} = Layout;

const Home: React.FC = () => {
  return (
    <Layout className="bg-none">
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
      <AppHeader />
      <Content>
        <HeroSection />
        <BrandLogos />
        <About />
        <Pricing />
        <Contact />
      </Content>
      <Footer />
    </Layout>
  );
};

export default Home;

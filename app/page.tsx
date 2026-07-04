import AboutProject from "./components/About/About";
import Banner from "./components/Banner/Banner";
import FooterSection from "./components/FooterSection/FooterSection";
import MasterLayout from "./components/MasterLayout/MasterLayout";
import NavBar from "./components/NavBar/NavBar";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import WhyInvest from "./components/WhyInvest/WhyInvest";

export default function Home() {
  return (
   <>
     <NavBar/>
      <Banner/>
      <AboutProject/>
      <MasterLayout/>
      <WhyInvest/>
      <ProjectDetails/>
      <FooterSection/>
   </>
  );
}
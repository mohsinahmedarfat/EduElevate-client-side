import { ScrollRestoration } from "react-router-dom";
import BeInstructorSection from "./BeInstructorSection";
import ClassSection from "./ClassSection";
import Collaborators from "./Collaborators";
import Features from "./Features";
import Slider from "./Slider";
import Team from "./Team";
import TotalUsage from "./TotalUsage";

const Home = () => {
  return (
    <div className="space-y-24 mt-5 mb-10">
      <ScrollRestoration></ScrollRestoration>
      <Slider></Slider>
      <ClassSection></ClassSection>
      <Features></Features>
      <TotalUsage></TotalUsage>
      <Team></Team>
      <BeInstructorSection></BeInstructorSection>
      <Collaborators></Collaborators>
    </div>
  );
};

export default Home;

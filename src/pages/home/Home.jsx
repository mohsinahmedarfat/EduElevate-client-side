import BeInstructorSection from "./BeInstructorSection";
import Collaborators from "./Collaborators";
import Slider from "./Slider";
import TotalUsage from "./TotalUsage";

const Home = () => {
  return (
    <div className="space-y-24 mt-5 mb-10">
      <Slider></Slider>
      <Collaborators></Collaborators>
      <TotalUsage></TotalUsage>
      <BeInstructorSection></BeInstructorSection>
    </div>
  );
};

export default Home;

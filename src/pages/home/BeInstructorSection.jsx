import { Link } from "react-router-dom";
import instructorImage from "../../assets/images/instructor.jpg";
import useRole from "../../hooks/useRole";

const BeInstructorSection = () => {
  const [role] = useRole();

  return (
    <div className="hero">
      <div className="hero-content lg:px-10 gap-10 grid grid-cols-1 lg:grid-cols-3">
        <div>
          <img src={instructorImage} className="rounded-lg shadow-2xl" />
        </div>
        <div className="lg:col-span-2">
          <h1 className="text-5xl font-bold">
            Become an{" "}
            <span className="bg-gradient-to-r from-[#769FCD] to-[#B9D7EA] inline-block text-transparent bg-clip-text">
              Instructor
            </span>{" "}
          </h1>
          <p className="py-6">
            Join EduManage and transform the way you teach! As an instructor on
            our platform, you will have the opportunity to reach a global
            audience, share your expertise, and make a significant impact on
            students lives. We provide you with advanced tools and resources to
            create engaging and effective courses, allowing you to focus on what
            you do best—teaching. Start your journey with us today and be a part
            of the future of education!
          </p>
          <Link to="/teach-on-eduelevate">
            <button
              disabled={role === "teacher"}
              className="btn bg-[#769FCD] text-white hover:bg-[#B9D7EA]"
            >
              Start teaching today
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BeInstructorSection;

import instructorImage from "../../assets/images/instructor.jpg";

const BeInstructorSection = () => {
  return (
    <div className="hero">
      <div className="hero-content justify-evenly flex-col lg:flex-row">
        <div className="w-1/3">
          <img src={instructorImage} className=" rounded-lg shadow-2xl" />
        </div>
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">Become an Instructor</h1>
          <p className="py-6">
            Join EduManage and transform the way you teach! As an instructor on
            our platform, you will have the opportunity to reach a global
            audience, share your expertise, and make a significant impact on
            students lives. We provide you with advanced tools and resources to
            create engaging and effective courses, allowing you to focus on what
            you do best—teaching. Start your journey with us today and be a part
            of the future of education!
          </p>
          <button className="btn btn-info">Start teaching today</button>
        </div>
      </div>
    </div>
  );
};

export default BeInstructorSection;

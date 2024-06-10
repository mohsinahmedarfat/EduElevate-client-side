import { MdOutlineVideoSettings } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";
import { FaPersonRays } from "react-icons/fa6";

const Features = () => {
  return (
    <div className=" space-y-6">
      <div className="mb-10">
        <p className="text-center text-xl text-blue-500 font-bold mx-auto mb-3 uppercase">
          Features
        </p>
        <h2 className="text-4xl font-bold text-center ">
          Revolutionizing Education Management
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1 */}
        <div className="border p-10 flex flex-col items-center space-y-4 group  hover:border-[#769FCD]">
          <MdOutlineVideoSettings className="text-7xl group-hover:text-[#769FCD]" />
          <h3 className="font-bold text-2xl group-hover:text-[#769FCD]">
            Class Management
          </h3>
          <p className="text-center">
            Tools for scheduling, attendance tracking, and resource sharing
            encompass a wide range of applications and platforms designed to
            enhance organizational efficiency, streamline communication, and
            improve collaboration.
          </p>
        </div>
        {/* 2 */}
        <div className="border p-10 flex flex-col items-center space-y-4 group  hover:border-[#769FCD]">
          <ImStatsDots className="text-7xl group-hover:text-[#769FCD]" />
          <h3 className="font-bold text-2xl group-hover:text-[#769FCD]">
            Interactive Learning
          </h3>
          <p className="text-center">
            Virtual classrooms, discussion forums, and multimedia support offer
            a comprehensive suite of tools and platforms designed to create
            engaging, interactive, and flexible learning environments. Virtual
            classrooms provide real-time.
          </p>
        </div>
        {/* 3 */}
        <div className="border p-10 flex flex-col items-center space-y-4 group  hover:border-[#769FCD]">
          <FaPersonRays className="text-7xl group-hover:text-[#769FCD]" />
          <h3 className="font-bold text-2xl group-hover:text-[#769FCD]">
            Personalized Tutoring
          </h3>
          <p className="text-center">
            Matching students with tutors based on their individual skills and
            needs, along with integrated progress tracking, involves
            sophisticated algorithms and platforms that ensure personalized
            learning experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;

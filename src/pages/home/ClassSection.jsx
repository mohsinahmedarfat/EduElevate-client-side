import { Link } from "react-router-dom";
import ClassCard from "../../components/ClassCard";
import useClasses from "../../hooks/useClasses";

const ClassSection = () => {
  const [classes] = useClasses();
  console.log(classes);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {classes.slice(0, 4).map((classItem) => (
          <ClassCard
            key={classItem._id}
            classItem={classItem}
            payBtn={true}
          ></ClassCard>
        ))}
      </div>
      <div className="flex items-center justify-center mt-10">
        <Link to="/all-classes">
          <button className="btn bg-[#769FCD] text-white hover:bg-[#B9D7EA]">
            See all
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ClassSection;

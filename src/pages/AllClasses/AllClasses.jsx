import ClassCard from "../../components/ClassCard";
import LoadingSpinner from "../shared/LoadingSpinner";
import useClasses from "../../hooks/useClasses";
import { ScrollRestoration } from "react-router-dom";

const AllClasses = () => {
  const [classes, isLoading] = useClasses();
  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div className="my-10">
      <ScrollRestoration></ScrollRestoration>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {classes.map((classItem) => (
          <ClassCard
            key={classItem._id}
            classItem={classItem}
            payBtn={true}
          ></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default AllClasses;

import ClassCard from "../../../../components/ClassCard";
import useClasses from "../../../../hooks/useClasses";
import LoadingSpinner from "../../../shared/LoadingSpinner";

const MyClasses = () => {
  const [classes, isLoading] = useClasses();

  const handleDelete = (id) => {
    console.log("will delete ->", id);
  };

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  return (
    <div className="m-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {classes.map((classItem) => (
          <ClassCard
            key={classItem._id}
            classItem={classItem}
            teacherBtn={true}
            handleDelete={handleDelete}
          ></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default MyClasses;

import TeachOnEEForm from "./TeachOnEEForm";

const TeachOnEE = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-10 ">
        <div>
          <img
            className="rounded-xl"
            src="https://i.ibb.co/51KzzW2/dr-terrence-underwood-Io0e-EAf-SMj-Y-unsplash.jpg"
            alt=""
          />
        </div>

        <div className=" rounded-xl ">
          <TeachOnEEForm></TeachOnEEForm>
        </div>
      </div>
    </div>
  );
};

export default TeachOnEE;

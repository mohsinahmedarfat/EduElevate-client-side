import image from "../../assets/images/slider-4.jpg";

const TotalUsage = () => {
  return (
    <div className="grid grid-cols-3 gap-6 ">
      {/* left */}
      <div className=" flex flex-col items-center justify-evenly">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body text-center">
            <p>Total User</p>
            <h2 className="font-bold text-3xl">123</h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body text-center">
            <p>Total User</p>
            <h2 className="font-bold text-3xl">123</h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body text-center">
            <p>Total User</p>
            <h2 className="font-bold text-3xl">123</h2>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="col-span-2">
        <img className="rounded-2xl" src={image} alt="" />
      </div>
    </div>
  );
};

export default TotalUsage;

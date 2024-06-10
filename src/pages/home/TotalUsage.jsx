import image from "../../assets/images/slider-4.jpg";

const TotalUsage = () => {
  return (
    <div>
      <div className="mb-10">
        <p className="text-center text-xl text-blue-500 font-bold mx-auto mb-3 uppercase">
          Total Usage
        </p>
        <h2 className="text-4xl font-bold text-center ">
          Monitoring Educational Engagement and Progress
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
        {/* left */}
        <div className=" flex gap-4 lg:flex-col items-center justify-evenly">
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
    </div>
  );
};

export default TotalUsage;

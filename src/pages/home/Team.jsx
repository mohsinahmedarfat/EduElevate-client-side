const Team = () => {
  return (
    <div>
      <div className="mb-10">
        <p className="text-center text-xl text-blue-500 font-bold mx-auto mb-3 uppercase">
          Team Member
        </p>
        <h2 className="text-4xl font-bold text-center ">Meet Our Instructor</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* 4 cards */}
        {/* card 1 */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full"
              src="https://i.ibb.co/hfTZd8H/instructor-1.jpg"
              alt="image"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-2xl font-semibold">Emily Davis</h2>
            <p>Senior Web Developer</p>
          </div>
        </div>
        {/* card 2 */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full"
              src="https://i.ibb.co/CKK7nnV/instructor-2.jpg"
              alt="image"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-2xl font-semibold">James Smith</h2>
            <p>Senior Graphic Designer</p>
          </div>
        </div>
        {/* card 3 */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full"
              src="https://i.ibb.co/Xt41BgG/instructor-3.jpg"
              alt="image"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-2xl font-semibold">Sophia Brown</h2>
            <p>SEO Expert</p>
          </div>
        </div>
        {/* card 4 */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full"
              src="https://i.ibb.co/pfTxstH/instructor-4.jpg"
              alt="image"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-2xl font-semibold">Daniel Johnson</h2>
            <p>Sales & Marketing Expert</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

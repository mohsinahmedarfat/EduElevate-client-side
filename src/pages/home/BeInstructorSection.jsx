const BeInstructorSection = () => {
  return (
    <div className="hero min-h-screen border border-red-400">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className=" rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default BeInstructorSection;

import { Link } from "react-router-dom";

const ClassCard = ({ classItem }) => {
  console.log(classItem);
  const { _id, title, image, description, price, teacher } = classItem;

  return (
    <div className="card max-w-2xl overflow-hidden bg-white rounded-lg shadow-md">
      <img className="object-cover w-full h-64" src={image} alt="Article" />

      <div className="card-body p-6">
        <div className="flex flex-col flex-auto">
          <span className=" font-medium text-blue-600 uppercase">${price}</span>
          <a
            href="#"
            className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform hover:text-gray-600 hover:underline"
            tabIndex="0"
            role="link"
          >
            {title}
          </a>
          <p className="mt-2 text-sm text-gray-600 grow">{description}</p>
        </div>

        <div className=" mt-4">
          <div className="flex items-center">
            <div className="flex gap-3 items-center">
              <img
                className="object-cover h-10 rounded-full"
                src={teacher?.image}
                alt="Avatar"
              />
              <div>
                <h4 className="font-semibold">{teacher?.name}</h4>
                <span className="text-xs text-gray-600">{teacher?.email}</span>
              </div>
            </div>
          </div>
          <Link to={`/classes/${_id}`}>
            <button className="w-full mt-5 bg-[#769FCD] hover:bg-[#B9D7EA] text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Enroll
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;

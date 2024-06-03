import samsung from "../../assets/images/Samsung.png";
import cisco from "../../assets/images/Cisco.png";
import att from "../../assets/images/AT&T.png";
import citi from "../../assets/images/citibank.png";
import pg from "../../assets/images/PG.png";

const Collaborators = () => {
  return (
    <div>
      <h1 className="text-xl text-center mb-10">
        Our collaboration with top global companies brings cutting-edge
        technology and innovative resources to EduManage, enhancing our platform
        and ensuring a seamless, enriching educational experience for all users.
      </h1>
      <div className="flex *:size-20 justify-evenly">
        <div>
          <img src={samsung} alt="" />
        </div>
        <div>
          <img src={cisco} alt="" />
        </div>
        <div>
          <img src={att} alt="" />
        </div>
        <div>
          <img src={citi} alt="" />
        </div>
        <div>
          <img src={pg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Collaborators;

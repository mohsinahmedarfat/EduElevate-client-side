import { SyncLoader } from "react-spinners";

const LoadingSpinner = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? "h-[250px]" : "h-screen"}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <SyncLoader size={10} color="#769FCD" />
    </div>
  );
};

export default LoadingSpinner;

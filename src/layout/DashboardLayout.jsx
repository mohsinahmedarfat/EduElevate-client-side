import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      {/* sidebar */}
      <p>sidebar</p>

      {/* outlet - dynamic content */}
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;

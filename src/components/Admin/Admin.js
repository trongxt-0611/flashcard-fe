import { Sidebar } from "./Sidebar";
import "./Admin.scss";
import { useState } from "react";
import { AdminHeader } from "./AdminHeader";
import { Outlet } from "react-router-dom";
const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <div className="admin-container">
        <div className="admin-sidebar">
          <Sidebar collapsed={collapsed} />
        </div>
        <div className="admin-content">
          <div className="admin-header">
            <AdminHeader
              collapsed={collapsed}
              setCollapsed={setCollapsed}
              // account={account}
              // isAuthenticated={isAuthenticated}
            />
          </div>
          <div className="admin-main">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;

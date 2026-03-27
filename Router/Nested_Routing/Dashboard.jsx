import { Outlet, Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      {/* NAVBAR */}
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="profile">Profile</Link>
        <Link to="settings">Settings</Link>
      </nav>

      <hr />

      {/* CHILD ROUTES RENDER HERE */}
      <Outlet />
    </div>
  );
}

export default Dashboard;
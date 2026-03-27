import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("role");
    navigate("/", { replace: true });
  };

  return (
    <div>
      <h1>Dashboard (Protected)</h1>

      <button onClick={() => navigate("/admin")}>
        Go to Admin
      </button>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
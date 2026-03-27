import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Dashboard</h1>

      <button onClick={() => navigate("/")}>
        Go Home
      </button>

      <button onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
}

export default Dashboard;
import { useNavigate } from "react-router-dom";
import api from "./api";

function Dashboard() {
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const res = await api.get("/users/2"); // ✅ working API
      console.log("Protected Data:", res.data);
    } catch (err) {
      console.log(err);
      alert("Error fetching data");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  return (
    <div>
      <h1>Dashboard (JWT Protected)</h1>

      <button onClick={getData}>
        Get Data
      </button>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
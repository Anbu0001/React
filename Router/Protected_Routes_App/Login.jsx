import { useNavigate } from "react-router-dom";
import api from "./api";

function Login() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post("/login", {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      });

      const token = res.data.token;

      console.log("Token:", token);

      localStorage.setItem("token", token);

      navigate("/dashboard", { replace: true });
    } catch (err) {
      console.log(err);
      alert("Login failed");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // fake login
    localStorage.setItem("isAuth", "true");
    localStorage.setItem("role", "admin"); // change to "user" to test

    navigate("/dashboard", { replace: true });
  };

  return (
    <div>
      <h1>Login Page</h1>

      <button onClick={handleLogin}>
        Login as Admin
      </button>
    </div>
  );
}

export default Login;
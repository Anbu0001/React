import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
     <h1 style={{ fontSize: "80px", color: "red" }}>404</h1>
      <h2 style={{ fontSize: "80px", color: "red" }}>Page Not Found</h2>

      <Link to="/">Go Home</Link>
    </div>
  );
}

export default NotFound;
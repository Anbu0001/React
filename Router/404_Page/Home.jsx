import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <Link to="/abc">Go to Wrong Page</Link>
      <br />
      <Link to="/dfhxfghfrgh">Go to Wrong Page</Link>
    </div>
  );
}

export default Home;
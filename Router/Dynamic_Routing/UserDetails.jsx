import { useParams, Link } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>User Details</h1>
      <h2>User ID: {id}</h2>

      <Link to="/users">Back to Users</Link>
    </div>
  );
}

export default UserDetails;
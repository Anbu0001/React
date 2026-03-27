import { Link } from "react-router-dom";

function Users() {
  const users = [
    { id: 1, name: "Anbu" },
    { id: 2, name: "Tamil" },
    { id: 3, name: "Ravi" }
  ];

  return (
    <div>
      <h1>Users List</h1>

      {users.map((user) => (
        <div key={user.id}>
          <Link to={`/users/${user.id}`}>
            {user.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Users;
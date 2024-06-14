import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  //   here we will fetch users from web
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.map((user: { name: string }) => user.name)))
      .catch((error) => setError("Error fetching users: " + error.message));
  }, []);

  return (
    <>
      <h1>Users</h1>
      {error && <p>{error}</p>}
      {users.length > 0 && <ul>{users.map((user) => <li key={user}>{user}</li>)}</ul>}
    </>
  );
};

export default Users;

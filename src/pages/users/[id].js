import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const UserDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/users/${id}`)
        .then((res) => res.json())
        .then((data) => setUser(data));
    }
  }, [id]);

  if (!user) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>User Details</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
          <p className="card-text">Role: {user.role}</p>
          <button className="btn btn-secondary" onClick={() => router.push("/users")}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;

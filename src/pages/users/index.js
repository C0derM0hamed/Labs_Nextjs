import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const UsersList = () => {
  const { data: session } = useSession();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        if (!session) {
          setUsers(data.slice(0, 3));
        } else {
          setUsers(data);
        }
      });
  }, [session]);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure?")) return;
    try {
      const res = await fetch(`/api/users/${id}`, { method: "DELETE" });
      if (res.ok) {
        setUsers(users.filter((user) => user._id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Users</h2>
      {session && (
        <Link href="/users/create" className="btn btn-primary mb-3">
          Create New User
        </Link>
      )}
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user._id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{user.name}</strong> - {user.email} ({user.role})
            </div>
            <div>
              <Link href={`/users/${user._id}`} className="btn btn-sm btn-info me-2">
                View
              </Link>
              {session && (
                <>
                  <Link href={`/users/edit/${user._id}`} className="btn btn-sm btn-warning me-2">
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
      {!session && <p className="mt-3 text-muted">Log in to see all users and manage them.</p>}
    </div>
  );
};

export default UsersList;

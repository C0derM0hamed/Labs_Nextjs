import React, { useEffect, useState } from "react";
import UserForm from "@/components/UserForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const EditUser = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { id } = router.query;
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/users/${id}`)
        .then((res) => res.json())
        .then((data) => setInitialData(data));
    }
  }, [id]);

  if (status === "loading" || !initialData) return <p className="container mt-4">Loading...</p>;
  if (!session) {
    router.push("/users");
    return null;
  }

  return <UserForm initialData={initialData} isEdit={true} />;
};

export default EditUser;

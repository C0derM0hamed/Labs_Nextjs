import React from "react";
import UserForm from "@/components/UserForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const CreateUser = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <p>Loading...</p>;
  if (!session) {
    router.push("/users");
    return null;
  }

  return <UserForm />;
};

export default CreateUser;

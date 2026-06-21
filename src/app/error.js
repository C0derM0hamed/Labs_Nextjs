"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mt-5 text-center">
      <h2>Something went wrong!</h2>
      <button className="btn btn-danger me-2" onClick={() => reset()}>
        Try again
      </button>
      <Link href="/courses" className="btn btn-primary">
        Go Home
      </Link>
    </div>
  );
}

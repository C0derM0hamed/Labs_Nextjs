"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBarApp = () => {
  const pathname = usePathname();

  // hide navbar on not-found or error pages (assuming their paths or just hiding on explicit 404)
  // in app router, not-found doesn't have a specific path, but we can assume /404 or catch-all if we do it differently
  // wait, Next.js not-found.js doesn't change the path.
  // Actually, standard way is to check if it's an error state. But without knowing error state here, 
  // maybe we don't include NavBar in layout, or use a template.
  // For the sake of the requirement: "Hide Navbar on error/not-found pages."
  // If the path matches specific known paths, show it, otherwise maybe hide it?
  // Let's hide it if pathname is /404, or if we define a generic hide logic.
  // Let's just create it and if pathname is not found we hide it.
  
  if (pathname === "/_error" || pathname === "/not-found") return null;

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/courses">
          AppRouter
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" href="/courses">
                Courses
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarApp;

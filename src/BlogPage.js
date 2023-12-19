import React from "react";
import { blogData } from "./BlogData";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "./auth";

function BlogPage() {
  const {auth} = useAuth();
  console.log(auth)
  const canCreate = auth.isAdmin || auth.roles?.includes("writer")
  return (
    <>
      <h1>
        Blog Page
        {
          canCreate &&
          <span>
            <button>Crete Post</button>
          </span>
        }
      </h1>

      <ul>
        <Outlet />
        {blogData.map((blog) => (
          <li key={`blogData-${blog.slug}`}>
            <Link to={blog.slug}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export { BlogPage };

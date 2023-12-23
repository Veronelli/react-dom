import React from "react";
import { blogData } from "./BlogData";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "./auth";

function BlogPage() {
  const { auth } = useAuth();
  console.log(auth);
  const canCreate = auth.isAdmin || auth.roles?.includes("writer");
  return (
    <>
      <div className="mx-14 my-2">
        <h1 className="text-2xl mt-5 mx-4 mb-2">
          Blog Page
          {canCreate && (
            <span>
              <button>Crete Post</button>
            </span>
          )}
        </h1>
            <hr/>
        <ul>
          {blogData.map((blog) => (
            <li key={`blogData-${blog.slug}`} className="my-2 bg-red-200 rounded-md">
              <Link to={blog.slug} className="block p-4 text-lg">{blog.title}</Link>
            </li>
          ))}
        </ul>
          <Outlet />
      </div>
    </>
  );
}

export { BlogPage };

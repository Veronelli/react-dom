import React from "react";
import { blogData } from "./BlogData";
import { Link } from "react-router-dom";

function BlogPage() {
  return (
    <>
      <h1>Blog Page</h1>

      <ul>
        {blogData.map((blog) => (
          <li key={`blogData-${blog.slug}`}>
            <Link to={blog.slug}>
            {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export { BlogPage };

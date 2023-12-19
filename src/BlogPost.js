import React, { useEffect } from "react";
import { blogData } from "./BlogData";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

function BlogPost() {
  const { slug } = useParams();
  const { auth } = useAuth();
  const postData = blogData.find((post) => post.slug === slug);
  const navigate = useNavigate();
  const roles = auth.roles;
  const canDelete =
    auth.user === postData.author ||
    auth.isAdmin ||
    roles?.includes("deleter");
  const canEdit = auth.user === postData.author || auth.isAdmin || roles?.includes("editor");
  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>{postData.title}</h1>
      <h3>{postData.content}</h3>
      {canDelete && <button>Delete</button>}
      {canEdit && <button>Edit</button>}
    </>
  );
}

export { BlogPost };

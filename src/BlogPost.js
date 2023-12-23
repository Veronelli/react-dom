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
    auth.user === postData.author || auth.isAdmin || roles?.includes("deleter");
  const canEdit =
    auth.user === postData.author || auth.isAdmin || roles?.includes("editor");
  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="w-full bg-blue-100 text-xl p-2 rounded-md"
      >
        Back
      </button>
      <hr className="my-4"/>
      <h1 className="text-2xl font-extrabold">
        TITLE: <span className="font-bold">{postData.title}</span>
      </h1>
      <h3 className="font-extrabold text-xl">DESCRIPTION: <span className="font-bold">{postData.content}</span></h3>
      {canDelete && <button>Delete</button>}
      {canEdit && <button>Edit</button>}
    </>
  );
}

export { BlogPost };

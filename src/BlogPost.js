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
      {canDelete && <button className="bg-red-200 text-red-900 text-lg py-1 font-semibold rounded-md mt-4 mb-2">Delete</button>}
      {canEdit && <button className="bg-blue-200 text-blue-900 text-lg py-1 font-semibold rounded-md">Edit</button>}
    </>
  );
}

export { BlogPost };

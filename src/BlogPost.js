import React, { useEffect } from "react";
import { blogData } from "./BlogData";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { slug } = useParams();
  const postData = blogData.find((post) => post.slug === slug);

  return (
    <>
      <h1>{postData.title}</h1>
      <h3>{postData.content}</h3>
    </>
  );
}

export { BlogPost };

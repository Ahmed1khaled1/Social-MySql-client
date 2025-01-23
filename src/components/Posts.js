import React, { useState } from "react";
import Post from "./Post";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../axios";

function Posts({ userId }) {
  const [openComments, setOpenComments] = useState(null);

const handleToggleComments = (postId) => {
  setOpenComments(openComments === postId ? null : postId);
};
  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      makeRequest.get("/posts?userId="+userId).then((res) => {
        return res.data;
      }),
  });

  return (
    <div className="posts">
      {error
        ? `Something went wrong` // Adjusted error handling
        : isLoading
        ? "Loading..."
        : data.map((post) => (
            <Post
              post={post}
              key={post.id}
              isCommentsOpen={openComments === post.id}
              onToggleComments={() => handleToggleComments(post.id)}
            />
          ))}
    </div>
  );
}

export default Posts;

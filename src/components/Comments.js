import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../axios";
import moment from "moment";

function Comments({ postId }) {
  const [desc, setDesc] = useState("");

  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery({
    queryKey: ["comments"],
    queryFn: () =>
      makeRequest.get("/comments?postId=" + postId).then((res) => {
        return res.data;
      }),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newComment) => {
      return makeRequest.post("/comments", newComment);
    },
  });

  queryClient.invalidateQueries({ queryKey: ["comments"] });

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ desc, postId });
    setDesc("");
  };

  return (
    <div className="mx-5">
      <div className="flex items-center justify-between mt-5">
        <img
          src={currentUser.profilePic}
          alt=""
          className="w-10 h-10 rounded-full"
        />
        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Write a comment "
          className="flex-1 px-2 py-1 focus:outline-none cursor-pointer rounded-lg mx-2 bg-grey-100 dark:bg-grey-700 p-1"
        />
        <button
          onClick={handleClick}
          className="px-2 py-1 bg-blue-500 rounded-md text-white font-medium"
        >
          Send
        </button>
      </div>
      { isLoading
        ? "Loading..."
        : data.map((comment) => (
            <div className="flex items-start gap-2 mt-5 ">
              <img
                src={comment.profilePic}
                alt=""
                className="w-10 h-10 object-cover rounded-full"
              />
              <div className="flex-1 bg-grey-100 dark:bg-grey-700 p-1 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{comment.name}</span>
                  <span className="text-grey-400">
                    {moment(comment.createdAt).fromNow()}
                  </span>
                </div>
                <p>{comment.desc}</p>
              </div>
            </div>
          ))}
    </div>
  );
}

export default Comments;

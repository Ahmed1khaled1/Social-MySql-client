import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { Link } from "react-router-dom";
import Comments from "./Comments";
import moment from "moment";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../axios";

function Post({ post, isCommentsOpen, onToggleComments }) {
  const { currentUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const { isLoading, error, data } = useQuery({
    queryKey: ["likes", post.id],
    queryFn: () =>
      makeRequest.get("/likes?postId=" + post.id).then((res) => {
        return res.data;
      }),
  });

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (liked) => {
      if (liked) return makeRequest.delete(`/likes?postId=${post.id}`);
      return makeRequest.post("/likes", { postId: post.id });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["likes"] });
    },
  });
  const handleLike = () => {
    mutation.mutate(data.includes(currentUser.id));
  };

  const handleDelete = async () => {
    try {
      await makeRequest.delete(`/posts/${post.id}`);
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  };

  return (
    <div className="md:mx-20 my-1 bg-white dark:bg-grey-800 md:rounded-lg py-5 dark:text-grey-100">
      <div className="relative flex items-center justify-between mx-5">
        <div className="flex items-center gap-2">
          <img
            src={post.profilePic}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
          <Link to={`/profile/${post.userId}`}>
            <div className="flex flex-col ">
              <span className="font-bold">{post.name} </span>
              <span className="text-sm text-grey-500">
                {moment(post.createdAt).fromNow()}
              </span>
            </div>
          </Link>
        </div>
        <MoreHorizIcon
          className="cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        {menuOpen && post.userId === currentUser.id && (
          <button
            onClick={handleDelete}
            className="absolute top-8 right-0 font-semibold bg-red-500 px-3 py-1 rounded-lg"
          >
            Delete
          </button>
        )}
      </div>
      <div>
        <p className="m-5">{post.desc} </p>
        <img src={post.img} alt="" className="w-full" />
      </div>
      <div className="flex mx-5 mt-5 gap-8">
        <div className="flex items-center gap-1 cursor-pointer font-medium">
          {error ? (
            "something is wrong"
          ) : isLoading ? (
            "Loading..."
          ) : data.includes(currentUser.id) ? (
            <FavoriteOutlinedIcon
              onClick={handleLike}
              className="text-red-600"
            />
          ) : (
            <FavoriteBorderOutlinedIcon onClick={handleLike} />
          )}
          <span>{data?.length} likes</span>
        </div>
        <div
          onClick={onToggleComments}
          className="flex items-center gap-1 cursor-pointer font-medium"
        >
          <TextsmsOutlinedIcon />
          <span>comments</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer font-medium">
          <ShareOutlinedIcon />
          <span>share</span>
        </div>
      </div>
      {isCommentsOpen && <Comments postId={post.id} />}
    </div>
  );
}

export default Post;

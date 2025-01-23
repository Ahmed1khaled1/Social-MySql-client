import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/authContext';
import Friend from "../assets/friend.png"
import Image from "../assets/img.png";
import Map from "../assets/map.png";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from '../axios';
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

function Share() {
  const [file,setFile]=useState(null)
  const [desc,setDesc]=useState("")

const { currentUser } = useContext(AuthContext);

const queryClient = useQueryClient();

const mutation = useMutation({
  mutationFn: (newPost) => {
    return makeRequest.post("/posts", newPost);
  },
});

queryClient.invalidateQueries({ queryKey: ["posts"] });

const upload = async () => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const res = await makeRequest.post("/upload", formData);
    return res.data.fileUrl;
  } catch (err) {
    console.log(err);
  }
};

const handleClick = async (e) => {
  e.preventDefault();
  let imgUrl = "";
  if (file) {
    imgUrl = await upload();
    console.log("Uploaded image URL:", imgUrl);
  }
  mutation.mutate({ desc, img: imgUrl });
  setDesc("");
  setFile(null);
};


  return (
    <div className="md:mx-20 my-1 md:rounded-lg bg-white dark:bg-grey-800 dark:text-grey-200">
      <div className="flex gap-3 mx-4 my-2 pt-4">
        <img
          src={currentUser.profilePic}
          alt=""
          className=" w-12 h-12 object-cover rounded-full cursor-pointer mr-2 "
        />

        <input
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
          placeholder={"What's in your mind " + currentUser.name + "?"}
          className="flex-1 outline-none w-full  cursor-pointer px-2 bg-white dark:bg-grey-800"
        />
      </div>
      {file && (
        <div className="relative mt-3">
          <img src={URL.createObjectURL(file)} alt="" className="w-full" />
          <ClearOutlinedIcon
            className="cursor-pointer text-grey-400 text-4xl absolute top-1 right-1"
            onClick={() => setFile(null)}
          />
        </div>
      )}
      <hr className="mx-4 border-grey-600" />
      <div className="flex items-center justify-between p-5">
        <div className="flex items-center gap-4 justify-between">
          <input
            type="file"
            id="file"
            className="hidden"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label htmlFor="file">
            <div className="flex items-center gap-2 cursor-pointer text-xs lg:text-base ">
              <img src={Image} alt="" className="w-8" />
              <span>Add Image</span>
            </div>
          </label>
          <div className="flex items-center gap-2 cursor-pointer text-xs lg:text-base ">
            <img src={Map} alt="" className="w-8" />
            <span>Add Place</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer  text-xs lg:text-base  ">
            <img src={Friend} alt="" className="w-8" />
            <span>Tag Friends</span>
          </div>
        </div>
        <div className="right">
          <button
            onClick={handleClick}
            className="px-2 py-1 bg-blue-600 rounded-md text-white"
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default Share
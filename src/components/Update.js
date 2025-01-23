import React, { useState } from "react";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { makeRequest } from "../axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function Update({ setOpenUpdate, user }) {
  const [cover, setCover] = useState(null);
  const [profile, setProfile] = useState(null);
  const [texts, setTexts] = useState({
    email: user.email,
    password: user.password,
    name: user.name,
    city: user.city,
    website: user.website,
  });

  const upload = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      console.log("Upload response: ", res.data);
      return res.data.fileUrl;
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setTexts((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (user) => {
      return makeRequest.put("/users", user);
    },
  });
  queryClient.invalidateQueries({ queryKey: ["user"] });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let coverUrl = user.coverPic;
    let profileUrl = user.profilePic;
    if (cover) {
      coverUrl = await upload(cover);
    }
    if (profile) {
      profileUrl = await upload(profile);
    }
    mutation.mutate(
      { ...texts, coverPic: coverUrl, profilePic: profileUrl },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["user"] });
        },
      }
    );
    setOpenUpdate(false);
    setCover(null);
    setProfile(null);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 m-auto w-full h-full md:h-[60%] md:w-[60%] overflow-y-scroll bg-white dark:bg-grey-800 dark:text-white z-50 rounded-lg shadow-2xl p-5">
      <ClearOutlinedIcon
        onClick={() => setOpenUpdate(false)}
        className="cursor-pointer absolute right-2 top-3"
      />
      <div className="text-xl font-bold text-center">Update Your Profile</div>
      <form className="flex flex-col p-5 gap-5">
        <input
          className="hidden"
          type="file"
          id="cover"
          onChange={(e) => setCover(e.target.files[0])}
        />
        <label
          className="border-2 border-grey-400 rounded-lg  p-3 cursor-pointer"
          htmlFor="cover"
        >
          <div className=" cursor-pointer">
            <div className="text-center font-semibold">Cover Picture</div>
            <img
              src={
                cover ? URL.createObjectURL(cover) : "/upload/" + user.coverPic
              }
              alt=""
              className="max-h-[300px] mx-auto object-cover"
            />
          </div>
        </label>

        <input
          className="hidden"
          type="file"
          id="profile"
          onChange={(e) => setProfile(e.target.files[0])}
        />
        <label
          className="border-2 border-grey-400 rounded-lg  p-3 cursor-pointer"
          htmlFor="profile"
        >
          <div className=" cursor-pointer">
            <div className="text-center font-semibold">Profile Picture</div>
            <img
              src={
                profile
                  ? URL.createObjectURL(profile)
                  : "/upload/" + user.profilePic
              }
              alt=""
              className="max-h-[300px] mx-auto object-cover"
            />
          </div>
        </label>

        <input
          type="text"
          placeholder="Name"
          className="rounded-lg py-1 px-3 bg-white dark:bg-grey-800 border-2 border-grey-400 cursor-pointer"
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="City"
          className="rounded-lg py-1 px-3 bg-white dark:bg-grey-800 border-2 border-grey-400 cursor-pointer"
          name="city"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Website"
          className="rounded-lg py-1 px-3 bg-white dark:bg-grey-800 border-2 border-grey-400 cursor-pointer"
          name="website"
          onChange={handleChange}
        />
        <button
          className="px-2 py-1 bg-blue-600 rounded-md text-white font-semibold"
          onClick={handleSubmit}
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default Update;

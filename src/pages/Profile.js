import React, { useContext, useState } from "react";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AuthContext } from "../context/authContext";
import Posts from "../components/Posts";
import { useLocation } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../axios";
import Update from "../components/Update";

function Profile() {
  const { currentUser } = useContext(AuthContext);
  const [openUpdate, setOpenUpdate] = useState(false);
  const userId = parseInt(useLocation().pathname.split("/")[2]);

  const { isLoading, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      makeRequest.get("/users/find/" + userId).then((res) => {
        return res.data;
      }),
    staleTime: 0, // Ensure it refetches immediately after mutation
  });

  const { isLoading: rIsloading, data: relationshipData } = useQuery({
    queryKey: ["relationship"],
    queryFn: () =>
      makeRequest.get("/relationships?followedUserId=" + userId).then((res) => {
        return res.data;
      }),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (following) => {
      if (following)
        return makeRequest.delete("/relationships?userId=" + userId);
      return makeRequest.post("/relationships", { userId });
    },
  });

  queryClient.invalidateQueries({ queryKey: ["relationship"] });

  const handleFollow = () => {
    mutation.mutate(relationshipData.includes(currentUser.id));
  };

  return (
    <div>
      {error? "Somthing Went Wrong":isLoading ? (
        "loading"
      ) : (
        <>
          <div className="relative dark:text-grey-100 bg-white dark:bg-grey-800 md:rounded-xl">
            <div>
              <img
                src={data.coverPic}
                alt=""
                className="relative w-full h-[200px] md:h-[300px] object-cover "
              />
              <img
                src={data.profilePic}
                className="absolute w-40 h-40 rounded-full object-cover -mt-32 ml-3 border-4 dark:border-grey-800 border-white "
                alt=""
              />
            </div>
            <div className="pt-8 pb-5 px-5 md:rounded-xl shadow-lg">
              <div className="flex-1  flex-col text-center items-center gap-10">
                <div className="flex justify-between items-center">
                  <div className="font-bold text-2xl">{data.name}</div>
                  {userId === currentUser.id ? (
                    <button
                      onClick={() => setOpenUpdate(true)}
                      className="px-2 py-1 bg-blue-600 rounded-md text-white font-semibold"
                    >
                      update
                    </button>
                  ) : (
                    <button
                      onClick={handleFollow}
                      className="font-semibold px-2 py-1 bg-blue-600 rounded-md text-white"
                    >
                      {rIsloading
                        ? "loading..."
                        : relationshipData.includes(currentUser.id)
                        ? "Following"
                        : "Follow"}
                    </button>
                  )}
                </div>
                <div className="flex gap-2 flex-col md:flex-row md:gap-5 my-3">
                  <div className="flex gap-2 ">
                    <PlaceIcon />
                    <span> {data.city}</span>
                  </div>
                  <div className="flex gap-2">
                    <LanguageIcon />
                    <span> {data.website}</span>
                  </div>
                </div>
              </div>
              <div className=" flex items-center gap-3">
                <a href="http://facebook.com">
                  <FacebookTwoToneIcon fontSize="large" />
                </a>
                <a href="http://instagram.com">
                  <InstagramIcon fontSize="large" />
                </a>
                <a href="http://facebook.com">
                  <TwitterIcon fontSize="large" />
                </a>
                <a href="http://facebook.com">
                  <LinkedInIcon fontSize="large" />
                </a>
                <a href="http://facebook.com">
                  <PinterestIcon fontSize="large" />
                </a>
                <div className="flex-1 flex justify-end gap-5">
                  <EmailOutlinedIcon />
                  <MoreVertIcon />
                </div>
              </div>
            </div>
          </div>
          <Posts userId={userId} />
        </>
      )}
      {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data} />}{" "}
    </div>
  );
}

export default Profile;

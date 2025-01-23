import Friends from "../assets/1.png";
import Groups from "../assets/2.png";
import Market from "../assets/3.png";
import Watch from "../assets/4.png";
import Memories from "../assets/5.png";
import Events from "../assets/6.png";
import Gaming from "../assets/7.png";
import Gallery from "../assets/6.png";
import Videos from "../assets/9.png";
import Messages from "../assets/10.png";
import Tutorials from "../assets/11.png";
import Courses from "../assets/12.png";
import Fund from "../assets/13.png";
import { useContext } from "react";
import { AuthContext } from "../context/authContext.js";

function LeftBar() {
const { currentUser } = useContext(AuthContext);

  return (
    <div
      className="flex-[2] h-[calc(100vh-50px)] top-[50px] sticky mr-
    overflow-y-scroll scrollbar-none dark:bg-grey-800 dark:text-white"
    >
      <div className=" flex flex-col gap-3 p-5 font-medium text-sm">
        <div className="flex items-center gap-2 ">
          <img
            className="w-8 h-8 rounded-full object-cover"
            src={currentUser.profilePic}
            alt=""
          />
          <span>{currentUser.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <img src={Friends} alt="" className="w-6 h-6 object-cover" />
          <span>Friends</span>
        </div>
        <div className="flex items-center gap-2">
          <img src={Groups} alt="" className="w-6 h-6 object-cover" />
          <span>Groups</span>
        </div>
        <div className="flex items-center gap-2">
          <img src={Market} alt="" className="w-6 h-6 object-cover" />
          <span>Marketplace</span>
        </div>
        <div className="flex items-center gap-2">
          <img src={Watch} alt="" className="w-6 h-6 object-cover" />
          <span>Watch</span>
        </div>
        <div className="flex items-center gap-2">
          <img src={Memories} alt="" className="w-6 h-6 object-cover" />
          <span>Memories</span>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-3 p-5 font-medium">
        <span>Your shortcuts</span>
        <div className="flex items-center gap-2">
          <img src={Events} alt="" className="w-6 h-6 object-cover" />
          <span>Events</span>
        </div>
        <div className="flex items-center gap-2">
          <img src={Gaming} alt="" className="w-6 h-6 object-cover" />
          <span>Gaming</span>
        </div>
        <div className="flex items-center gap-2">
          <img src={Gallery} alt="" className="w-6 h-6 object-cover" />
          <span>Gallery</span>
        </div>
        <div className="flex items-center gap-2">
          <img src={Videos} alt="" className="w-6 h-6 object-cover" />
          <span>Videos</span>
        </div>
        <div className="flex items-center gap-2">
          <img src={Messages} alt="" className="w-6 h-6 object-cover" />
          <span>Messages</span>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-3 p-5 font-medium">
        <span>Others</span>
        <div className="flex items-center gap-2">
          <img src={Fund} alt="" className="w-6 h-6 object-cover" />
          <span>Fundraiser</span>
        </div>
        <div className="flex items-center gap-2">
          <img src={Tutorials} alt="" className="w-6 h-6 object-cover" />
          <span>Tutorials</span>
        </div>
        <div className="flex items-center gap-2">
          <img src={Courses} alt="" className="w-6 h-6 object-cover" />
          <span>Courses</span>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;

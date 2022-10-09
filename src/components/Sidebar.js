import Logo from "../assets/logo.png";
import { useState } from "react";
import TweetModal from "./TweetModal.js";
import ProfileRef from "./ProfileRef.js";

const Sidebar = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="sidebar-container">
            <img src={Logo} alt="" />
            <p id="home">Home</p>
            <p>Explore</p>
            <p>Notifications</p>
            <p>Messages</p>
            <p>Bookmarks</p>
            <p>Lists</p>
            <p>Profile</p>
            <p>More</p>
            <button onClick={() => setShow(true)}>Tweet</button>
            {show ? (
                <TweetModal
                    profileName={"name"}
                    profileUserName={"@name"}
                    setShow={setShow}
                />
            ) : null}
            <ProfileRef profileName={"name"} profileUserName={"@name"} />
        </div>
    );
};

export default Sidebar;

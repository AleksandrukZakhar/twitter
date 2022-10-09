import Logo from "../assets/logo.png";
import { useState } from "react";
import TweetModal from "./TweetModal.js";
import ProfileRef from "./ProfileRef.js";

const Sidebar = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="sidebar-container">
            <img className="logo" src={Logo} alt="" />
            <p id="home">Home</p>
            <p>Explore</p>
            <p>Notifications</p>
            <p>Messages</p>
            <p>Bookmarks</p>
            <p>Lists</p>
            <p>Profile</p>
            <p>More</p>
            <button onClick={() => setShow(true)}>Tweet</button>
            {show ? <TweetModal setShow={setShow} /> : null}
            <ProfileRef />
        </div>
    );
};

export default Sidebar;

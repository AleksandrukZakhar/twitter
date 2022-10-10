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
            <button className="tweet" onClick={() => setShow(true)}>
                Tweet
            </button>
            {show ? <TweetModal setShow={setShow} /> : null}
            <ProfileRef />
        </div>
    );
};

export default Sidebar;

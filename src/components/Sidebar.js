import Logo from "../assets/logo.png";
import ProfileRef from "./ProfileRef.js";

const Sidebar = () => {
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
            <button>Tweet</button>
            <ProfileRef profileName={"name"} profileUserName={"@name"} />
        </div>
    );
};

export default Sidebar;

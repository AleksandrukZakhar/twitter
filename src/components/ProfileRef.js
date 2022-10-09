import { useContext } from "react";
import { appContext } from "./App.js";
import User from "../assets/user.png";

const ProfileRef = () => {
    const { user } = useContext(appContext);

    return (
        <div className="profile-ref-container">
            <img
                className="profile-img"
                src={user.photoURL ? user.photoURL : User}
                alt=""
            />
            <div>
                <p>{user.displayName}</p>
                <p>@{user.displayName}</p>
            </div>
        </div>
    );
};

export default ProfileRef;

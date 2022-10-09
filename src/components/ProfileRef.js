import User from "../assets/user.png";

const ProfileRef = ({ profileName, profileUserName }) => {
    return (
        <div className="profile-ref-container">
            <img src={User} alt="" />
            <div>
                <p>{profileName}</p>
                <p>{profileUserName}</p>
            </div>
        </div>
    );
};

export default ProfileRef;

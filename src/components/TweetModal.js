import User from "../assets/user.png";
import { useState, useContext } from "react";
import { appContext } from "./App.js";
import { collection, addDoc } from "firebase/firestore";
import { uid } from "uid";

const TweetModal = ({ setShow }) => {
    const [post, setPost] = useState(null);
    const { db, user } = useContext(appContext);
    const postRef = collection(db, "posts");

    return (
        <div className="modal-container">
            <div className="modal">
                <div>
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
                <textarea
                    placeholder="What's happening?"
                    onChange={(e) => setPost(e.target.value)}
                ></textarea>
                <button
                    onClick={async () => {
                        addDoc(postRef, {
                            id: uid(),
                            profileName: user.displayName,
                            profileUserName: `@${user.displayName}`,
                            img: user.photoURL,
                            liked: [],
                            text: post,
                        });
                        setShow(false);
                    }}
                    disabled={post ? false : true}
                >
                    Tweet
                </button>
            </div>
        </div>
    );
};

export default TweetModal;

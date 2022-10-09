import User from "../assets/user.png";
import { useState, useContext } from "react";
import { appContext } from "./App.js";
import { collection, addDoc } from "firebase/firestore";
import { uid } from "uid";

const TweetModal = ({ profileName, profileUserName, setShow }) => {
    const [post, setPost] = useState(null);
    const { db } = useContext(appContext);
    const postRef = collection(db, "posts");

    return (
        <div className="modal-container">
            <div className="modal">
                <div>
                    <img src={User} alt="" />
                    <p>{profileName}</p>
                    <p>{profileUserName}</p>
                </div>
                <textarea
                    placeholder="What's happening?"
                    onChange={(e) => setPost(e.target.value)}
                ></textarea>
                <button
                    onClick={async () => {
                        addDoc(postRef, {
                            id: uid(),
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

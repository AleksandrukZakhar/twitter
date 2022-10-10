import User from "../assets/user.png";
import { useState, useContext } from "react";
import { appContext } from "./App.js";
import { doc, updateDoc } from "firebase/firestore";
import { uid } from "uid";

const CommentModal = ({ setShow, post }) => {
    const [comment, setComment] = useState(null);
    const { db, user } = useContext(appContext);
    const {
        profileName,
        profileUserName,
        img,
        text,
        id,
        liked,
        likeCount,
        comments,
        commentsCount,
    } = post;
    const postRef = doc(db, `posts/${id}`);

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
                    placeholder="Tweet your reply"
                    onChange={(e) => setComment(e.target.value)}
                ></textarea>
                <button
                    onClick={() => {
                        updateDoc(postRef, {
                            id,
                            profileName,
                            profileUserName,
                            img,
                            liked,
                            likeCount,
                            comments: [
                                ...comments,
                                {
                                    comment,
                                    likes: [],
                                    commentLikes: 0,
                                    id: uid(),
                                },
                            ],
                            commentsCount: commentsCount + 1,
                            text,
                        });
                        setShow(false);
                    }}
                    disabled={comment ? false : true}
                >
                    Reply
                </button>
            </div>
        </div>
    );
};

export default CommentModal;

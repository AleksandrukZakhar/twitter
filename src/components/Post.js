import User from "../assets/user.png";
import { useContext } from "react";
import { appContext } from "./App.js";
import { doc, updateDoc } from "firebase/firestore";
import Heart from "../assets/heart.svg";
import RedHeart from "../assets/red-heart.svg";

const Post = ({
    img,
    profileName,
    profileUserName,
    text,
    postId,
    liked,
    likeCount,
    id,
}) => {
    const { db } = useContext(appContext);
    const postRef = doc(db, `posts/${postId}`);
    const find = liked.find((x) => x === id);

    return (
        <div className="post-container">
            <img className="profile-img" src={img ? img : User} alt="" />
            <div className="post-content-container">
                <div className="profile-container">
                    <p>{profileName}</p>
                    <p>{profileUserName}</p>
                </div>
                <p>{text}</p>
                <div className="toolbar">
                    {find ? (
                        <img
                            src={RedHeart}
                            alt=""
                            onClick={() => {
                                const filtered = liked.filter((x) => x !== id);

                                updateDoc(postRef, {
                                    id: postId,
                                    profileName,
                                    profileUserName,
                                    img,
                                    liked: filtered,
                                    likeCount: likeCount - 1,
                                    text: text,
                                });
                            }}
                        />
                    ) : (
                        <img
                            src={Heart}
                            alt=""
                            onClick={() => {
                                updateDoc(postRef, {
                                    id: postId,
                                    profileName,
                                    profileUserName,
                                    img,
                                    liked: [...liked, id],
                                    likeCount: likeCount + 1,
                                    text: text,
                                });
                            }}
                        />
                    )}
                    {<p>{likeCount > 0 ? likeCount : null}</p>}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        width="20px"
                        height="20px"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Post;

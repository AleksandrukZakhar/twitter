import User from "../assets/user.png";
import { useContext } from "react";
import { appContext } from "./App.js";
import { doc, updateDoc } from "firebase/firestore";
import Heart from "../assets/heart.svg";
import RedHeart from "../assets/red-heart.svg";

const Comment = ({ post, index }) => {
    const { db, user } = useContext(appContext);
    const {
        profileName,
        profileUserName,
        img,
        id,
        liked,
        likeCount,
        text,
        comments,
        commentsCount,
    } = post;
    const postRef = doc(db, `posts/${id}`);
    const find = comments[index].likes.find((x) => x === user.uid);

    return (
        <div className="post-container">
            <img className="profile-img" src={img ? img : User} alt="" />
            <div className="post-content-container">
                <div className="profile-container">
                    <p>{profileName}</p>
                    <p>{profileUserName}</p>
                </div>
                <p>{comments[index].comment}</p>
                <div className="toolbar">
                    {find ? (
                        <img
                            src={RedHeart}
                            alt=""
                            onClick={() => {
                                const commentsLikes = comments[index].likes;
                                const newCommentsLikes = commentsLikes.filter(
                                    (x) => x.id !== user.uid
                                );

                                const comment = {
                                    comment: comments[index].comment,
                                    commentLikes:
                                        comments[index].commentLikes - 1,
                                    id: comments[index].id,
                                    likes: [...newCommentsLikes],
                                };
                                const filtered = comments.filter(
                                    (x) => x.id !== comment.id
                                );

                                updateDoc(postRef, {
                                    id,
                                    profileName,
                                    profileUserName,
                                    img,
                                    liked,
                                    likeCount,
                                    comments: [...filtered, comment],
                                    commentsCount,
                                    text,
                                });
                            }}
                        />
                    ) : (
                        <img
                            src={Heart}
                            alt=""
                            onClick={() => {
                                const comment = {
                                    comment: comments[index].comment,
                                    commentLikes:
                                        comments[index].commentLikes + 1,
                                    id: comments[index].id,
                                    likes: [...comments[index].likes, user.uid],
                                };
                                const filtered = comments.filter(
                                    (x) => x.id !== comment.id
                                );

                                updateDoc(postRef, {
                                    id,
                                    profileName,
                                    profileUserName,
                                    img,
                                    liked,
                                    likeCount,
                                    comments: [...filtered, comment],
                                    commentsCount,
                                    text,
                                });
                            }}
                        />
                    )}
                    {
                        <p>
                            {comments[index].commentLikes > 0
                                ? comments[index].commentLikes
                                : null}
                        </p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Comment;

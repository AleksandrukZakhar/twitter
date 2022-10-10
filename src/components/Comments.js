import Comment from "./Comment.js";
import { uid } from "uid";

const Comments = ({ setShowComments, post }) => {
    return (
        <div className="modal-container">
            <div className="comments-container">
                <div className="cross-container">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        width="40px"
                        height="40px"
                        className="cross"
                        onClick={() => setShowComments(false)}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>
                {post?.comments?.map((x, index) => {
                    return <Comment post={post} index={index} key={uid()} />;
                })}
            </div>
        </div>
    );
};

export default Comments;

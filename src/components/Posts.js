import { useCollectionData } from "react-firebase-hooks/firestore";
import { useContext } from "react";
import { appContext } from "./App.js";
import { collection } from "firebase/firestore";
import Post from "./Post.js";
import { uid } from "uid";

const Posts = () => {
    const { db } = useContext(appContext);
    const [data] = useCollectionData(collection(db, "posts"));

    return (
        <div className="posts-container">
            {data?.map((post) => {
                const { text } = post;

                return <Post text={text} key={uid()} />;
            })}
        </div>
    );
};

export default Posts;

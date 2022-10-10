import { useCollectionData } from "react-firebase-hooks/firestore";
import { useContext } from "react";
import { appContext } from "./App.js";
import { collection } from "firebase/firestore";
import Loading from "../assets/loading.gif";
import Post from "./Post.js";
import { uid } from "uid";

const Posts = () => {
    const { db } = useContext(appContext);
    const [data, loading] = useCollectionData(collection(db, "posts"));

    return (
        <div className="posts-container">
            {loading ? (
                <img className="loading" src={Loading} alt="" />
            ) : (
                data?.map((post) => {
                    return <Post post={post} key={uid()} />;
                })
            )}
        </div>
    );
};

export default Posts;

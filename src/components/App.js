import { createContext } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import Sidebar from "./Sidebar.js";
import Posts from "./Posts.js";

export const appContext = createContext();
const app = initializeApp({
    apiKey: "AIzaSyA7B8MBx761fJzU8A3x1CCKmR1MEa9I0Rc",
    authDomain: "twitter-95306.firebaseapp.com",
    projectId: "twitter-95306",
    storageBucket: "twitter-95306.appspot.com",
    messagingSenderId: "410132114615",
    appId: "1:410132114615:web:3c2900afa1c20bc2db3132",
    measurementId: "G-07KNY8DCEL",
});
const db = getFirestore(app);
const auth = getAuth(app);

const App = () => {
    return (
        <appContext.Provider value={{ db, auth }}>
            <div className="app">
                <Sidebar />
                <Posts />
            </div>
        </appContext.Provider>
    );
};

export default App;

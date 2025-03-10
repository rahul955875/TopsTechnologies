import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const Home = () => {
  const [getUser, setGetUser] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const user = auth.currentUser;
      console.log(user?.uid);

      if (user) {
        const userRef = await getDoc(doc(db, "registeredUser",user.uid ));
        if(userRef.exists()){
            setGetUser(userRef.data())
            console.log(userRef.data())
        }
      }
    };
    fetchData();
  },[]);
  return (
    <div className="container shadow mt-5 p-5 text-center ">
      <h2 className="mt  fs-1">Home {getUser?.name}</h2>
      <button className="btn btn-danger mt-3">Logout</button>
    </div>
  );
};

export default Home;

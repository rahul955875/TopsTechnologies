import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const Home = () => {
  const [getUser, setGetUser] = useState(null);
  useEffect(() => {
    const fetchData = onAuthStateChanged(auth, async(user)=>{
      if(user){
        try {
          const userRef = await getDoc(doc(db,'registeredUser',user.uid))
          setGetUser(userRef.data())
        } catch (error) {
          console.log('error fetching data',error)
        }
      }else{
        setGetUser(null)
      }
    })
    return fetchData
  }, []);
  return (
    <div className="container shadow mt-5 p-5 text-center ">
      <h2 className="mt  fs-1">Home {getUser?.name}</h2>
      <button className="btn btn-danger mt-3">Logout</button>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import ShowTodos from "./ShowTodos";

const GetTodos = () => {
  const [getTodos, setGetTodos] = useState([]);

  useEffect(() => {
    const qry = query(collection(db, "myTodos"));
    const unsubscribe = onSnapshot(qry, (snapshot) => {
      const fetchTods = snapshot.docs.map((snapDoc) => ({
        ...snapDoc.data(),
        id: snapDoc.id,
      }));
      setGetTodos(fetchTods)
    });
    return () => unsubscribe();
  }, []);

  return <>
  {getTodos.map(item=>(
    <ShowTodos todo={item} />
  ))}
  </>;
};

export default GetTodos;

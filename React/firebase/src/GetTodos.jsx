import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import ShowTodos from "./ShowTodos";

const GetTodos = () => {
  const [getTodos, setGetTodos] = useState([]);

  useEffect(() => {
    const qry = query(collection(db, "myTodos"));
    const unsubscribe = onSnapshot(qry, (snapshot) => {
      setGetTodos(
        snapshot.docs.map((snapDoc) => ({
          ...snapDoc.data(),
          id: snapDoc.id,
        }))
      );
    });
    return unsubscribe;
  }, []);

  const deleteTodos = async (todosId) => {
    if (confirm("You really want to delete this todo?")) {
      try {
        await deleteDoc(doc(db, "myTodos", todosId));
      } catch (e) {
        alert("Error in delting todo", e);
      }
    }
  };
  const updateTodos = async (todo, todosId) => {
    try {
      await updateDoc(doc(db, "myTodos", todosId), {
        title: todo.title,
      });
    } catch (error) {
      console.log("Error in updating todo", error);
    }
  };
  const todoCompleted = async (todo) => {
    try {
      if (todo.completed) {
        await updateDoc(doc(db, "myTodos", todo.id), {
          completed: false,
        });
      }
      else if(confirm("Do you really completed the task?")) {
        await updateDoc(doc(db, "myTodos", todo.id), {
          completed: true,
        });
      }
    } catch (error) {
      console.log("Error in updating task", error);
    }
  };

  return (
    <>
      {getTodos.map((item) => (
        <ShowTodos
          key={item.id}
          todo={item}
          deleteTodos={deleteTodos}
          updateTodos={updateTodos}
          todoCompleted={todoCompleted}
        />
      ))}
    </>
  );
};

export default GetTodos;

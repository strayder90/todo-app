import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "todo-app-109fc.firebaseapp.com",
  projectId: "todo-app-109fc",
  storageBucket: "todo-app-109fc.appspot.com",
  messagingSenderId: "451482936577",
  appId: "1:451482936577:web:d6d1e56c710f72a8592700",
};

initializeApp(firebaseConfig);

const db = getFirestore();
export const collectionReference = collection(db, "todos");
const todosData = await getDocs(collectionReference);

export const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let todos = [];

        todosData.docs.map((doc) => {
          todos.push({ id: doc.id, ...doc.data() });
        });

        setData(todos);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(true);
        const err = (
          <div className="error ui negative medium message">
            <i className="close icon"></i>
            <div name="header">We&apos;re sorry something went wrong.</div>
            <p>{error.message}</p>
          </div>
        );

        setError(err);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error, addDoc };
};

useFetch.propTypes = {
  url: PropTypes.string.isRequired,
};

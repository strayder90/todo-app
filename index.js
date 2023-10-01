// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDUZIlb_mfF0xDETwhvOhhod3f3-zrC2B0",
//   authDomain: "todo-app-109fc.firebaseapp.com",
//   projectId: "todo-app-109fc",
//   storageBucket: "todo-app-109fc.appspot.com",
//   messagingSenderId: "451482936577",
//   appId: "1:451482936577:web:d6d1e56c710f72a8592700",
// };

// // initialize firebase app
// initializeApp(firebaseConfig);

// // initialize services
// const db = getFirestore();

// // collection reference
// const collectionReference = collection(db, "todos");

// // get collection data
// getDocs(collectionReference)
//   .then((snapshot) => {
//     let todos = [];

//     snapshot.docs.map((doc) => {
//       todos.push({ id: doc.id, ...doc.data() });

//       console.log(todos);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

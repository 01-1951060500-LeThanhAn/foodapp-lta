import { toast } from "react-toastify";
import {
  collection,
  addDoc,
  where,
  doc,
  getDocs,
  setDoc,
  orderBy,
  query,
  
} from "firebase/firestore";
import { db } from "../firebase/index";

export const postComment = async (newComment) => {
  try {
    const response = await addDoc(collection(db, "comments"), newComment);
    return {
      ...newComment,
      id: response.id,
    };
  } catch (err) {
    return toast.error(err.message);
  }
};

export const fetchComment = async (id) => {
  try {
    const q = query(collection(db, "comments"), where("id", "==", id));
    const querySnapshot = await getDocs(q);
    const commentList = [];
    querySnapshot.forEach((doc) => {
      commentList.push({ ...doc.data(), id: doc.id });
    });
    return commentList;
  } catch (error) {
    console.log(error);
    return toast.error(error.message);
  }
};


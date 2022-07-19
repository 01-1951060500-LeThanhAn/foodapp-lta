import React, { useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { toast } from "react-toastify";
import { useUserAuth } from "../../context/UserAuthContext";
const CommentItem = ({ item }) => {
  const { user } = useUserAuth();
  const [loading, setLoading] = useState(false);
  const TimeCreateComment = (created) => {
    let periods = {
      year: 365 * 30 * 24 * 60 * 60 * 1000,
      month: 30 * 24 * 60 * 60 * 1000,
      week: 7 * 24 * 60 * 60 * 1000,
      day: 24 * 60 * 60 * 1000,
      hour: 60 * 60 * 1000,
      minute: 60 * 1000,
    };

    let timeDiff = Date.now() - created;

    for (const key in periods) {
      if (timeDiff >= periods[key]) {
        let res = Math.floor(timeDiff / periods[key]);
        return `${res} ${res === 1 ? key : key + "s"} ago`;
      }
    }

    return "Just Now";
  };

  const handleDeleteComment = async () => {
    if (item.userId === user.uid) {
      try {
        const CommentRef = doc(db, "comments", item.id);
        await deleteDoc(CommentRef);

        setLoading(true);
      } catch (error) {
        toast.error(error.message);
      }
      return toast.success("Delete this comment successfully");
    } else {
      return toast.error("Delete comment failed");
    }
  };

  return (
    <>
      {!loading && (
        <div className="show_comments" key={item.id}>
          <div className="show_commtent_items">
            <div className="show_avatar">
              <img alt="avatar" src={item.avatar} />
            </div>
            <div className="show_info">
              <div className="show_name_time">
                <h3 style={{ color: "#292929" }}>{item.userName}</h3>
                <p>{TimeCreateComment(item.created_at)}</p>
              </div>
              <p>{item.content}</p>
            </div>
          </div>

          <div
            onClick={() => handleDeleteComment(item.id)}
            className="remove_comment"
          >
            <i className="bi bi-trash"></i>
          </div>
        </div>
      )}
    </>
  );
};

export default CommentItem;

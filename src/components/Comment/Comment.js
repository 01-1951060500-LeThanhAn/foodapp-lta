import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchComment, postComment } from "../../actions/fireStoreAction";
import { useUserAuth } from "../../context/UserAuthContext";
import avatar from "../../asset/images/avatar.jpg";
import "../../styles/Comment.scss";

import CommentItem from "./CommentItem";
const Comment = ({ id, setInfo, info }) => {
  const { user } = useUserAuth();
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [loading, setLoading] = useState(false);


  const handlePostComment = async (e) => {
    e.preventDefault();
    if (!user) return;
    if (comment.trim() === "") return;
    setLoading(true);

    const res = await postComment({
      id: id,
      userId: user.uid,
      userName: user.displayName,
      avatar: user.photoURL,
      content: comment,
      created_at: Date.now(),
    });

    setCommentList([...commentList, res]);
    setLoading(false);
    setComment("");
  };

  useEffect(() => {
    async function getComment() {
      const data = await fetchComment(id);
      setCommentList(data);
    }

    getComment();
  }, [id]);

 

  return (
    <>
      <div className="reviews">
        <h3> Reviews</h3>
      </div>

      <div className="comment">
        <form onSubmit={handlePostComment}>
          <div className="comment_container">
            <img
              className="avatar"
              alt="avatar"
              src={user ? user.photoURL : avatar}
            />

            {user ? (
              <input
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                type="text"
                placeholder={"Enter Comment here"}
              />
            ) : (
              <div className="error_comment">
                <h3 style={{ color: "#292929" }}>
                  You need
                  <Link to={`/login`}> login </Link>
                  to comment
                </h3>
              </div>
            )}

            {user ? (
              <button
                className="send_comment"
                style={{
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? "not allowed" : "pointer",
                }}
                disabled={loading}
              >
                {loading ? "Posting" : "Post comment"}
              </button>
            ) : null}
          </div>

          {commentList.length > 0 ? (
            <div className="show_comment">
              {commentList.map((item) => (
                <CommentItem item={item} key={item.id} />
              ))}
            </div>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default Comment;

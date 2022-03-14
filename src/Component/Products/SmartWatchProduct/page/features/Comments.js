import React from "react";
import CommentList from "../../../../Comments/CommentList";
import CreateComment from "../../../../Comments/CreateComment";
import "./Comments.css";

const CommentsSmartWatchs = (props) => {

  return (
    <div className="CommentsMain">
      <div className="comment-Count">{props.comments.length}</div>
      <div className="comment">
        <CommentList comments={props.comments}/>
      </div>
      <div className="comment">
        <CreateComment onComments={props.onComment} />
      </div>
    </div>
  );
};

export default CommentsSmartWatchs;

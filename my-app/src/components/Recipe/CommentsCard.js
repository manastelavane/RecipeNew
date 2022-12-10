import { Rating } from '@mui/material';
import React from "react";
import profilePng from "../../images/Profile.png";

const CommentsCard = ({ comment }) => {
  const options = {
    value: comment.rating,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <div className="commentCard">
      {/* <img src={profilePng} alt="User" /> */}
      <p>{comment?.name}</p>
      <Rating {...options} />
      <span className="commmentCardComment">{comment.comment}</span>
    </div>
  );
};

export default CommentsCard;
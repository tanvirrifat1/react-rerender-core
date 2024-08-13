import React from "react";

const UserAvater = ({ imageUrl }) => {
  return (
    <div className="avatar">
      <div className="w-24 rounded-full">
        <img src={imageUrl} />
      </div>
    </div>
  );
};

export default UserAvater;

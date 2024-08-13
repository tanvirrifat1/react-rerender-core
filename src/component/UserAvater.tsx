import React from "react";

type IImage = {
  imageUrl: string;
};

const UserAvater = ({ imageUrl }: IImage) => {
  return (
    <div className="avatar">
      <div className="w-24 rounded-full">
        <img src={imageUrl} />
      </div>
    </div>
  );
};

export default UserAvater;

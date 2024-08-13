import UserAvater from "./UserAvater";
import WithBorder from "./WithBorder";

const UserWithBorder = WithBorder(UserAvater);

const Profile = () => {
  return (
    <div className="flex justify-center gap-2">
      <UserAvater
        imageUrl={
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        }
      />
      <UserWithBorder
        imageUrl={
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        }
      />
      <UserAvater
        imageUrl={
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        }
      />
      <UserAvater
        imageUrl={
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        }
      />
    </div>
  );
};

export default Profile;

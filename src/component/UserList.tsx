type IUser = {
  isLoading: boolean | null;
  error: boolean | null;
  data: any;
};

const UserList = ({ isLoading, error, data }: IUser) => {
  if (isLoading && !error) {
    return <p className="text-center my-9">Loading...</p>;
  }

  if (error) {
    return <p className="text-center my-9">something went wrong</p>;
  }

  return (
    <div>
      {data.map((item: any) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default UserList;

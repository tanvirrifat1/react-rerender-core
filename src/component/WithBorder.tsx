const WithBorder = (WrappedComponent) => {
  return (props) => (
    <div className="border border-purple-500 rounded-full">
      <WrappedComponent {...props} />
    </div>
  );
};

export default WithBorder;

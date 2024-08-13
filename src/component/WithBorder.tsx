const WithBorder = (WrappedComponent: any) => {
  return (props: any) => (
    <div className="border border-purple-500 rounded-full">
      <WrappedComponent {...props} />
    </div>
  );
};

export default WithBorder;

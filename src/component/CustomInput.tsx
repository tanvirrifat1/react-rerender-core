import { forwardRef } from "react";

type TCustomType = {
  className: string;
};

const CustomInput = forwardRef<HTMLInputElement, TCustomType>(
  ({ className }, inputRef) => {
    return (
      <div>
        <input
          ref={inputRef}
          className={className}
          type="text"
          name="name"
          id="name"
        />
      </div>
    );
  }
);

export default CustomInput;

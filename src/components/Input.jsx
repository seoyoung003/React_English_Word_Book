import { forwardRef } from "react";

const Input = forwardRef(({ name, textarea, ...props }, ref) => {
  return (
    <div>
      <label>{name}</label>
      {textarea ? (
        <textarea ref={ref} {...props}></textarea>
      ) : (
        <input ref={ref} {...props}></input>
      )}
    </div>
  );
});

export default Input;

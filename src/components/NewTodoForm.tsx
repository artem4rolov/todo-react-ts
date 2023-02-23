import React from "react";

interface NewTodoProps {
  handleClick: (text: string) => void;
}

const NewTodoForm = ({ handleClick }: NewTodoProps) => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const onClick = () => {
    if (inputRef.current) {
      handleClick(inputRef.current.value);
    }
  };
  return (
    <>
      <input type="text" placeholder="new todo" ref={inputRef} />
      <button onClick={onClick}>Add todo</button>
    </>
  );
};

export default NewTodoForm;
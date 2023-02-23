import React from "react";
import { Todo } from "../types/Todo";

// интерфейс для пропсов
interface TodoItemProps extends Todo {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

// React.FC - heneric, говорим typescript, что TodoItem - это функциональный компонент
const TodoItem = ({
  id,
  title,
  completed,
  children,
  style = {},
}: TodoItemProps) => {
  return (
    <li style={{ color: "red", backgroundColor: "white", ...style }}>
      <input type="checkbox" checked={completed} />
      <span>{title}</span>
      <span>&times;</span>
      {children}
    </li>
  );
};

export default TodoItem;

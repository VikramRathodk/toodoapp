import React from "react";
import TodoItem from "./TodoItem/Todoitem";

interface Todoitem {
  id: number;
  title: string;
}

interface TodoProps {
  items: Todoitem[];
}

const Todo: React.FC<TodoProps> = (props) => {
  return (
    <div>
      <ol>
        {props.items.map((item) => (
          <TodoItem key={item.id}  title={item.title} />
        ))}
      </ol>
    </div>
  );
};

export default Todo;

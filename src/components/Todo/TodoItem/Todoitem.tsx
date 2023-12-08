import React from "react";

//create a interface for props
interface todoProps {
  title: String;
}

const TodoItem: React.FC<todoProps> = (props) => {
  console.log("Todo", props);
  return (
    <>
      <li style={{border:1}}>{props.title}</li>
    </>
  );
};

export default TodoItem;

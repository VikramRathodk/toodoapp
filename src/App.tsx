import React from "react";
import Todo from "./components/Todo/todo";

const Mytoitems = [
  {
    id: 1,
    title: "this is first task",
  },
  {
    id: 2,
    title: "this is 2nd task",
  },
  {
    id:3,
    title: "this is 3rd task",
  },
];

const App: React.FC = () => {
  return (
    <div>
      <Todo  items={Mytoitems}/>
      
    </div>
  );
};

export default App;

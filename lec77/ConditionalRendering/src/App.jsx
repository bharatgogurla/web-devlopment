import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showbtn, setShowbtn] = useState(true);
  const [todos, setTodos] = useState([
    {
      title: "Hey",
      desc: "I am a good todo",
    },
    {
      title: "Hey, Another todo",
      desc: "I am a good todo too",
    },
    {
      title: "Hey, I am a grocery todo",
      desc: "I am a good todo but i am a grocery todo",
    },
  ]);

  // const Todo = ({todo}) => {return (<>
  // <div className="m-4 border border-2 border-purple-400">
  // <div className="todo">{todo.title}</div>
  // <div className="todo">{todo.desc}</div>
  // </div>
  // </>)}

  return (
    <>
      {showbtn ? (
        <button>showbtn is true</button>
      ) : (
        <button>showbtn is false</button>
      )}

      {todos.map((todo) => {
        // return <Todo key={todo.title} todo={todo}
        return (
          <div key={todo.title} className="m-4 border border-2 border-purple-400">
            <div className="todo">{todo.title}</div>
            <div className="todo">{todo.desc}</div>
          </div>
        );
      })}

      {/* {showbtn && <button>I will be shown only when second button is clicked</button>} */}
      <button onClick={() => setShowbtn(!showbtn)}>Toggle</button>
    </>
  );
}

export default App;

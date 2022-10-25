import { useState } from "react";
import "./App.css";
function List({ listContent }) {
  if (listContent.length > 0) {
    return (
      <ul>
        {listContent.map((content, index) => (
          <li key={index}>{content}</li>
        ))}
      </ul>
    );
  }
}

function App() {
  const [today, setToday] = useState({
    time: new Date().toLocaleTimeString(),
    date: new Date().toDateString(),
  });

  const [list, setList] = useState({
    listContents: [],
    listContent: "",
  });

  setInterval(tick, 1000);
  function tick() {
    setToday(() => {
      return {
        time: new Date().toLocaleTimeString(),
        date: new Date().toDateString(),
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setList((prevList) => {
      return {
        listContent: "",
        listContents: [prevList.listContent, ...prevList.listContents],
      };
    });
  }
  function handleChange(e) {
    setList((prevList) => {
      prevList.listContent = e.target.value;
      return prevList;
    });
  }

  return (
    <div className="App">
      <h1>
        <u>Local Clock </u>
      </h1>
      <h2>{today.time}</h2>
      <h2>{today.date}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="randomThought" onChange={handleChange}></input>
        <input type="submit" value="Submit"></input>
      </form>
      <List listContent={list.listContents} />
    </div>
  );
}

export default App;

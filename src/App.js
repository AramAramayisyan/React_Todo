import React, { useState } from "react";

import Header from "./components/header";

import './App.css';
import Main from "./components/main";

import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from "./components/footer";

function App() {
    const [tasks, setTasks] = useState([])

  return (
      <section className="todo-app">
          <div className="todo-app__container">
              <Header setTasks={setTasks} tasks={tasks} />
              <Main setTasks={setTasks} tasks={tasks} />
              <Footer setTasks={setTasks} tasks={tasks}/>
          </div>
      </section>
  );
}

export default App;

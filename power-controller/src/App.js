import React, { useState } from "react";
import { Board } from "./components/Board";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber((prev) => prev + 1);
  };

  // statuss
  // active
  // warning
  // error
  const lab1 = {
    name: "Laboratory 1",
    circuits: [
      {
        label: "Circuit #1",
        description: "This is a circuit description.",
        status: "error",
        switch: true,
      },
      {
        label: "Circuit #2",
        description: "This is a circuit description.",
        status: "error",
        switch: false,
      },
      {
        label: "Circuit #3",
        description: "This is a circuit description.",
        status: "error",
        switch: false,
      },
      {
        label: "Circuit #4",
        description: "This is a circuit description.",
        status: "warning",
        switch: true,
      },
      {
        label: "Circuit #5",
        description: "This is a circuit description.",
        status: "active",
        switch: true,
      },
    ],
  };

  const lab2 = {
    name: "Laboratory 2",
    circuits: [
      {
        label: "Circuit #1",
        description: "This is a circuit description.",
        status: "active",
        switch: true,
      },
      {
        label: "Circuit #2",
        description: "This is a circuit description.",
        status: "error",
        switch: false,
      },
      {
        label: "Circuit #3",
        description: "This is a circuit description.",
        status: "active",
        switch: true,
      },
      {
        label: "Circuit #4",
        description: "This is a circuit description.",
        status: "error",
        switch: false,
      },
      {
        label: "Circuit #6",
        description: "This is a circuit description.",
        status: "warning",
        switch: true,
      },
      {
        label: "Circuit #7",
        description: "This is a circuit description.",
        status: "active",
        switch: true,
      },
      {
        label: "Circuit #8",
        description: "This is a circuit description.",
        status: "active",
        switch: true,
      },
    ],
  };

  return (
    <div className="App">
      <Header></Header>
      <div className="board-container gap-20">
        <Board lab={lab1}></Board>
        <Board lab={lab2}></Board>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

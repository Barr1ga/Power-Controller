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
  const laboratories = [
    {
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
    },
    {
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
          label: "Circuit #5",
          description: "This is a circuit description.",
          status: "warning",
          switch: true,
        },
      ],
    },
  ];

  return (
    <div className="App">
      <Header></Header>
      <body>
        <div className="board-container gap-20">
          {laboratories.map((laboratory) => (
            <Board lab={laboratory}></Board>
          ))}
        </div>
      </body>
      <Footer></Footer>
    </div>
  );
}

export default App;

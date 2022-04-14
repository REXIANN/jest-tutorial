import React from "react";

import Hello from "./components/Hello";
import Timer from "./components/Timer";

const user = {
  name: "mike",
  age: 30,
};

function App() {
  return (
    <div>
      <div>App Component</div>
      <Hello user={user} />
      <div>
        <Timer />
      </div>
    </div>
  );
}

export default App;

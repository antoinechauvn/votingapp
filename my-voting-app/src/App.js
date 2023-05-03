import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
      <div>
        <h1>Compteur : {count}</h1>
        <button onClick={() => setCount(count + 1)}>Incrémenter</button>
        <button onClick={() => setCount(count - 1)}>Décrémenter</button>
      </div>
  );
}

export default App;

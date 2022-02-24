import { useState } from "react";

function App() {
  const [list, setList] = useState(["Diego", "Rodz", "Mayk"]);
  const [newItem, setNewItem] = useState("");

  function addToList() {
    setList((state) => [...state, "Novo"]);
  }
  return (
    <>
      <input value={newItem} onChange={(e) => setNewItem(e.target.value)} />
      <button onClick={addToList}>Adicionar</button>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

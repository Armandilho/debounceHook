import React from "react";
import useDebounce from "./hook/useDebouce";

const App = () => {
  const { debouncedValue, debouncedHandler } = useDebounce();

  return (
    <div>
      <p>debouced Input</p>
      <input onChange={(e) => debouncedHandler(e.target.value, 3000)} />
      <p>{debouncedValue}</p>
    </div>
  );
};

export default App;

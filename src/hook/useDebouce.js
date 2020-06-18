import React, { useState } from "react";

const UseDebounce = () => {
  let timeOutHandler = 0;
  const [debouncedValue, setDebouncedValue] = useState("");
  const debouncedHandler = (value, interval) => {
    window.clearTimeout(timeOutHandler);
    timeOutHandler = window.setTimeout(
      () => setDebouncedValue(value),
      interval
    );
  };

  return { debouncedValue, debouncedHandler };
};

export default UseDebounce;

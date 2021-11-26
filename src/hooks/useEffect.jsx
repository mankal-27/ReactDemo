import React, { useState, useEffect } from "react";

export default function useEffectcomponentUpdate() {

  const greetings = ["Hello", "Shalin", "Stavan", "こんにちは"];

  const [index, setIndex] = useState(0);

  useEffect(() => {

    document.title = greetings[index];

  });

  function updateGreeting() {

    setIndex(Math.floor(Math.random() * greetings.length));

  }

  return <button onClick={updateGreeting}>Say Hi</button>

};
import React, { useState, useEffect } from "react";

export default function WindowSizeUseEffect1() {

  const [flag, setFlag] = useState(true)

  const [size, setSize] = useState(getSize());

  function getSize() {

    return {

      width: window.innerWidth,

      height: window.innerHeight

    };

  }

  useEffect(() => {

    function handleResize() {

      console.log("Effect is created");

      setTimeout(() => setFlag(!flag), 3000);

      setSize(getSize());

    }

    window.addEventListener('resize', handleResize);

    return () => {

      console.log("Effect is cleared");

      window.removeEventListener('resize', handleResize);

    }

  }, [flag]);

  return <p>Width: {size.width}, Height: {size.height} Flag :{flag}</p>

};


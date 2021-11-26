import { createContext, useContext } from "react";



const Context = createContext("Default Value");

export function ContextDemo() {

  const value = "God Is Almighty";

  return (

    <div>

    <Context.Provider value={value}>

      <MyComponent />

    </Context.Provider>

   <MyComponent1/>

    </div>

  );

}

function MyComponent() {

  const value = useContext(Context);

  return <span>My component {value}</span>;

}

function MyComponent1() {

  const value = useContext(Context);

  return <span>My Component1{value}</span>;

}

import { useState } from "react";
import Navbar from "./components/layout/navbar/Navbar";
import HomeContainer from "./components/pages/home/HomeContainer";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";

function App() {
  const [name, setName] = useState("(here goes user's name)");

  const greeting = "Have a nice day!";

  return (
    <div>
      <Navbar />
      <div style={{ padding: "0 5rem" }}><button onClick={() => setName("(here goes user's nickname)")} >Change name</button></div>
      <HomeContainer name={name} />
      <ItemListContainer greeting={greeting} />
    </div>
  );
}

export default App;

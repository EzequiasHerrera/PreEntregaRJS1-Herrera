import './App.css';
import { Button } from "@mui/material";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer text="Greeting" />
    </>
  );
}

export default App;

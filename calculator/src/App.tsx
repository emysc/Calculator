import { useState } from "react";
import ButtonsOperations from "./components/ButtonsOperations";
import Calculation from "./components/Calculation";
import "./App.css";

function App() {
  const [name, setName] = useState<string>("");

  function receber(x: any, y: string) {
    if (x === "=") {
      setName(Number(name).toString());
    } else {
      setName(name + x);
    }
  }

  return (
    <div className="container">
      <Calculation i={name} />
      <div className="numbers_container">
        <ButtonsOperations operation="1" aoclicar={receber} />
        <ButtonsOperations operation="2" aoclicar={receber} />
        <ButtonsOperations operation="3" aoclicar={receber} />
        <ButtonsOperations operation="4" aoclicar={receber} />
        <ButtonsOperations operation="5" aoclicar={receber} />
        <ButtonsOperations operation="6" aoclicar={receber} />
        <ButtonsOperations operation="7" aoclicar={receber} />
        <ButtonsOperations operation="8" aoclicar={receber} />
        <ButtonsOperations operation="9" aoclicar={receber} />
        <ButtonsOperations operation="0" aoclicar={receber} />
      </div>
      <div className="ops_container">
        <ButtonsOperations operation="c" aoclicar={receber} />
        <ButtonsOperations operation="*" aoclicar={receber} />
        <ButtonsOperations operation="-" aoclicar={receber} />
        <ButtonsOperations operation="/" aoclicar={receber} />
        <ButtonsOperations operation="+" aoclicar={receber} />
        <ButtonsOperations operation="=" aoclicar={receber} />
      </div>
    </div>
  );
}

export default App;

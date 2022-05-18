import { create, all } from "mathjs";
import { useState } from "react";
import ButtonsOperations from "./components/ButtonsOperations";
import Calculation from "./components/Calculation";
import "./App.css";

const math = create(all);

function App() {
  const [value, setValue] = useState<string>("");

  function amountReceived(x: any, y: string) {
    if (x === "=") {
      setValue(math.evaluate(value));
    } else {
      setValue(value + x);
    }
    if (x === "c") {
      setValue("");
    }
  }

  return (
    <div className="container">
      <Calculation screenValue={value} />
      <div className="numbers_container">
        <ButtonsOperations operation="1" clickButton={amountReceived} />
        <ButtonsOperations operation="2" clickButton={amountReceived} />
        <ButtonsOperations operation="3" clickButton={amountReceived} />
        <ButtonsOperations operation="4" clickButton={amountReceived} />
        <ButtonsOperations operation="5" clickButton={amountReceived} />
        <ButtonsOperations operation="6" clickButton={amountReceived} />
        <ButtonsOperations operation="7" clickButton={amountReceived} />
        <ButtonsOperations operation="8" clickButton={amountReceived} />
        <ButtonsOperations operation="9" clickButton={amountReceived} />
        <ButtonsOperations operation="0" clickButton={amountReceived} />
      </div>
      <div className="ops_container">
        <ButtonsOperations operation="c" clickButton={amountReceived} />
        <ButtonsOperations operation="*" clickButton={amountReceived} />
        <ButtonsOperations operation="-" clickButton={amountReceived} />
        <ButtonsOperations operation="/" clickButton={amountReceived} />
        <ButtonsOperations operation="+" clickButton={amountReceived} />
        <ButtonsOperations operation="=" clickButton={amountReceived} />
      </div>
    </div>
  );
}

export default App;

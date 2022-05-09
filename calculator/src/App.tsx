import ButtonsOperations from "./components/ButtonsOperations";
import Calculation from "./components/Calculation";
import Total from "./components/total";

function App() {
  return (
    <div>
      <Total />
      <Calculation operation=""/>
      <input type="text" name="log" />
      <br />
      <div>
        <ButtonsOperations operation="*" />
        <ButtonsOperations operation="-" />
        <ButtonsOperations operation="/" />
        <ButtonsOperations operation="+" />
        <ButtonsOperations operation="=" />
      </div>
      <div>
        <ButtonsOperations operation="1" />
        <ButtonsOperations operation="2" />
        <ButtonsOperations operation="3" />
        <ButtonsOperations operation="4" />
        <ButtonsOperations operation="5" />
        <ButtonsOperations operation="6" />
        <ButtonsOperations operation="7" />
        <ButtonsOperations operation="8" />
        <ButtonsOperations operation="9" />
        <ButtonsOperations operation="0" />
      </div>
    </div>
  );
}

export default App;

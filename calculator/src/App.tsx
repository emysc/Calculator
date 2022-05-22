import { useState } from "react";
import Calculation from "./components/Calculation";
import "./App.css";

function App() {
  const [value, setValue] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [theme, setTheme] = useState<string>("light");
  const ops = ["*", "-", ".", "+", "/", "÷", "x"];

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          key={i}
          type="button"
          onClick={(e) => amountReceived(i.toString(), e)}
        >
          {i}
        </button>
      );
    }
    return digits;
  };

  const calculate = () => {
    setValue(eval(value).toString());
  };

  function clear() {
    setValue("");
    setResult("");
  }

  function amountReceived(x: string, y: any) {
    if (
      (ops.includes(x) && value === "") ||
      (ops.includes(x) && ops.includes(value.slice(-1)))
    ) {
      return;
    }

    setValue(value + x);

    if (!ops.includes(x)) {
      setResult(eval(value + x).toString());
    }
  }

  return (
    <div className={"App " + theme}>
      <div className="container" >
        <Calculation parcialResult={result} screenValue={value} />
        <div className="operations">
          <button type="button" onClick={(e) => clear()}>
            C
          </button>
          <button type="button" className="custom" onClick={(e) => amountReceived("*", e)}>
            x
          </button>
          <button type="button" className="custom" onClick={(e) => amountReceived("/", e)}>
            ÷
          </button>
          <button type="button" className="custom" onClick={(e) => amountReceived("-", e)}>
            -
          </button>
          <button type="button" className="custom" onClick={(e) => amountReceived("+", e)}>
            +
          </button>
        </div>
        <div className="numbers">{createDigits()}</div>
        <div className="last">
          <button type="button" onClick={() => toggleTheme()}>
          {theme === 'dark' ? '🌞' : '🌚'}
          </button>
          <button type="button" onClick={(e) => amountReceived(".", e)}>
            .
          </button>
          <button type="button" onClick={(e) => amountReceived("0", e)}>
            0
          </button>
          <button type="button" onClick={() => calculate()}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

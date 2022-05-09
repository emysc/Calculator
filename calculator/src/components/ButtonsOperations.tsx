import { useState } from "react";
import Total from "./total";

function ButtonsOperations(props: { operation: string }) {
  const [name, setName] = useState("0");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    <Total x = {props.operation} />;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="operation"
          type="submit"
          value={props.operation}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </form>
    </>
  );
}

export default ButtonsOperations;

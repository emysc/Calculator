import { useState } from "react";

function Calculation(props: { operation: string }) {
    const [name, setName] = useState("0");

    const handleSubmit = (event: { preventDefault: () => void }) => {
      event.preventDefault();
    };
  return <>
  <form onSubmit={handleSubmit}>
    <input
      className="operation"
      type="text"
      value={props.operation}
      onChange={(e) => setName(e.target.value)}
    ></input>
  </form>
</>
  
}

export default Calculation;

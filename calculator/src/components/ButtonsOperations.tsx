import { useState } from "react";

function ButtonsOperations(props: { operation: string; aoclicar: any }) {
  return (
    <>
      <button
        className="operation"
        type="submit"
        value={props.operation}
        onClick={(e) => props.aoclicar(props.operation, e)}
      >
        {props.operation}
        {/* // onClick={(e) => props.aoclicar(props.operation,e)}> */}
      </button>
    </>
  );
}

export default ButtonsOperations;

import { useState } from "react";

function ButtonsOperations(props: { operation: string; clickButton: any }) {
  return (
    <>
      <button
        className="operation"
        type="submit"
        value={props.operation}
        onClick={(e) => props.clickButton(props.operation, e)}
      >
        {props.operation}
      </button>
    </>
  );
}

export default ButtonsOperations;

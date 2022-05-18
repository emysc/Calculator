import React from "react";

function Calculation(props: { i: any }) {
  return (
    <>
        <input type="text" value={props.i.toString()} readOnly></input>
    </>
  );
}

export default Calculation;

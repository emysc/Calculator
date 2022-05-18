import React from "react";

function Calculation(props: { screenValue: any }) {
  return (
    <>
        <input type="text" value={props.screenValue.toString()} readOnly></input>
    </>
  );
}

export default Calculation;

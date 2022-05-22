function Calculation(props: { screenValue: any; parcialResult: string }) {
  return (
    <div className="output">
      <span>
        {props.parcialResult ? "(" + props.parcialResult + ")" : ""}
        &nbsp;
        {props.screenValue.toString() || "0"}
      </span>
    </div>
  );
}

export default Calculation;

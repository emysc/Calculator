import "./ButtonsOperations.css";

function ButtonsOperations(props: { operation: string; clickButton: any }) {
  return (
    <div className="btn" onClick={(e) => props.clickButton(props.operation, e)}>
      <p className="operation">{props.operation}</p>
    </div>
  );
}

export default ButtonsOperations;

import "./ButtonsOperations.css";

function ButtonsOperations(props: { operation: string; aoclicar: any }) {
  return (
    <div className="btn" onClick={(e) => props.aoclicar(props.operation, e)}>
      <p className="operation">{props.operation}</p>
    </div>
  );
}

export default ButtonsOperations;

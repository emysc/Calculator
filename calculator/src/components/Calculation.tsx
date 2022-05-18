import './Calculation.css';

function Calculation(props: { i: any }) {
  return (
    <div className="output">
      <input type="text" value={props.i.toString()} readOnly></input>
    </div>
  );
}

export default Calculation;

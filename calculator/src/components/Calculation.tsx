import './Calculation.css';

function Calculation(props: { screenValue: any }) {
  return (
    <div className="output">
      <input type="text" value={props.screenValue.toString()} readOnly></input>
    </div>
  );
}

export default Calculation;

import "./Darken.css";

function Darken(props) {
  return props.triggered ? <div className="darken"></div> : "";
}

export default Darken;

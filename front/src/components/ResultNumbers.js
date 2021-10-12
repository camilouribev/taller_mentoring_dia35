import React from "react";
import { connect } from "react-redux";
const ResultNumbers = (props) => {
  return <div>{props.result && "Resultado: " + props.result}</div>;
};

const stateMapToProps = (state) => {
  return {
    result: state.number.result?.randomList,
  };
};

export default connect(stateMapToProps)(ResultNumbers);

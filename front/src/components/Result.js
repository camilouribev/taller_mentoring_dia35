import React from "react";
import { connect } from "react-redux";
const Result = (props) => {
  return <div>{props.result && "Resultado: " + props.result}</div>;
};

const stateMapToProps = (state) => {
  return {
    result: state.random.result?.randomList,
  };
};

export default connect(stateMapToProps)(Result);

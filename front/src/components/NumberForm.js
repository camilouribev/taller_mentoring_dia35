import React, { useState } from "react";
import { connect } from "react-redux";
import { postNumbers } from "../actions";

const From = (props) => {
  const [state, setState] = useState();
  const onSubmit = (e) => {
    console.log(state);
    e.preventDefault();
    props.dispatch(postNumbers(state));
  };
  return (
    <div>
      <br />
      <form onSubmit={onSubmit}>
        <label htmlFor="list">
          Ingrese los numeros inicial y final del rango separados por comas:
        </label>
        <br />
        <textarea
          id="list"
          style={{ width: "50px", height: "20px" }}
          onChange={(e) => setState(e.target.value)}
        ></textarea>
        <button type="submit" disabled={props.loading}>
          Enviar
        </button>
      </form>
    </div>
  );
};

const stateMapToProps = (state) => {
  return {
    loading: state.view.loading,
  };
};

export default connect(stateMapToProps)(From);

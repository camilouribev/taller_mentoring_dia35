import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchRandom } from "../actions";

const From = (props) => {
  const [state, setState] = useState();
  const onSubmit = (e) => {
    console.log(state);
    e.preventDefault();
    props.dispatch(fetchRandom(state.text));
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="list">Ingrese una lista separada por comas:</label>
        <br />
        <textarea
          id="list"
          style={{ width: "300px", height: "120px" }}
          onChange={(e) => setState({ ...state, text: e.target.value })}
        ></textarea>
        <br />
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

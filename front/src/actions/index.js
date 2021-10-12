export const fetchRandom = (state) => (dispatch) => {
  dispatch({ type: "view-loading" });

  return fetch(`http://localhost:8080/r`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ list: state }), // body data type must match "Content-Type" header
  })
    .then((response) => response.json())
    .then((json) => {
      dispatch({ type: "random-result", data: json });
      dispatch({ type: "view-loaded" });
    });
};

export const postNumbers = (state) => (dispatch) => {
  dispatch({ type: "view-loading" });

  var nums = state.split(",").map(function (item) {
    return parseInt(item, 10);
  });

  if (nums[1] > 100) {
    nums[1] = 100;
  }

  return fetch(`http://localhost:8080/r/n`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ number1: nums[0], number2: nums[1] }), // body data type must match "Content-Type" header
  })
    .then((response) => response.json())
    .then((json) => {
      dispatch({ type: "number-result", data: json });
      dispatch({ type: "view-loaded" });
    });
};

//TODO: agregar las demas acciones

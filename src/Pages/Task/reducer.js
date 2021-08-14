const initialState = {
  quantityRange: { min: 0, max: 100 },
  pointsRange: { min: 0, max: 10000 },
  capRange: { min: 0, max: 5 },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_QUANTITY_RANGE":
      return { ...state, quantityRange: { min: action.min, max: action.max } };
    case "SET_POINTS_RANGE":
      return { ...state, pointsRange: { min: action.min, max: action.max } };
    case "SET_CAP_RANGE":
      return { ...state, capRange: { min: action.min, max: action.max } };
    default:
      return state;
  }
};

export default reducer;

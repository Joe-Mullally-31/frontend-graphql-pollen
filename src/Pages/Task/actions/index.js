export const updateQuantityRange = (min, max) =>
  Object({
    type: "SET_QUANTITY_RANGE",
    min: min,
    max: max,
  });

export const updatePointsRange = (min, max) =>
  Object({
    type: "SET_POINTS_RANGE",
    min: min,
    max: max,
  });

export const updateCapRange = (min, max) =>
  Object({
    type: "SET_CAP_RANGE",
    min: min,
    max: max,
  });

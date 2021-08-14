import React from "react";
import { shallow } from "enzyme";
import { Filters } from "./Filters.jsx";
import {
  updateCapRange,
  updatePointsRange,
  updateQuantityRange,
} from "../../actions";

describe("<Filters />", () => {
  let component;
  const dispatch = jest.fn();
  const props = {
    dispatch: dispatch,
    quantityRange: [0, 100],
    pointsRange: [0, 100],
    capRange: [0, 100],
  };
  beforeEach(() => {
    jest.clearAllMocks();
    component = shallow(<Filters {...props} />);
  });

  it("renders with props", () => {
    expect(component).toMatchSnapshot();
  });

  it("calls dispatch when quantity slider changes", () => {
    expect(component.find(".quantitySlider").props().value).toEqual([0, 100]);

    component.find(".quantitySlider").props().onChange(undefined, [25, 80]);

    expect(dispatch).toHaveBeenCalledWith(updateQuantityRange(25, 80));
  });

  it("calls dispatch when points slider changes", () => {
    expect(component.find(".pointsSlider").props().value).toEqual([0, 100]);

    component.find(".pointsSlider").props().onChange(undefined, [25, 80]);

    expect(dispatch).toHaveBeenCalledWith(updatePointsRange(25, 80));
  });

  it("calls dispatch when cap slider changes", () => {
    expect(component.find(".capSlider").props().value).toEqual([0, 100]);

    component.find(".capSlider").props().onChange(undefined, [25, 80]);

    expect(dispatch).toHaveBeenCalledWith(updateCapRange(25, 80));
  });
});

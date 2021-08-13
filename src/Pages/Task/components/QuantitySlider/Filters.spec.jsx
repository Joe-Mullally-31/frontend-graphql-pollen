import React from "react";
import { shallow } from "enzyme";
import Filters from "./Filters.jsx";
import * as fireEvent from "react-dom/test-utils";

describe("<Filters />", () => {
  let component;
  let instance;
  const props = {};
  beforeEach(() => {
    component = shallow(<Filters {...props} />);
  });

  it("renders with props", () => {
    expect(component).toMatchSnapshot();
    instance = component.instance();
  });

  it("updates quantity when quantity slider changes", () => {
    expect(component.find(".quantitySlider").props().value).toEqual([0, 100]);

    component.find(".quantitySlider").props().onChange(undefined, [25, 80]);

    expect(component.find(".quantitySlider").props().value).toEqual([25, 80]);
  });

  it("updates points when points slider changes", () => {
    expect(component.find(".pointsSlider").props().value).toEqual([0, 10000]);

    component.find(".pointsSlider").props().onChange(undefined, [25, 80]);

    expect(component.find(".pointsSlider").props().value).toEqual([25, 80]);
  });

  it("updates cap when cap slider changes", () => {
    expect(component.find(".capSlider").props().value).toEqual([0, 5]);

    component.find(".capSlider").props().onChange(undefined, [25, 80]);

    expect(component.find(".capSlider").props().value).toEqual([25, 80]);
  });
});

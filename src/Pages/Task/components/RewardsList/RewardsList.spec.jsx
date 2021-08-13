import React from "react";
import { shallow } from "enzyme";
import RewardsList from "./RewardsList.jsx";

describe("<RewardsList />", () => {
  let component;
  const props = {
    rewards: [
      {
        name: "Test Name",
        description: "Description of reward",
        image:
          "https://d3mivsidb2c4zk.cloudfront.net/client/reward_images/1519138501.png",
        quantity: 100,
        points: 12,
        capPerAmbassador: 1000,
      },
    ],
  };

  beforeEach(() => {
    component = shallow(<RewardsList {...props} />);
  });

  it("renders with props", () => {
    expect(component).toMatchSnapshot();
  });
});

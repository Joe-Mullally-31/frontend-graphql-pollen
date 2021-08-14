import React from "react";
import RewardsList from "./components/RewardsList/RewardsList.jsx";
import "./Task.scss";
import Filters from "./components/Filters/Filters.jsx";

export const Task = ({ campaignXRewards = {} }) => {
  return (
    <>
      <h1>Campaign X Rewards</h1>
      <Filters />
      <RewardsList rewards={campaignXRewards} />
    </>
  );
};

Task.propTypes = {};

export default Task;

import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import PropTypes from "prop-types";
import { IconButton } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    padding: "0 16px",
  },
  imageList: {
    width: 500,
  },
  imageListItemBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,1.0) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  imageListItem: {
    padding: "20px 20px",
    width: "10px",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const applyFilter = (field, range) => (reward) =>
  reward[field] <= range.max && reward[field] >= range.min;

export const RewardsList = ({
  rewards,
  quantityRange,
  pointsRange,
  capRange,
}) => {
  const classes = useStyles();
  const filteredRewards = rewards
    .filter(applyFilter("quantity", quantityRange))
    .filter(applyFilter("points", pointsRange))
    .filter(applyFilter("capPerAmbassador", capRange));

  return (
    <div className={classes.root}>
      <ImageList rowHeight={200} className={classes.imageList} cols={1}>
        {filteredRewards.map((reward) => (
          <ImageListItem key={reward.image} className={classes.imageListItem}>
            <img src={reward.image} alt={reward.name} />
            <ImageListItemBar
              className={classes.imageListItemBar}
              position="bottom"
              title={reward.name}
              subtitle={<span>{reward.description}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${reward.description}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

RewardsList.propTypes = {
  rewards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      quantity: PropTypes.number,
      points: PropTypes.number,
      capPerAmbassador: PropTypes.number,
    })
  ).isRequired,
};

const mapStateToProps = (state) =>
  Object({
    quantityRange: state.quantityRange,
    pointsRange: state.pointsRange,
    capRange: state.capRange,
  });

export default connect(mapStateToProps)(RewardsList);

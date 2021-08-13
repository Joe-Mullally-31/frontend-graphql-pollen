import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Slider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "16px 16px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordionDetails: {
    width: "100%",
    padding: "15px 20px",
  },
}));

const Filters = () => {
  const classes = useStyles();
  const [quantity, setQuantity] = React.useState([0, 100]);
  const [points, setPoints] = React.useState([0, 10000]);
  const [cap, setCap] = React.useState([0, 5]);

  const handleQuantityChange = (event, newQuantity) => {
    setQuantity(newQuantity);
  };

  const handlePointsChange = (event, newPoints) => {
    setPoints(newPoints);
  };

  const handleCapChange = (event, newCaps) => {
    setCap(newCaps);
  };

  const quantityMarks = [
    { value: 0, label: "0" },
    { value: 100, label: "100" },
  ];
  const pointsMarks = [
    { value: 0, label: "0" },
    { value: 10000, label: "10,000" },
  ];
  const capMarks = [
    { value: 0, label: "0" },
    { value: 5, label: "5" },
  ];

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Filters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.accordionDetails}>
            <Typography id="quantity-slider" gutterBottom>
              Quantity
            </Typography>
            <Slider
              min={0}
              max={100}
              value={quantity}
              onChange={handleQuantityChange}
              valueLabelDisplay="auto"
              aria-labelledby="quantity-slider"
              marks={quantityMarks}
              className="quantitySlider"
            />
            <Typography id="points-slider" gutterBottom>
              Points
            </Typography>
            <Slider
              min={0}
              max={10000}
              value={points}
              onChange={handlePointsChange}
              valueLabelDisplay="auto"
              aria-labelledby="points-slider"
              marks={pointsMarks}
              step={500}
              className="pointsSlider"
            />
            <Typography id="cap-slider" gutterBottom>
              Cap
            </Typography>
            <Slider
              min={0}
              max={5}
              value={cap}
              onChange={handleCapChange}
              valueLabelDisplay="auto"
              aria-labelledby="cap-slider"
              marks={capMarks}
              step={1}
              className="capSlider"
            />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Filters;

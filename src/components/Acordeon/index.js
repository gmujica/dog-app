
import React, { useState, useReducer, useEffect } from 'react'
import { dogsReducer, initialState } from '../../redux/reducers'
import getData from '../../redux/actions/dogActions.js'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [{dogs, loading}, dispatch] = useReducer(dogsReducer, initialState)
  console.log(dogs);

  useEffect(() => {
    getData(dispatch)
  }, [])

  return (
    <div className={classes.root}>
      <Typography variant='h4' >Click for display all</Typography>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      {Object.keys(dogs).map(i => {
          return <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header" value={i}>
              <Typography className={classes.heading}>{i}</Typography>
              <Typography className={classes.secondaryHeading}>Exist {i.length} sub-races</Typography>
            </AccordionSummary>
        })}
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

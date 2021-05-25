import React from 'react';
import { TextField, Button } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField id="outlined-search" label="Search field" type="search" variant="outlined" />
        <Button variant="contained" color="primary">
            Search
        </Button>
      </div>
    </form>
  );
}

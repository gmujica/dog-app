import React, { useState } from 'react';
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

  const [dogName, setDogName] = useState('');

  const handleChange = (event) => {
     setDogName(event.target.value)
    console.log(dogName);
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField id="outlined-search" label="Search field" type="search" variant="outlined" onChange={handleChange} />
        <Button variant="contained" color="primary">
            Search
        </Button>
      </div>
    </form>
  );
}

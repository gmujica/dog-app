import React, { useState, useReducer, useEffect } from 'react'
import { dogsReducer, initialState } from '../../redux/reducers'
import getData from '../../redux/actions/dogActions'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '../Card'

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

function Selector() {
    const [{dogs, loading}, dispatch] = useReducer(dogsReducer, initialState)
    const [currency, setCurrency] = useState('Select');
    const classes = useStyles();
    console.log(dogs);

    useEffect(() => {
        getData(dispatch)
      }, []);

      const handleChange = (event) => {
        setCurrency(event.target.value);
        console.log(currency);
      };

    return (
        <div>
            <TextField
                id="standard-select-currency"
                select
                label="Select"
                value={currency}
                onChange={handleChange}
                helperText="Please select your search"
                >
                {Object.keys(dogs).map(i => {
                    return <MenuItem  value={i}>{i}</MenuItem>
                })}
            </TextField>
            <Card value={currency} />
        </div>
    )
}

export default Selector

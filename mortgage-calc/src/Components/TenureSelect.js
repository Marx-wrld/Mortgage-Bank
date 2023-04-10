import React from 'react'; //importing required components from MUI library
import { InputLabel } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const TenureSelect = ({data, setData}) => {
  const HandleChange = (event) => { //HandleChange function that will be used to set the tenure state
    setData({...data, loanTerm: event.target.value});
  }
  return (
    <FormControl fullWidth>

      <InputLabel id="demo-simple-select-label">Tenure</InputLabel>
      <Select
      labelId="demo-simple-selct-label"
      id="demo-simple-select"
      label="Tenure"
      defaultValue={5}
      onChange={HandleChange}
      >
      <MenuItem value={5}>5 years</MenuItem>
      <MenuItem value={10}>10 years</MenuItem>
      <MenuItem value={15}>15 years</MenuItem>
      <MenuItem value={20}>20 years</MenuItem>
      <MenuItem value={25}>25 years</MenuItem>
      </Select>

    </FormControl>
  )
};

export default TenureSelect;

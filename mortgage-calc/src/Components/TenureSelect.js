import React from 'react'; //importing required components from MUI library
import { InputLabel } from '@mui/material';
import MenuItem from '@mui/material';
import FormControl from '@mui/material';
import Select from '@mui/material';


const TenureSelect = ({data, setData}) => {
  const HandleChange = (event) => { //HandleChange function that will be used to set the tenure state
    setData({...data, loanTerm: event.target.value});
  }
  return (
     <div>Tenure</div>
)
};

export default TenureSelect

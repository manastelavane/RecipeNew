import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';


const Input = ({ name, handleChange,value, label, multiline, type,fullWidth,inputAdornmentText,className}) => (
  // <Grid item xs={12} sm={half ? 6 : 12}>
  <span className={className===''?'':'textfield'}>
  {/* // <div className='textfield'> */}
    <TextField
    value={value}
    className='textfieldclass'
      name={name}
      onChange={handleChange}
      variant="outlined"
      multiline={multiline}
      minRows={3}
      required
      fullWidth={window.width>=700?false:fullWidth}
      label={label}
      type={type}
      inputProps={{
        step: "0.1"
      }}
      InputProps={inputAdornmentText && {
        endAdornment: <InputAdornment position="end">{inputAdornmentText}</InputAdornment>,
      }}
    />
  </span>
);

export default Input;

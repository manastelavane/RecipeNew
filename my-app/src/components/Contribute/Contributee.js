import { Grid, Input, InputAdornment, TextField } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete';
import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Contribute.css'
import {options} from '../options'
import ChipInput from 'material-ui-chip-input';
const Contribute = () => {
  return (
    <div className='contribute'>
        <Navbar/>
       <div className='contribute-hero'>
        <div className='contribute-hero-content'>
            Contribute Recipe...
        </div>
      </div>
      <div className='contribute-form-container'>
        <div className='form-container'>
            <h1 className='recipe-detail-heading'>Recipe Details</h1>
        <Grid>
        <div className='textfield'>
            <TextField required fullWidth label="Recipe Name" id="textfield" />
        </div>
        <div className='textfield'>
        <TextField
          required
          id="outlined-multiline-static"
          label="Recipe Description"
          multiline
          rows={3}
          fullWidth
        />
        </div>
        <div className='textfield' id="image-textfield">
            <label for="image">Recipe Image:</label> &nbsp;&nbsp;
            <input type='file' id='image'/>
        </div>
        <div className='textfield'>
            <span className='textfield-up'>
        <TextField
          label="Prep Time"
          type="number"
          id="outlined-start-adornment"
          InputProps={{
            endAdornment: <InputAdornment position="end">min</InputAdornment>,
          }}
        />
        </span>
        <span className='textfield-up'>
        <TextField
          label="Cook Time"
          type="number"
          id="outlined-start-adornment"
          InputProps={{
            endAdornment: <InputAdornment position="end">min</InputAdornment>,
          }}
        />
        </span>
        <span className='textfield-up'>
        <TextField
          label="Total Time"
          type="number"
          id="outlined-start-adornment"
          position="end"
          InputProps={{
            endAdornment: <InputAdornment position="end">min</InputAdornment>,
          }}
        />
        </span>
        </div>
        <div className='textfield'>
        <Autocomplete
        aria-required
      className='autocomplete'
        // value={category}
        // onChange={(event, newCategory) => {
        //   setCategory(newCategory);
        // }}
        // inputValue={inputValue}
        // onInputChange={(event, newInputValue) => {
        //   setInputValue(newInputValue);
        // }}
        id="disable-clearable"
        disableClearable
        options={options}
        fullWidth
        // sx={{ width: 500 }}
        renderInput={(params) => <TextField {...params} value='All' label="Select Category" />}
      />
        </div>
          {/* <div className='textfield'> */}
          <div className='textfield'>
          <TextField
          fullWidth
          label="Carbohydrate Content"
          type="number"
          id="outlined-start-adornment"
          position="end"
          InputProps={{
            endAdornment: <InputAdornment position="end">g</InputAdornment>,
          }}
        />
        </div>
        <div className='textfield'>
        <TextField
          fullWidth
          label="Protein Content"
          type="number"
          id="outlined-start-adornment"
          position="end"
        //   sx={{ m: 1, width: '25ch' }}
          InputProps={{
            endAdornment: <InputAdornment position="end">g</InputAdornment>,
          }}
        />
        </div>
        <div className='textfield'>
        <TextField
          fullWidth
          label="Fats Content"
          type="number"
          id="outlined-start-adornment"
          position="end"
        //   sx={{ m: 1, width: '25ch' }}
          InputProps={{
            endAdornment: <InputAdornment position="end">g</InputAdornment>,
          }}
        />
        </div>
        <div className='textfield'>
        <TextField
          fullWidth
          label="Saturated Fats Content"
          type="number"
          id="outlined-start-adornment"
          position="end"
        //   sx={{ m: 1, width: '25ch' }}
          InputProps={{
            endAdornment: <InputAdornment position="end">g</InputAdornment>,
          }}
        />
        </div>
        <div className='textfield'>
          <TextField
          fullWidth
          label="Calories"
          type="number"
          id="outlined-start-adornment"
          position="end"
        //   sx={{ m: 1, width: '25ch' }}
          InputProps={{
            endAdornment: <InputAdornment position="end">cal</InputAdornment>,
          }}
        />
        </div>
        <div className='textfield'>
        <TextField
          fullWidth
          label="Sugar Content"
          type="number"
          id="outlined-start-adornment"
          position="end"
        //   sx={{ m: 1, width: '25ch' }}
          InputProps={{
            endAdornment: <InputAdornment position="end">g</InputAdornment>,
          }}
        />
        </div>
        <div className='textfield'>
        <TextField
          fullWidth
          label="Cholestrol Content"
          type="number"
          id="outlined-start-adornment"
          position="end"
        //   sx={{ m: 1, width: '25ch' }}
          InputProps={{
            endAdornment: <InputAdornment position="end">mg</InputAdornment>,
          }}
        />
        </div>
        <div className='textfield'>
         <TextField
          fullWidth
          label="Fibre Content"
          type="number"
          id="outlined-start-adornment"
          position="end"
        //   sx={{ m: 1, width: '25ch' }}
          InputProps={{
            endAdornment: <InputAdornment position="end">g</InputAdornment>,
          }}
        />
        </div>
        <div className='textfield'>
        <TextField
          fullWidth
          label="Sodium Content"
          type="number"
          id="outlined-start-adornment"
          position="end"
        //   sx={{ m: 1, width: '25ch' }}
          InputProps={{
            endAdornment: <InputAdornment position="end">mg</InputAdornment>,
          }}
        />
        {/* </div> */}
          </div>
            <br/>
          <div className='textfield'>
            <label for="keywords">Recipe Related Keywords : </label>
            <br/>
            <br/>
            <ChipInput
            id="keywords"
            name="tags"
            variant="outlined"
            label="Tags"
            fullWidth
            // value={postData.tags}
            // onAdd={(chip) => handleAddChip(chip)}
            // onDelete={(chip) => handleDeleteChip(chip)}
          />
          </div>
          <br/>
          <div className='textfield'>
          <TextField
          fullWidth
          label="Recipe Servings"
          type="number"
          id="outlined-start-adornment"
          position="end"
          InputProps={{
            endAdornment: <InputAdornment position="end">people</InputAdornment>,
          }}
        />
          </div>
          <h3>
            Ingredients:
          </h3>
          <div className='textfield'>
                <h5>Ingredient 1 :</h5>
            <div>
            <TextField
          label="Amount"
          type="text"
          id="outlined-start-adornment"
        />
        <TextField
          label="Unit"
          type="text"
          id="outlined-start-adornment"
        />
        <TextField
          label="Name"
          type="text"
          id="outlined-start-adornment"
        />
            </div>
          
          </div>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default Contribute

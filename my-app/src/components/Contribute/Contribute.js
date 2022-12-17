import React,{useState,useEffect, Fragment} from 'react'
import { Grid,TextField,Button,IconButton} from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete';
import Navbar from '../Navbar/Navbar'
import {options} from '../options'
import ChipInput from 'material-ui-chip-input';
import FileBase from 'react-file-base64';
import './Contribute.css'
import Input from './Input'
import DeleteIcon from '@mui/icons-material/Delete';
import { Stack } from '@mui/system';
const initialState = { recipeName: '', recipeDescription: '',image:'', prepTime: '', cookTime: '', totalTime: '',category: 'All',inputValue:'',carbohydrates:'',proteins:'',fats:'',saturatedFats:'',calories:'',sugar:'',cholestrol:'',fibre:'',sodium:'',tags:[],ingredientsinfo:[{ingreamount:0,unit:'',ingredient:''}],stepsinfo:[{stepsinfoindi:''}]};
const Contribute = () => {
    const [form, setForm] = useState(initialState);
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleAddChip = (tag) => {
        setForm({ ...form, tags: [...form.tags, tag] });
      };
      const handleIngreFormChange = (event, index) => {
        let data = [...form.ingredientsinfo];
        data[index][event.target.name] = event.target.value;
        setForm({...form,ingredientsinfo:data});
      }
      const handleStepsFormChange = (event, index) => {
        let data = [...form.stepsinfo];
        data[index][event.target.name] = event.target.value;
        setForm({...form,stepsinfo:data});
      }
      const handleDeleteChip = (chipToDelete) => {
        setForm({ ...form, tags: form.tags.filter((tag) => tag !== chipToDelete) });
      };
      const addIngreFields = () => {
        // e.preventDefault()
        let newfield = {ingreamount:0 ,unit:'', ingredient: '' }
    
        setForm({...form,ingredientsinfo:[...form.ingredientsinfo, newfield]})
    }
      const addStepsFields = () => {
        // e.preventDefault()
        let newfield = {stepsinfoindi:''}
    
        setForm({...form,stepsinfo:[...form.stepsinfo, newfield]})
    }
    const removeIngreFields = (index) => {
      let data = [...form.ingredientsinfo];
      data.splice(index, 1)
      setForm({...form,ingredientsinfo:data})
  }
  const removeStepsFields = (index) => {
    console.log(index)
    console.log(form.stepsinfo)
    let data = [...form.stepsinfo];
    data.splice(index, 1)
    setForm({...form,stepsinfo:data})
}
const submit = (e) => {
  e.preventDefault();
  console.log("form",form)
}
      useEffect(()=>{
        console.log(form)
      },[form,form.stepsinfo.length])
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
            <form  onSubmit={submit}>
                <Grid container spacing={2}>
                    <Input name="recipeName" label="Recipe Name" handleChange={handleChange} fullWidth/>
                    <Input name="recipeDescription" multiline label="Recipe Description" handleChange={handleChange}  fullWidth/>
                    <div className='textfield' id="image-textfield">
                        <label htmlFor="image" style={{margin:'5px 0'}}>Recipe Image:</label> &nbsp;&nbsp;
                        <FileBase type="file" multiple={false} onDone={({ base64 }) => setForm({ ...form, image: base64 })} />
                    </div>
                    <div className='time'>
                        <Input type="number" name="prepTime" label="Prep Time" handleChange={handleChange} inputAdornmentText={"min"}  />
                        <Input type="number" name="cookTime" label="Cook Time" handleChange={handleChange} inputAdornmentText={"min"}  />
                        <Input type="number" name="totalTime" label="Total Time" handleChange={handleChange} inputAdornmentText={"min"}  />
                        <Input type="number" name="servings" label="Recipe Servings" handleChange={handleChange} inputAdornmentText={"people"}  />
                    </div>
                        <div className='textfield'>
                    <div className='time'>
                        <Autocomplete
                        aria-required
                        className='autocomplete'
                        value={form.category}
                        onChange={(event, newCategory) => {
                          setForm({...form,category:newCategory});
                        }}
                        inputValue={form.inputValue}
                        onInputChange={(event, newInputValue) => {
                          setForm({ ...form,inputValue:newInputValue})
                        }}
                        id="disable-clearable"
                        disableClearable
                        options={options}
                        fullWidth
                        // sx={{ width: 500 }}
                        renderInput={(params) => <TextField {...params} value='All' label="Select Category" />}
                    />
                    </div>
                    </div>
                    <h4>Nutrients Information</h4>
                    <div className='time'>

                    <Input type="number" name="carbohydrates" label="Carbohydrates" handleChange={handleChange} inputAdornmentText={"g"}  />
                    <Input type="number" name="proteins" label="Proteins" handleChange={handleChange} inputAdornmentText={"g"}  />
                    <Input type="number" name="fats" label="Fats" handleChange={handleChange} inputAdornmentText={"g"}  />
                    <Input type="number" name="saturatedFats" label="Saturated Fats" handleChange={handleChange} inputAdornmentText={"g"}  />
                    <Input type="number" name="calories" label="Calories" handleChange={handleChange} inputAdornmentText={"g"}  />
                    <Input type="number" name="sugar" label="Sugar Content" handleChange={handleChange} inputAdornmentText={"g"}  />
                    <Input type="number" name="cholestrol" label="Cholestrol" handleChange={handleChange} inputAdornmentText={"mg"}  />
                    <Input type="number" name="fibre" label="Fibre Content" handleChange={handleChange} inputAdornmentText={"g"}  />
                    <Input type="number" name="sodium" label="Sodium Content" handleChange={handleChange} inputAdornmentText={"mg"}  />
                    </div>
                    <h4>Recipe Related Keywords :</h4>
                    <div className='textfield'>
                        <div className='time'>
                        <ChipInput
                        id="keywords"
                        name="tags"
                        variant="outlined"
                        label="Tags"
                        fullWidth
                        value={form.tags}
                        onAdd={(chip) => handleAddChip(chip)}
                        onDelete={(chip) => handleDeleteChip(chip)}
                    />
                    </div>
                    </div>
                    <h4>Ingredients : </h4>
                    <br/>
                    <h5 style={{fontWeight:'500'}}>Eg."500gm flour" will be inputed as: Amount:500, Unit:g, Ingredient:flour</h5>
                    <br/>
                    {/* <div className='time'> */}
                        {form.ingredientsinfo.map((input, index) => {
                            return (
                                // <div className="nomargin" key={index}>
                                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 0.2, sm: 2, md: 4 }} alignItems="center">
                                {/* <div> */}
                                    <Input type="number" className="" name="ingreamount" label="Amount" handleChange={event => handleIngreFormChange(event, index)}/>
                                    <Input type="text" className="" name="unit" label="Unit" handleChange={event => handleIngreFormChange(event, index)}/>
                                    <Input type="text" className="" name="ingredient" label="Ingredient" handleChange={event => handleIngreFormChange(event, index)}/>
                                    
                                    <IconButton aria-label="delete" size="small"onClick={() => removeIngreFields(index)}>
                                      <DeleteIcon fontSize="small" />
                                    </IconButton>
                                    </Stack>
                                    //  </div>
                                // </div>
                                // </div>   
                            )
                        })}
                        <br/>
                        <Button size="small" color="inherit" onClick={addIngreFields} variant="contained">
                        Add Ingredient +
                        </Button>
                        <br/>
                        <h4>Steps : </h4>
                    <br/>
                    <Grid container columnSpacing={2} alignItems="center">
                        {form.stepsinfo.map((input, index) => {
                            return (
                              
                                <Fragment key={index}>
                                  <Grid item xs={11}>
                                    <Input type="text" className="" name="stepsinfoindi" label="Step" handleChange={event => handleStepsFormChange(event, index)} fullWidth />
                                    </Grid>
                                    <Grid item xs={1}>
                                    <IconButton aria-label="delete" size="small" onClick={()=>removeStepsFields(index)}>
                                      <DeleteIcon fontSize="small" />
                                    </IconButton>
                                    </Grid>
                                {/* // </div> */}
                                {/* // </div> */}
                                </Fragment>   
                                ) 
                              })}
                              </Grid>
                        
                        <Button size="small" color="inherit" onClick={addStepsFields} variant="contained">
                        Add Steps +
                        </Button>
                    {/* </div> */}
                </Grid>
                <br/>
                <br/>
                <Button type="submit" size="large" color="primary" fullWidth variant="contained">
                  Submit
                </Button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contribute

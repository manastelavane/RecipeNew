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
import { useDispatch, useSelector } from 'react-redux';
import {createCard} from '../../actions/cards'
import Loader from '../Loader/Loader';
import { useNavigate } from 'react-router-dom';
const initialState = { AuthorName:'',AuthorId:'',Name: '', Description: '',Images:[], PrepTime:'', CookTime: '', TotalTime: '',RecipeCategory: 'All',inputValue:'',CarbohydrateContent:'',
ProteinContent:'',FatContent:'',SaturatedFatContent:'',Calories:'',SugarContent:'',CholesterolContent:'',
FiberContent:'',SodiumContent:'',RecipeServings:'',Keywords:[],RecipeIngredientQuantities:[''],RecipeIngredientParts:[''],RecipeInstructions:['']};
const Contribute = () => {
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const navigate=useNavigate()
    useEffect(()=>{
      if(!user){
        navigate('/auth')
      }
    },[user])
  const {isLoading}=useSelector((state) => state.cards)
    const [form, setForm] = useState(initialState);
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const dispatch=useDispatch()
    const handleAddChip = (tag) => {
        setForm({ ...form,Keywords: [...form.Keywords, tag] });
      };
      const handleIngreFormChange = (event, index) => {
        let name=event.target.name
        if(name==='RecipeIngredientQuantities'){
          let data = [...form.RecipeIngredientQuantities];
        data[index] = event.target.value;
          setForm({...form,RecipeIngredientQuantities:data});
        }
        else {
          let data = [...form.RecipeIngredientParts];
          data[index] = event.target.value;
          setForm({...form,RecipeIngredientParts:data});
        }
      }
      const handleStepsFormChange = (event, index) => {
        let data = [...form.RecipeInstructions];
        data[index] = event.target.value;
        setForm({...form,RecipeInstructions:data});
      }
      const handleDeleteChip = (chipToDelete) => {
        setForm({ ...form, Keywords: form.Keywords.filter((tag) => tag !== chipToDelete) });
      };
      const addIngreFields = () => {
        // e.preventDefault()
        // let newfield = {ingreamount:0 ,unit:'', ingredient: '' }
    
        setForm({...form,RecipeIngredientQuantities:[...form.RecipeIngredientQuantities, ''],RecipeIngredientParts:[...form.RecipeIngredientParts,'']})
    }
      const addStepsFields = () => {
        // e.preventDefault()
        let newfield =''
    
        setForm({...form,RecipeInstructions:[...form.RecipeInstructions, newfield]})
    }
    const removeIngreFields = (index) => {
      let data1 = [...form.RecipeIngredientQuantities];
      let data2 = [...form.RecipeIngredientParts];
      data1.pop()
      data2.pop()
      setForm({...form,RecipeIngredientQuantities:data1,RecipeIngredientParts:data2})
  }
  const removeStepsFields = (index) => {
    // console.log(index)
    // console.log(form.stepsinfo)
    let data = [...form.RecipeInstructions];
    data.pop();
    setForm({...form,RecipeInstructions:data})
}
const submit = (e) => {
  e.preventDefault();
  setForm({...form,AuthorId:user?.result?._id,AuthorName:user?.result?.name})
  console.log("form",form)
  dispatch(createCard(form))
  setForm(initialState)
}
useEffect(() => {
  window.scrollTo(0, 0)
}, [])
      useEffect(()=>{
        console.log(form)
        // setTemp('3')
      },[form])
      console.log(isLoading)
      if (isLoading===true) {
        return (
          <>
            <Loader/>
          </>
        );
      }
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
                    <Input name="Name" label="Recipe Name" handleChange={handleChange} fullWidth/>
                    <Input name="Description" multiline label="Recipe Description" handleChange={handleChange}  fullWidth/>
                    <div className='textfield' id="image-textfield">
                        <label htmlFor="image" style={{margin:'5px 0'}}>Recipe Image:</label> &nbsp;&nbsp;
                        <FileBase type="file" multiple={false} onDone={({ base64 }) => setForm({ ...form, Images:[base64] })} />
                    </div>
                    <div className='time'>
                        <Input type="number" name="PrepTime" label="Prep Time" handleChange={handleChange} inputAdornmentText={"min"}  />
                        <Input type="number" name="CookTime" label="Cook Time" handleChange={handleChange} inputAdornmentText={"min"}  />
                        <Input type="number" name="TotalTime" label="Total Time" value={Number(form.CookTime)+Number(form.PrepTime)} inputAdornmentText={"min"}  />
                        <Input type="number" name="RecipeServings" label="Recipe Servings" handleChange={handleChange} inputAdornmentText={"people"}  />
                    </div>
                        <div className='textfield'>
                    <div className='time'>
                        <Autocomplete
                        aria-required
                        className='autocomplete'
                        value={form.category}
                        onChange={(event, newCategory) => {
                          setForm({...form,RecipeCategory:newCategory});
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

                    <Input type="number" name="CarbohydrateContent" label="Carbohydrates" handleChange={handleChange} inputAdornmentText={"g"}  />
                    <Input type="number" name="ProteinContent" label="Proteins" handleChange={handleChange} inputAdornmentText={"g"}  />
                    <Input type="number" name="FatContent" label="Fats" handleChange={handleChange} inputAdornmentText={"g"}  />
                    <Input type="number" name="SaturatedFatContent" label="Saturated Fats" handleChange={handleChange} inputAdornmentText={"g"}  />
                    <Input type="number" name="Calories" label="Calories" handleChange={handleChange} inputAdornmentText={"g"}  />
                    <Input type="number" name="SugarContent" label="Sugar Content" handleChange={handleChange} inputAdornmentText={"g"}  />
                    <Input type="number" name="CholesterolContent" label="Cholestrol" handleChange={handleChange} inputAdornmentText={"mg"}  />
                    <Input type="number" name="FiberContent" label="Fibre Content" handleChange={handleChange} inputAdornmentText={"g"}  />
                    <Input type="number" name="SodiumContent" label="Sodium Content" handleChange={handleChange} inputAdornmentText={"mg"}  />
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
                        value={form.Keywords}
                        onAdd={(chip) => handleAddChip(chip)}
                        onDelete={(chip) => handleDeleteChip(chip)}
                    />
                    </div>
                    </div>
                    <h4>Ingredients : </h4>
                    <br/>
                    <h5 style={{fontWeight:'500'}}>Eg."500 gm flour" will be inputed as: Amount:500, Ingredient:g flour</h5>
                    <br/>
                    {/* <div className='time'> */}
                        {form.RecipeIngredientQuantities.map((input, index) => {
                            return (
                                // <div className="nomargin" key={index}>
                                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 0.2, sm: 2, md: 4 }} alignItems="center" key={index}>
                                {/* <div> */}
                                    <Input type="number" className="" name="RecipeIngredientQuantities" label={`Amount ${index+1}`} handleChange={event => handleIngreFormChange(event, index)}/>
                                    {/* <Input type="text" className="" name="unit" label="Unit" handleChange={event => handleIngreFormChange(event, index)}/> */}
                                    <Input type="text" className="" name="RecipeIngredientParts" label={`Ingredient ${index+1}`} handleChange={event => handleIngreFormChange(event, index)}/>
                                    
                                    
                                    </Stack>
                                    //  </div>
                                // </div>
                                // </div>   
                            )
                        })}
                        <br/>
                        <Stack direction="row" spacing={2}>
                        <Button size="small" color="inherit" onClick={addIngreFields} variant="contained">
                        Add Ingredient +
                        </Button>
                        <Button size="small" color="inherit" onClick={() => removeIngreFields(form.RecipeIngredientQuantities.length-1)} variant="contained">
                        Remove Ingredient -
                        </Button>
                        </Stack>
                        <br/>
                        <h4>Steps : </h4>
                    <br/>
                    <Grid container columnSpacing={2} alignItems="center">
                        {form.RecipeInstructions.map((input, index) => {
                            return (
                              
                                <Fragment key={index}>
                                  <Grid item xs={12}>
                                    <Input type="text" className="" name="stepsinfoindi" label={`Step ${index+1}`} handleChange={event => handleStepsFormChange(event, index)} fullWidth />
                                    </Grid>

                                </Fragment>   
                                ) 
                              })}
                              
                                    
                              </Grid>
                        <Stack direction="row" spacing={2}>
                        <Button size="small" color="inherit" onClick={addStepsFields} variant="contained">
                        Add Steps +
                        </Button>
                        <Button size="small" color="inherit" onClick={()=>removeStepsFields(form.RecipeInstructions.length-1)} variant="contained">
                        Remove Step -
                        </Button>
                        </Stack>
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

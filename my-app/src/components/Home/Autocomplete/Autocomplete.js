import React ,{useEffect,useState}from 'react'
import Autocompletee from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField';
import axios from 'axios'
import '../HomeStyles.css'
import { useNavigate } from 'react-router-dom';
const Autocomplete = () => {
    // const [queryText, setQueryText] = useState('')
	const [searchResults, setSearchResults] = useState([])
    // useEffect(() => {
	// 	if (!queryText) {
	// 		setSearchResults([])

	// 	}else{
    //         ;(async () => {
    //             const url = 'http://localhost:5000/search'
    
    //             const { data } = await axios.get(url, {
    //                 params: {
    //                     name: queryText,
    //                 },
    //             })
    //             // var newdata=[]
    //             // for(var i in data){
    //             //     newdata.push(data[i].Name)
    //             // }
    //             // console.log(newdata)
    //             setSearchResults(data)
    //         })()
    //     }

		
	// }, [queryText])
    const onChangeone=async(e)=>{
        if(e.target.value){
            const url = 'http://localhost:5000/card/autocompletesearch'
            const { data } = await axios.get(url, {
                    params: {
                        name: e.target.value,
                    },
                })
             setSearchResults(data)   
        }
    }
   const navigate=useNavigate()
      
  return (
    <>
    <Autocompletee
        sx={{
            '& label.Mui-focused': {
                color: 'black',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'black',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'black',
                },
                '&:hover fieldset': {
                  borderColor: 'black',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'black',
                },
              },
        }}
        className='autocompletee'
        freeSolo
        filterOptions={(x)=>x}
        onChange={(e,value)=>navigate(`/recipe/${value?._id}`)}
        options={searchResults}
        getOptionLabel={(option) => option.Name}
        renderInput={(params) => <TextField {...params} hiddenLabel placeholder='Search Recipe...' variant="outlined" className='autocomplete-text' onChange={(e)=>onChangeone(e)}  />}
      />
    </>
  )
}

export default Autocomplete

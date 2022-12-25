import React,{useState} from 'react'
import { TextField,Typography } from '@material-ui/core';
import { convertnumber } from './convertnumber';

const Ingredients = ({card}) => {
    const [quantity,setQuantity]=useState(card?.RecipeServings|1)

  return (
    <div>
      <div className='quantity'>
        Quantity : &nbsp;
        <TextField name="quantity" variant="outlined" color='primary'  value={quantity} onChange={(e) => setQuantity( e.target.value )} />
        &nbsp; &nbsp;{card?.RecipeYield!=='NaN'?card?.RecipeYield.substr(card?.RecipeYield.indexOf(' ')+1):'people'}
      </div>
      <div className='ingredients'>
        <Typography variant="h4">Ingredients :</Typography>
        <div className='ingredients-list'>
            {
                card?.RecipeIngredientParts.map((ing,i)=>(
                    <Typography variant="h6" className='ingredients-item' key={i}>{((convertnumber((card.RecipeIngredientQuantities[i]))/(card?.RecipeServings | 1))*quantity).toFixed(2)} - {ing}</Typography>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Ingredients

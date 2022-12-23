import React,{useState} from 'react'
import { TextField,Typography } from '@material-ui/core';
const Ingredients = ({card}) => {
    const [quantity,setQuantity]=useState(card?.RecipeServings|1)
    const convertnumber=(ingg)=>{
        if(ingg==='NaN')return 1
        let index=ingg?.indexOf('-');
        if(index!=-1){
          ingg=ingg?.substr(index+1);
        }
        index=ingg?.indexOf(' ')
        let ingg1=ingg?.substr(0,index);
        let ingg2=ingg?.substr(index+1,ingg.length);
        if(index!=-1){
            
             index=ingg1?.indexOf('/');
          if(index!=-1){
            let numerator=Number(ingg1?.substr(0,index));
            let denominator=Number(ingg1?.substr(index+1,ingg1.length))
            ingg1=Number(numerator/denominator)
          } 
          
          index=ingg2?.indexOf('/');
          if(index!=-1){
            let numerator=Number(ingg2?.substr(0,index));
            let denominator=Number(ingg2?.substr(index+1,ingg2.length))
            ingg2=Number(numerator/denominator)
          }
          ingg=Number(ingg1)+Number(ingg2)
        }else{
        
        index=ingg?.indexOf('/');
        if(index!=-1){
            let numerator=ingg?.substr(0,index);
          let denominator=ingg?.substr(index+1,ingg.length)
          ingg=Number(numerator/denominator)
        }
        }
        return parseFloat(ingg).toFixed(3);
      }
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

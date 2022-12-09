// import React from "react";
// import "./CardStyles.css";
// // import veg from "../../images/dessert.jpg";
// // import nonveg from "../../images/dessert.jpg";
// import image from "../../images/dessert.jpg";

// const Card = () => {
//   return (
//     // <div className='image-list' style={{cursor:'pointer'}} >
//     <div
//       className="image-list"
//       style={{ cursor: "pointer" }}
//     >
//       <div className="containboth">
//         <div className="shadowa">
//           <div className="blurring dimmable imagee">
//             <img src={image} alt="img"></img>
//           </div>
//           <div className="wholeContent">
//             <div className="content">
//               <div style={{ display: "inline-block" }}>
//                 <a className="header" href="/hi">Hello</a>
//               </div>
//               {/* <img
//                 className="ui mini image"
//                 src={}
//               /> */}

//               <div className="meta">
//                 <i className="clock icon"></i>
//                 5mins <span></span> <i className="fire icon"></i>
//                 5kcal
//               </div>
//             </div>
//             <div className="extra content">
//               <i className="users icon"></i>
//               5 Members
//               <span style={{ paddingLeft: "20px" }}></span>
//               <span className="carbs tooltip">
//                 <span className="tooltiptext">5g Net Carbs</span>
//               </span>
//               5g<span style={{ padding: "3px" }}></span>
//               <span className="proteins tooltip">
//                 <span className="tooltiptext">5g Proteins</span>
//               </span>
//               5g<span style={{ padding: "3px" }}></span>
//               <span className="fats tooltip">
//                 <span className="tooltiptext">5g Fats</span>
//               </span>
//               5g
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import './CardStyles.css'
import {BiTimer} from 'react-icons/bi'
import {FaFireAlt} from 'react-icons/fa'
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';
export default function ActionAreaCard({card}) {
  
  return (
    <Link className='recipecard' to={`/recipe/${card._id}`}>
    <Card className="card">
      <CardActionArea>
        <CardMedia className='card-media'
          component="img"
          height="200"
          image={card.Images[0]}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h6" component="div" align="left">
            {card.Name}
          </Typography>
          <div className="second-line">
          <Rating name="half-rating" value={card.AggregatedRating} precision={0.5} readOnly />&nbsp;&nbsp;
          <span className='rating-count'>{card.ReviewCount} ratings</span>
          </div>
          <div className='third-line'>
            <div className='timer-class'>
            <BiTimer className='timer-icon'/>
            {card.TotalTime}&nbsp;min
            </div>
            <div className='calories-class'>
            <FaFireAlt className='calories-icon'/>
            {card.Calories} calories
            </div>
            <div className='tooltip-div'>
            <span style={{ paddingLeft: "20px" }}></span>
               <span className="carbs tooltip">
                 <span className="tooltiptext carbs-tooltiptext">{card.CarbohydrateContent}g Net Carbs</span>
               </span> 
               {card.CarbohydrateContent}g&nbsp;&nbsp;<span style={{ padding: "3px" }}></span>
             <span className="proteins tooltip">
               <span className="tooltiptext proteins-tooltiptext">{card.ProteinContent}g Proteins</span>
               </span>
               {card.ProteinContent}g&nbsp;&nbsp;<span style={{ padding: "3px" }}></span>
               <span className="fats tooltip">
                 <span className="tooltiptext fats-tooltiptext">{card.FatContent}g Fats</span>
               </span>
               {card.FatContent}g
               &nbsp;
               &nbsp;
               &nbsp;
            </div>
          </div>

        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}

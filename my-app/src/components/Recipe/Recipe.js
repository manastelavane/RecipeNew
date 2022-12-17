import React,{useEffect,useState} from 'react'
// import image2 from '../../images/beverages.jpg' 
import './Recipe.css'
import { Rating } from '@mui/material';
import {BiTimer} from 'react-icons/bi'
import { Doughnut} from "react-chartjs-2";
// import VideoDetail from '../Video/VideoDetail'
// import VideoList from '../Video/VideoList'
// import useVideos from '../Video/hooks/useVideos';
import { useDispatch, useSelector } from 'react-redux';
import { getCard,newComment,getRecommendSearch } from '../../actions/cards';
import Navbar from '../Navbar/Navbar';
import { TextField,Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
// import CommentsCard from './CommentsCard.js';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
  } from "@material-ui/core";
import CommentsCard from './CommentsCard.js';
import ActionAreaCard from '../Card/Card';
//   import { Rating } from "@material-ui/lab";
const Recipe = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    console.log(user)
    const { id } = useParams();
    const dispatch = useDispatch();
    // let {card}={
    //     _id:323,
    //     Name:"manas",
    //     CookTime:212,
    //     PrepTime:232,
    //     TotalTime:232,
    //     Description:"sdnbadhad",
    //     Images:["https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/45/80/9/MwuCd6HpQ5mDvn4OLRkA_0S9A9886.jpg"],
    //     RecipeCategory:"Vhivken",
    //     Keywords:["chsiai","snjdd"],
    //     CarbohydrateContent:424,
    //     ProteinsContent:434,
    //     FatContent:343
    // }
    const { card,isLoading,recommend} = useSelector((state) => state.cards);
    
    const { success, error: reviewError } = useSelector((state) => state.newCommentReducer);
    console.log(card?.Keywords.join(','))
    useEffect(() => {
        dispatch(getCard(id));
      }, [id,dispatch,success,reviewError]);
    useEffect(() => {
        if(card){
            dispatch(getRecommendSearch({ Keywords: card?.RecipeIngredientParts.join(',') ,category:card?.RecipeCategory}));
        }
      }, [dispatch,card]);

    //   useEffect(()=>{
    //     setSelectedVideo(videos?.length===0?null:videos[0]);
    //   },[search,dispatch])
    
    //   console.log(card)
    //   const [selectedVideo,setSelectedVideo]=useState(null)
  
  const [quantity,setQuantity]=useState(card?.RecipeServings)
  const [curcomment,setCurcomment]=useState('')
  const [rating,setRating]=useState(0)
  const [open, setOpen] = useState(false);
  const commentSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", curcomment);
    myForm.set("CardId", card?._id);
    myForm.set("UserId", user?.result?._id);
    myForm.set("UserName", user?.result?.name);

    dispatch(newComment(myForm));

    setOpen(false);
  };
  
//   const [videos,search]=useVideos(`${card!==undefined?card?.Name:'paneer'} food recipe english`)
      if (isLoading) {
        return (
          <>
            Loading
          </>
        );
      }
    // console.log(card)
    

  
    // console.log("videos",videos);
    // console.log("search",search)
    // console.log("card",card?.Name)
    const doughnutState = {
        labels: ["Carbs", "Proteins","Fats"],
        datasets: [
          {
            backgroundColor: ["#f94642", "#3177bb","#fda120"],
            hoverBackgroundColor: ["#ff7f7d","#3177bb", "#fda120"],
            data: [card?.CarbohydrateContent,card?.ProteinContent
                ,card?.FatContent],
          },
        ],
      };
      const submitCommentToggle = () => {
        open ? setOpen(false) : setOpen(true);
      };
    console.log("rec",recommend)
    //   const reviewSubmitHandler = () => {
    //     const myForm = new FormData();
    
    //     myForm.set("rating", rating);
    //     myForm.set("comment", comment);
    //     myForm.set("productId", match.params.id);
    
    //     dispatch(newReview(myForm));
    
    //     setOpen(false);
    //   };
    let recommendedCards = recommend.filter(({ _id }) => _id !== card._id);
    recommendedCards=recommendedCards.slice(0, Math.min(4,recommendedCards.length));
  return (
    <>
    <Navbar/>
    <section className='recipe-header'>
        <div className='main-content'>
            <div className='outer-two-container'>
                <div className='two-container'>
                    <div className='two-container-content'>
                        <div className='two-container-content-time'>
                            <ul className='cooking-times'>
                                <li className='cooking-times-items'>
                                    <div className='time'>
                                        <div className='time__label'>
                                            <p className='time-label'>PREP TIME</p>
                                        </div>
                                        <div className='time__value'>
                                            <div className='time-value-icon'>
                                                <BiTimer className='timer-icon'/>
                                            </div>
                                            <p className='time-value'>
                                                {card?.PrepTime}&nbsp; 
                                                <span className='time-value__unit'>min</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className='cooking-times-items'>
                                    <div className='time'>
                                        <div className='time__label'>
                                            <p className='time-label'>COOK TIME</p>
                                        </div>
                                        <div className='time__value'>
                                            <div className='time-value-icon'>
                                                <BiTimer className='timer-icon'/>
                                            </div>
                                            <p className='time-value'>
                                                 {card?.CookTime}&nbsp; 
                                                <span className='time-value__unit'>min</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className='cooking-times-items'>
                                    <div className='time'>
                                        <div className='time__label'>
                                            <p className='time-label'>READY TIME</p>
                                        </div>
                                        <div className='time__value'>
                                            <div className='time-value-icon'>
                                                <BiTimer className='timer-icon'/>
                                            </div>
                                            <p className='time-value'>
                                                {card?.TotalTime}&nbsp; 
                                                <span className='time-value__unit'>min</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='two-container-content-header'>
                            <h1 style={{color:"black"}} className='header__header'>{card?.Name}</h1>
                            
                            <div className='header__rating'>
                                <div className='header__rating'>
                                    <Rating name="half-rating" value={card?.AggregatedRating} precision={0.5} readOnly />&nbsp;&nbsp;
                                    <span className='rating-count'>{card?.CommentsCount} ratings</span>
                                </div>      
                            </div>

                            <div className='header__text'>
                            {card?.Description}
                               </div>
                            <div className="tags">  
                                {
                                    card?.Keywords.map((keyword)=>(
                                        <span key={keyword}>{keyword}</span>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className='two-container-image'>
                    <img src={card?.Images[0]} alt="imageOfRecipe" className="recipe-image"/>
                    
                    </div>
                </div>
        {/* hello */}
            </div>
            <div className='nutrients-info-container'>
                <div className='nutrients-info'>
                    <div className='nutrients'>
                        <ul className='ul-nutrients'>
                            <li className='li-nutrients'>Carbohydrates : {card?.CarbohydrateContent}g</li>
                            <li className='li-nutrients'>Sugar Content : {card?.SugarContent}g</li>
                            <li className='li-nutrients'>Proteins : {card?.ProteinContent}g</li>
                            <li className='li-nutrients'>Cholestrol Content : {card?.CholesterolContent}mg</li>
                            <li className='li-nutrients'>Fats : {card?.FatContent}g</li>
                            <li className='li-nutrients'>Fibre Content : {card?.FiberContent}g</li>
                            <li className='li-nutrients'>Calories : {card?.Calories}cal</li>
                            <li className='li-nutrients'>Sodium Content : {card?.SodiumContent}mg</li>
                        </ul>
                    </div>
                </div>
                <div className='graph'>
                <Doughnut data={doughnutState} />
                
                </div>
                
            </div>
            {/* <div className='grid'>
        <div className='row'> 
          <div className='eleven-wide'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='five-wide'>
            <VideoList videos={videos} onVideoSelect={(video)=>setSelectedVideo(video)}/>
          </div>
        </div>
      </div> */}
      <div className='quantity'>
        Quantity : &nbsp;
        <TextField name="quantity" variant="outlined" color='primary'  value={quantity} onChange={(e) => setQuantity( e.target.value )} />
      </div>
      <div className='ingredients'>
      <Typography variant="h4">Ingredients :</Typography>
      <div className='ingredients-list'>
        {
            card?.RecipeIngredientParts.map((ing,i)=>(
                <Typography variant="h6" className='ingredients-item' key={i}>{card.RecipeIngredientQuantities[i]} - {ing}</Typography>
            ))
            
        }
      </div>
      </div>
      <div className='steps'>
        <Typography variant="h4">Recipe Steps :</Typography>
        <div className='steps-box'>
            <ol>
            {
                card?.RecipeInstructions.map((rec)=>(
                    <li key={rec}>{rec}</li>
                ))   
            }
            </ol>
        </div>
      </div>
      <div className='myreview-button'>

      <button onClick={submitCommentToggle} className="submitReview">
                Your Comment
              </button>
      </div>
      <h3 className="commentsHeading">Comments</h3>
    <Dialog
    aria-labelledby="simple-dialog-title"
    open={open}
    onClose={submitCommentToggle}
    >
    <DialogTitle>Submit Your Comment</DialogTitle>
    <DialogContent className="submitDialog">
        <Rating
        onChange={(e) => setRating(parseInt(e.target.value))}
        value={parseInt(rating)}
        size="large"
        />

        <textarea
        maxLength='250'
        className="submitDialogTextArea"
        cols="30"
        rows="5"
        value={curcomment}
        onChange={(e) => setCurcomment(e.target.value)}
        ></textarea>
    </DialogContent>
    <DialogActions>
        <Button onClick={submitCommentToggle} color="secondary">
        {/* <Button onClick={submitReviewToggle} color="secondary"> */}
        Cancel
        </Button>
        <Button onClick={commentSubmitHandler} color="primary">
        Comment
        </Button>
    </DialogActions>
    </Dialog>
    {card?.Comments && card.Comments[0] ? (
            <div className="comments">
              {card.Comments &&
                card.Comments.map((comment) => (
                  <CommentsCard key={comment._id} comment={comment} />
                ))}
            </div>
          ) : (
            <p className="noComments">No Comments Yet</p>
          )}
            <div className='recommended'>
                <Typography variant="h4">Recommendation :</Typography>
                <div className='card-container'>
                {
                    (recommendedCards.length>0) && recommendedCards?.map((rec,i)=>(
                      <ActionAreaCard card={rec} key={rec._id} />
                    ))
                }
                </div>
            </div>
           </div>
    </section>
    </>
  )
}

export default Recipe

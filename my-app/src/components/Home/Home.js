import React ,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getCards } from '../../actions/cards'
import './HomeStyles.css'
// import {BsFilter} from 'react-icons/bs'
import ActionAreaCard from '../Card/Card'
// import image2 from '../../images/beverages.jpg' 
// import image1 from '../../images/Mainrecipe.jpg' 
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Navbar from '../Navbar/Navbar'
const Home = () => {
  const options = ['All','< 15 Mins', '< 30 Mins', '< 4 Hours', '< 60 Mins', 'Apple', 'Asian', 'Australian', 'Bar Cookie', 'Beans', 'Berries', 'Beverages', 'Black Beans', 'Breads', 'Breakfast', 'Brown Rice', 'Brunch', 'Cajun', 'Canadian', 'Candy', 'Cauliflower', 'Cheese', 'Cheesecake', 'Chicken', 'Chicken Breast', 'Chicken Thigh & Leg', 'Chinese', 'Chowders', 'Christmas', 'Chutneys', 'Clear Soup', 'Corn', 'Crab', 'Curries', 'Dessert', 'Drop Cookies', 'European', 'For Large Groups', 'Frozen Desserts', 'Fruit', 'Gelatin', 'Grains', 'Greek', 'Greens', 'Gumbo', 'Halibut', 'Ham', 'Healthy', 'High Protein', 'Japanese', 'Jellies', 'Kid Friendly', 'Lactose Free', 'Lamb/Sheep', 'Lemon', 'Lentil', 'Long Grain Rice', 'Low Cholesterol', 'Low Protein', 'Lunch/Snacks', 'Mango', 'Meat', 'Meatballs', 'Meatloaf', 'Mexican', 'Nuts', 'One Dish Meal', 'Onions', 'Oranges', 'Pasta Shells', 'Penne', 'Peppers', 'Pie', 'Pineapple', 'Pork', 'Potato', 'Potluck', 'Poultry', 'Punch Beverage', 'Quick Breads', 'Rice', 'Roast Beef', 'Salad Dressings', 'Sauces', 'Savory', 'Savory Pies', 'Scones', 'Shakes', 'Short Grain Rice', 'Smoothies', 'Sourdough Breads', 'Southwest Asia (middle East)', 'Soy/Tofu', 'Spaghetti', 'Spinach', 'Spreads', 'Steak', 'Stew', 'Stocks', 'Strawberry', 'Summer', 'Tarts', 'Thai', 'Tilapia', 'Tuna', 'Veal', 'Vegan', 'Vegetable', 'Very Low Carbs', 'Weeknight', 'White Rice', 'Whole Chicken', 'Yam/Sweet Potato', 'Yeast Breads']
  const [inputValue, setInputValue] = useState(options[0]);
  const [category, setCategory] = useState('All');
  // const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCards(category));
  }, [ dispatch,category]);
  const cards = useSelector((state) => state.cards);

  console.log(cards?.postMessages)
  console.log("Hi")
  return (
    <>
    <Navbar/>
    <div className='home'>
      <div className='hero'>
        <div className='hero-content'>

      <h3 style={{textShadow:"2px 1px black"}}>Explore over <b style={{textShadow:"1px 1px black"}}>60,000+</b> Best Recipes over the world.</h3>
      <br/>
      <div className="hero-input">
            
            <input className='hero-search' placeholder='Search Recipe by name...'></input>
            
        <button><i className="fa fa-search icon" ></i> </button>
      </div>
      <br/>
      <h6 style={{textShadow:"2px 1px black",textAlign:"center"}}>Can't think of any Recipe? <span className='lightfont'>Try out this Popular tags.</span></h6>
      <div className="tags">
        <span onClick={()=>setCategory('Dessert')}>Dessert</span>
        <span onClick={()=>setCategory('< 60 Mins')}>Quick & Easy</span>
        <span onClick={()=>setCategory('Lunch/Snacks')}>Lunch/Snacks</span>
        <span onClick={()=>setCategory('Chicken')}>Chicken</span>
      </div>
        </div>
      </div>
      <br/>
    {/* <div className="maincontainer">
        
        <div>
      <i className="fa-solid fa-arrow-left"></i>
      <span className='all'>
    <BsFilter/>
    All
      </span>
        </div>
      <div className='container example-one'>
      
        <header className='example-one-header scroll'>
        
            <nav className='vertical-align-middle'>
                <span className='nav-item'>
                    Recipes Home
                </span>
                <span className='nav-item'>
                    All Quick & Easy Recipes
                </span>
                <span className='nav-item'>
                    All Main Dishes
                </span>
                <span className='nav-item'>
                    All Breakfast Dishes
                </span>
                <span className='nav-item'>
                    All Lunch Dishes
                </span>
                <span className='nav-item'>
                    All Beverages Recipes
                </span>
                <span className='nav-item'>
                    All Salad Recipes
                </span>
                <span className='nav-item'>
                    All Snacks Recipes
                </span>
                <span className='nav-item'>
                    All Vegan Recipes
                </span>
                <span className='nav-item'>
                    All Dessert Recipes
                </span>
                <span className='nav-item'>
                    All Slides Recipes
                </span>
                <span className='nav-item'>
                    All Vegetarian Recipes
                </span>
                <span className='nav-item'>
                    All Paleo Recipes
                </span>
                <span className='nav-item'>
                    All Gluten Free Recipes
                </span>
                
            </nav>
        </header>
        </div>
      <i className="fa-solid fa-arrow-right"></i>
      </div> */}
      <div className="autocomplete-div">
      <Autocomplete
      className='autocomplete'
        value={category}
        onChange={(event, newCategory) => {
          setCategory(newCategory);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="disable-clearable"
        disableClearable
        options={options}
        sx={{ width: 500 }}
        renderInput={(params) => <TextField {...params} value='All' label="Select Category" />}
      />
      </div>
      <div className='card-container'>
        {cards?.postMessages &&
              cards?.postMessages.map((card) => (
                <ActionAreaCard card={card} key={card._id} />
              ))
        }
      </div>
    </div>
    </>
  )
}

export default Home
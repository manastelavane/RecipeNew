import mongoose from 'mongoose';

const recSchema = mongoose.Schema({
    level_0:{type:Number,default:0},
    index:Number,
    RecipeId:{type:Number,default:0},
    Name:String,
    AuthorId:Number,
    AuthorName:String,
    CookTime:String,
    PrepTime:String,
    TotalTime:String,
    DatePublished:String,
    Description:String,
    Images:[String],
    RecipeCategory:String,
    Keywords:[String],
    RecipeIngredientQuantities:[String],
    RecipeIngredientParts:[String],
    AggregatedRating:{type:Number,default:0},
    ReviewCount:{type:Number,default:0},
    Calories:Number,
    FatContent:Number,
    SaturatedFatContent:Number,
    CholesterolContent:Number,
    SodiumContent:Number,
    CarbohydrateContent:Number,
    FiberContent:Number,
    SugarContent:Number,
    ProteinContent:Number,
    RecipeServings:Number,
    RecipeYield:String,
    RecipeInstructions:[String]

    
},{collection:'SortRec'});

var Rec =  mongoose.model('SortRec', recSchema);
export default Rec;

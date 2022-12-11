import express from 'express';
// import mongoose from 'mongoose';

import SortRec from '../models/Rec.js'

const router = express.Router();


export const getCards = async (req, res) => { 
    try {
        // console.log(req.query);
        const {category,page}=req.query;
        // console.log("i got",category,page);
        const category1 = (category!="All")
        ? {
            RecipeCategory: category,
            }
        : {};
        const LIMIT = 10;
        const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page
    
        const total = await SortRec.countDocuments(category=="All"?{}:{RecipeCategory:category});
        // console.log(category1)
        const cardMessages = await SortRec.find(category1).limit(LIMIT).skip(startIndex);
        // console.log(postMessages.length)  
        // console.log(productsCount)
        // console.log(category);
        // console.log(Number(page));
        // console.log(Math.ceil(total / LIMIT));
        res.status(200).json({data:cardMessages, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
    } catch (error) {
        res.status(404).json({ message: error });
    }
}
export const getCard = async (req, res) => { 
    const { id } = req.params;
    // console.log(id)
    try {
        const card = await SortRec.findById(id);
        // console.log(card)
        res.status(200).json(card);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createCard = async (req, res) => {
    const card = req.body;

    const newRec = new SortRec({ ...card })

    try {
        await newRec.save();

        res.status(201).json(newRec );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const createCardComment = async (req, res) => {
    const { rating, comment, CardId,UserId,UserName } = req.body;
    // console.log("cardid",CardId)
    // console.log("req",UserId)
    // console.log(rating,comment,CardId)
    const review = {
      user: UserId,
      name:UserName,
      rating: Number(rating),
      comment,
    };
    // console.log(review)
  
    const card = await SortRec.findById(CardId);
    // console.log(card)
    const isReviewed = card.Comments.find(
      (rev) => rev?.user?.toString() === UserId.toString()
    );
    // console.log(UserId._id)
  
    if (isReviewed) {
      card.Comments.forEach((rev) => {
        if (rev.user.toString() === UserId.toString())
          (rev.rating = rating), (rev.comment = comment);
      });
    } else {
      card.Comments.push(review);
      card.CommentsCount = card.Comments.length;
    }
  
    let avg = 0;
  
    card.Comments.forEach((rev) => {
      avg += rev.rating;
    });
  
    card.AggregatedRating = (avg+card.AggregatedRating) / (card.Comments.length+1);
  
    await card.save({ validateBeforeSave: false });
  
    res.status(200).json({
      success: true,
    });
  };

export const getCardsBySearch = async (req, res) => {
    // console.log("serverrr")
    const { Keywords } = req.query;
    // console.log("server",Keywords)
    try {
        // const title = new RegExp(searchQuery, "i");
        const cards = await SortRec.find({  Keywords: { $in: Keywords.split(',') } }).limit(4);
        // cards.map((card)=>{
        //     console.log(card.Name)
        // })
        res.json({data:cards });
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

// export const getCard = async (req, res) => { 
//     // const { id } = req.params;

//     // try {
//     //     const post = await Apple.findById(id);
//         c
//     //     res.status(200).json(post);
//     // } catch (error) {
//     //     res.status(404).json({ message: error.message });
//     // }
// }   

// export const createCard = async (req, res) => {
//     // const post = req.body;

//     // const newApple = new Apple({ ...post, creator: req.userId, createdAt: new Date().toISOString() })

//     // try {
//     //     await newApple.save();

//     //     res.status(201).json(newApple);
//     // } catch (error) {
//     //     res.status(409).json({ message: error.message });
//     // }
// }

// export const updateCard = async (req, res) => {
//     // const { id } = req.params;
//     // const { title, message, creator, selectedFile, tags } = req.body;
    
//     // if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

//     // const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

//     // await Apple.findByIdAndUpdate(id, updatedPost, { new: true });

//     // res.json(updatedPost);
// }

// export const deleteCard = async (req, res) => {
//     // const { id } = req.params;

//     // if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

//     // await Apple.findByIdAndRemove(id);

//     // res.json({ message: "Post deleted successfully." });
// }

// export const likeCard = async (req, res) => {
//     // const { id } = req.params;

//     // if (!req.userId) {
//     //     return res.json({ message: "Unauthenticated" });
//     //   }

//     // if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
//     // const post = await Apple.findById(id);

//     // const index = post.likes.findIndex((id) => id ===String(req.userId));

//     // if (index === -1) {
//     //   post.likes.push(req.userId);
//     // } else {
//     //   post.likes = post.likes.filter((id) => id !== String(req.userId));
//     // }

//     // const updatedPost = await Apple.findByIdAndUpdate(id, post, { new: true });

//     // res.status(200).json(updatedPost);
// }

// export const commentCard = async (req, res) => {
//     // const { id } = req.params;
//     // const { value } = req.body;

//     // const post = await Apple.findById(id);

//     // post.comments.push(value);

//     // const updatedPost = await Apple.findByIdAndUpdate(id, post, { new: true });

//     // res.json(updatedPost);
// };

export default router;
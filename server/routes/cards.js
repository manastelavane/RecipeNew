import express from 'express';

import { getCards, createCard } from '../controllers/cards.js';
// import { getCards, getCardsBySearch, getCard, createCard, updateCard, likeCard, commentCard, deleteCard } from '../controllers/cards.js';

const router = express.Router();
// import auth from "../middleware/auth.js";

// router.get('/search', getCardsBySearch);
router.get('/', getCards);
router.post('/',  createCard);
// router.get('/:id', getCard);

// router.post('/', auth,  createCard);
// router.patch('/:id', auth, updateCard);
// router.delete('/:id', auth, deleteCard);
// router.patch('/:id/likeCard', auth, likeCard);
// router.post('/:id/commentCard', commentCard);
export default router;
import { FETCH_ALL } from '../constants/actionTypes';

const cards=(cards = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    default:
      return cards;
  }
};
export default cards;
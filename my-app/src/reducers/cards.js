import { FETCH_ALL,FETCH_CARD,START_LOADING,END_LOADING,NEW_COMMENT_REQUEST,NEW_COMMENT_SUCCESS,NEW_COMMENT_FAIL } from '../constants/actionTypes';

export const cards=(state = {isLoading:true,cards:[]}, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true }
    case END_LOADING:
      return { ...state, isLoading: false }
    case FETCH_ALL:
      return {...state,cards:action.payload.data,currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages};
    case FETCH_CARD:
      return { ...state, card: action.payload.card };
    default:
      return state;
  }
};
export const newCommentReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_COMMENT_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_COMMENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    
    default:
      return state;
  }
};

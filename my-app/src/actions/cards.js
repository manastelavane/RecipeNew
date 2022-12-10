import { FETCH_ALL,FETCH_CARD,START_LOADING,END_LOADING,NEW_COMMENT_REQUEST,NEW_COMMENT_SUCCESS,NEW_COMMENT_FAIL} from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getCards = (category,page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data :{data,currentPage, numberOfPages}} = await api.fetchCards(category,page);
    // console.log("data1",data);
    dispatch({ type: FETCH_ALL, payload:{data ,currentPage, numberOfPages}});
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const getCard = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    
    const { data } = await api.fetchCard(id);
    // console.log("onedata",data)
    dispatch({ type: FETCH_CARD, payload: { card:data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const newComment = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_COMMENT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await api.postComment(reviewData,config);
    // const { data } = await axios.put(`/api/v1/review`, reviewData, config);

    dispatch({
      type: NEW_COMMENT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Download data from the specified URL.
 *
 * @async
 * @function downloadData
 * @param {string} url - The URL to download from.
 * @return {Promise<string>} The data from the URL.
 */

import { FETCH_ALL,FETCH_CARD,FETCH_NEW_ALL,START_LOADING,START_RECOMMEND_LOADING,END_LOADING,NEW_COMMENT_REQUEST,NEW_COMMENT_SUCCESS,FETCH_BY_SEARCH, CREATE} from '../constants/actionTypes';
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
export const getNewCards = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data :{data,currentPage, numberOfPages}} = await api.fetchNewCards(page);
    // console.log("data1",data);
    dispatch({ type: FETCH_NEW_ALL, payload:{data ,currentPage, numberOfPages}});
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

export const getRecommendSearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_RECOMMEND_LOADING });
    const { data :{data}} = await api.getRecommendSearch(searchQuery);
    console.log(data)
    dispatch({ type: FETCH_BY_SEARCH, data});
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const createCard = (formData) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createCard(formData);

    dispatch({ type: CREATE, data });
  } catch (error) {
    console.log(error);
  }
};

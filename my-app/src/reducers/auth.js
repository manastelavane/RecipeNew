import { IoConstructOutline } from 'react-icons/io5';
import * as actionType from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

      return { ...state, authData: action.data, loading: false, errors: null };
    case actionType.LOGOUT:
      localStorage.clear();
      return { ...state, authData: null, loading: false, errors: null };
    case actionType.UPDATE:
      return { ...state, loading: true };
    case actionType.UPDATE_SUCCESS:
      // console.log("red",action?.payload);
      let userdata=JSON.parse(localStorage.getItem('profile'))
      // console.log("res",userdata?.result?.name)
      userdata.result.name=action.payload.name;
      userdata.result.selectedFile=action.payload.selectedFile;
      // console.log("data",userdata)
      localStorage.clear();
      // userdata?.result?.name=action?.data?.name;
      // userdata?.result?.selectedFile=action?.data?.selectedFile;
      // console.log("newdata",userdata)
      localStorage.setItem('profile', JSON.stringify({ ...userdata }));
      return { ...state, authData: userdata, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;

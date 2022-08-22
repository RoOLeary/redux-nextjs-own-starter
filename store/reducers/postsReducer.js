import { SET_DATA, SAMPLE_ERROR, SHOW_BERLS, IS_LOADING } from "../types";

const initialState = {
  data: [],
  loading: true,
  berls: 'Testing'
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case SET_DATA:
      // console.log(action.payload);
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
      

    case SAMPLE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    
    case SHOW_BERLS:
      // console.log(action.payload)
      return {
        ...state,
        loading: false,
        berls: action.payload,
      };

    case IS_LOADING:
      console.log(action.payload)
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};

export default postsReducer;

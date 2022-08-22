import { JUST_ANOTHER } from "../types";

const initialState = {
  another: 'Here I am. Let it be known I was a thing for a few seconds before the state updated.',
};

const anotherReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case JUST_ANOTHER:
      // console.log(action.payload);
      return {
        ...state,
        another: action.payload
      };

    default:
      return state;
  }
};

export default anotherReducer;

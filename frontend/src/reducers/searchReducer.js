import {
  AUTOCOMPLETE_RESULTS,
  GET_DISCOGS_CATID,
  CLEAR_DISCOGS_CATID,
  SET_SEARCH_LOADING
} from '../actions/types';

const initialState = {
  searchResults: [],
  trackResults: null,
  artistResults: null,
  albumResults: null,
  loading: false,
  discogsCatId: null,
  error: null
};

const searchReducer = (state = initialState, action) => {
  console.log('searchReducer state now: ', state);
  console.log('searchReducer action', action);
  console.log('searchReducer action.type', action.type);

  switch (action.type) {
    case AUTOCOMPLETE_RESULTS:
      return {
        ...state,
        searchResults: action.data,
        loading: false
      };
    case SET_SEARCH_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_DISCOGS_CATID:
      return {
        ...state,
        discogsCatId: action.data
      };
    case CLEAR_DISCOGS_CATID:
      return {
        ...state,
        discogsCatId: null
      };
    default:
      return state;
  }
};

export default searchReducer;

import { FETCH_QUOTE, FETCH_QUOTE_LOADING } from '../actions/simpsonsAction';

const initialState = {
  quote: '',
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_QUOTE_LOADING:
      return { ...state, loading: true };
    case FETCH_QUOTE:
      return { ...state, quote: action.payload, loading: false };
    default:
      return state;
  }
}

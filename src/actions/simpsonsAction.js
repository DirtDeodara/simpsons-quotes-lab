import { getSimpsonsQuote } from '../services/simpsonsApi';

export const FETCH_QUOTE = 'FETCH_QUOTE';
export const FETCH_QUOTE_LOADING = 'FETCH_CHARACTER_LOADING';

export const fetchQuote = () => ({
  type: FETCH_QUOTE,
  payload: getSimpsonsQuote(),
  pendingType: FETCH_QUOTE_LOADING
});

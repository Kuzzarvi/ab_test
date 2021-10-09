import { CardState, CardAction, CardActionTypes } from "../../types/cards";

const initialState = {
  cards: [],
  liked: false,
  loading: false,
  error: null,
};

export const cardReducer = (
  state: CardState = initialState,
  action: CardAction
): CardState => {
  switch (action.type) {
    case CardActionTypes.FETCH_CARD:
      return { ...state, loading: true };

    case CardActionTypes.FETCH_CARD_SUCCES:
      return { ...state, loading: false, cards: action.payload };

    case CardActionTypes.FETCH_CARD_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case CardActionTypes.CARD_LIKE:
      return {
        ...state,
        cards: state.cards.map((el) => {
          el.id === action.payload && (el.liked = !el.liked);
          return el;
        }),
      };

    case CardActionTypes.CARD_DEL:
      return {
        ...state,
        cards: state.cards.filter((el) => el.id !== action.payload),
      };

    case CardActionTypes.SHOW_LIKED_CARDS:
      return {
        ...state,
        liked: action.payload,
      };

    default:
      return state;
  }
};

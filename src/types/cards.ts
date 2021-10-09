export enum CardActionTypes {
  FETCH_CARD = "FETCH_CARD",
  FETCH_CARD_SUCCES = "FETCH_CARD_SUCCES",
  FETCH_CARD_ERROR = "FETCH_CARD_ERROR",
  CARD_LIKE = "CARD_LIKE",
  CARD_DEL = "CARD_DEL",
  SHOW_LIKED_CARDS = "SHOW_LIKED_CARDS",
}

interface FetchCardsAction {
  type: CardActionTypes.FETCH_CARD;
}

interface FetchCardsSuccesAction {
  type: CardActionTypes.FETCH_CARD_SUCCES;
  payload: Array<CardType>;
}

interface FetchCardsErrorAction {
  type: CardActionTypes.FETCH_CARD_ERROR;
  payload: string;
}

interface CardLike {
  type: CardActionTypes.CARD_LIKE;
  payload: number;
}

interface CardDel {
  type: CardActionTypes.CARD_DEL;
  payload: number;
}

interface ShowLikedCards {
  type: CardActionTypes.SHOW_LIKED_CARDS;
  payload: boolean;
}

export interface CardType {
  image: string;
  liked: boolean;
  link: string;
  id: number;
}

export interface FoxCardType {
  card: CardType;
  liked: boolean;
}

export interface CardState {
  cards: Array<CardType>;
  liked: boolean;
  loading: boolean;
  error: null | string;
}

export type CardAction =
  | FetchCardsAction
  | FetchCardsErrorAction
  | FetchCardsSuccesAction
  | CardLike
  | CardDel
  | ShowLikedCards;

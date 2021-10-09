import { Dispatch } from "redux";
import { CardActionTypes, CardAction, CardType } from "../../types/cards";
import api from "../../plugins/api";

export const fetchCards = () => {
  return async (dispatch: Dispatch<CardAction>): Promise<void> => {
    try {
      dispatch({ type: CardActionTypes.FETCH_CARD });

      let res: Array<Promise<CardType>> = [];
      for (let i = 0; i < 6; i++) {
        res.push(api.get("/floof/"));
      }

      let result: Array<CardType> = await Promise.all(res);

      let arrayId: Array<number> = [];

      result = result.map((el, i) => {
        let idMatch: RegExpMatchArray | null = el.link.match(/\d+/);
        if (idMatch) {
          if (arrayId.includes(+idMatch[0])) {
            el.id = +idMatch[0] * ++i * 1001;
          } else {
            el.id = +idMatch[0];
            arrayId.push(+idMatch[0]);
          }
        } else {
          el.id = ++i * 1000;
        }
        el.liked = false;
        return el;
      });

      dispatch({
        type: CardActionTypes.FETCH_CARD_SUCCES,
        payload: result,
      });
    } catch (e) {
      dispatch({
        type: CardActionTypes.FETCH_CARD_ERROR,
        payload: "Произошла ошибка при запросе картинок",
      });
    }
  };
};

export const likeCard = (id: number) => {
  return (dispatch: Dispatch<CardAction>) => {
    dispatch({
      type: CardActionTypes.CARD_LIKE,
      payload: id,
    });
  };
};

export const delCard = (id: number) => {
  return (dispatch: Dispatch<CardAction>) => {
    dispatch({
      type: CardActionTypes.CARD_DEL,
      payload: id,
    });
  };
};

export const showLikedCards = (liked: boolean) => {
  return (dispatch: Dispatch<CardAction>) => {
    dispatch({
      type: CardActionTypes.SHOW_LIKED_CARDS,
      payload: liked,
    });
  };
};

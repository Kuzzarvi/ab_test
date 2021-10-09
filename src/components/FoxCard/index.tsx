import React, { FC } from "react";
import { FoxCardType } from "../../types/cards";
import { useActions } from "../../hooks/useActions";

import "./FoxCard.css";

import Icon from "@mdi/react";
import { mdiCardsHeart, mdiDelete } from "@mdi/js";

const FoxCard: FC<FoxCardType> = ({ card, liked }) => {
  const { likeCard, delCard } = useActions();

  return (
    <div className={liked && !card.liked ? "noDisplay" : "foxCard"}>
      <img src={card.image} alt="IseeWinner"></img>
      <div className="description">
        <span className="foxCardText">id:{card.id}</span>
        <div onClick={() => likeCard(card.id)}>
          <Icon
            className="icon"
            path={mdiCardsHeart}
            size={1}
            color={card.liked ? "red" : "gray"}
          />
        </div>
        <div onClick={() => delCard(card.id)}>
          <Icon className="icon" path={mdiDelete} size={1} color="black" />
        </div>
      </div>
    </div>
  );
};

export default FoxCard;

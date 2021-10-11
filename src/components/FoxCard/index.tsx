import React, { FC, memo } from "react";
import { FoxCardType } from "../../types/cards";
import { useActions } from "../../hooks/useActions";

import "./FoxCard.css";

import Icon from "@mdi/react";
import { mdiCardsHeart, mdiDelete } from "@mdi/js";

const FoxCard: FC<FoxCardType> = ({ imageUrl, isLiked, showOnlyLiked, id }) => {
  const { likeCard, delCard } = useActions();

  return (
    <div className={showOnlyLiked && !isLiked ? "noDisplay" : "foxCard"}>
      <img src={imageUrl} alt="IseeWinner"></img>
      <div className="description">
        <span className="foxCardText">id:{id}</span>
        <div onClick={() => likeCard(id)}>
          <Icon
            className="icon"
            path={mdiCardsHeart}
            size={1}
            color={isLiked ? "red" : "gray"}
          />
        </div>
        <div onClick={() => delCard(id)}>
          <Icon className="icon" path={mdiDelete} size={1} color="black" />
        </div>
      </div>
    </div>
  );
};

function areEqual(
  { isLiked: prevIsLiked, showOnlyLiked: prevShowOnlyLiked }: FoxCardType,
  { isLiked: nextIsLiked, showOnlyLiked: nextShowOnlyLiked }: FoxCardType
) {
  return prevShowOnlyLiked === nextShowOnlyLiked
    ? prevIsLiked === nextIsLiked
    : nextIsLiked;
}

export default memo(FoxCard, areEqual);

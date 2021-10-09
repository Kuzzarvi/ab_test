import React, { FC, useEffect, useMemo } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

import "./CardList.css";

import FoxCard from "../FoxCard";

const CardList: FC = () => {
  const { cards, liked, error, loading } = useTypedSelector(
    (state) => state.card
  );
  const { fetchCards, showLikedCards } = useActions();

  useEffect(() => {
    fetchCards();
  }, []);

  const noneCardsToDisplay: boolean = useMemo(() => {
    return (
      !!cards.length &&
      (liked ? !!cards.filter((el) => el.liked === liked).length : true)
    );
  }, [cards, liked]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error:{error}</h1>;
  }

  return (
    <>
      <div className="header">
        <label className="switch">
          <input
            type="checkbox"
            checked={liked}
            onChange={() => showLikedCards(!liked)}
          ></input>
          <span className="slider"></span>
        </label>
        <span className="checkboxText">liked</span>
      </div>

      <div className="foxTable">
        {noneCardsToDisplay ? (
          cards.map((card) => (
            <FoxCard card={card} liked={liked} key={card.id} />
          ))
        ) : (
          <div>IseeWinner</div>
        )}
      </div>
    </>
  );
};

export default CardList;

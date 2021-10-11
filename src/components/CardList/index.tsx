import React, { FC, useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

import "./CardList.css";

import FoxCard from "../FoxCard";

const CardList: FC = () => {
  const { cards, showOnlyLiked, error, loading } = useTypedSelector(
    (state) => state.card
  );
  const { fetchCards, showLikedCards } = useActions();

  useEffect(() => {
    fetchCards();
  }, []);

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
            checked={showOnlyLiked}
            onChange={() => showLikedCards(!showOnlyLiked)}
          ></input>
          <span className="slider"></span>
        </label>
        <span className="checkboxText">liked</span>
      </div>

      <div className="foxTable">
        {cards.length ? (
          cards.map((card) => (
            <FoxCard
              imageUrl={card.image}
              isLiked={card.isLiked}
              showOnlyLiked={showOnlyLiked}
              id={card.id}
              key={card.id}
            />
          ))
        ) : (
          <div>IseeWinner</div>
        )}
      </div>
    </>
  );
};

export default CardList;

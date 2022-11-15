import React from "react";

interface ICard {
  children?: React.ReactNode;
  onClickCard?: () => void;
}

const Card = (props: ICard) => {
  return (
    <div className="p-4 shadow-card rounded-lg flex" onClick={props.onClickCard}>{props.children}</div>
  );
};

export default Card;

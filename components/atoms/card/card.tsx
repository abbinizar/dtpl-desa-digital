import React from "react";

interface ICard {
  children?: React.ReactNode;
}

const Card = (props: ICard) => {
  return (
    <div className="p-4 shadow-card rounded-lg flex">{props.children}</div>
  );
};

export default Card;

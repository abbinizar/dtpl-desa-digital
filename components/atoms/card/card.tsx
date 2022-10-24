import React from "react";

interface ICard {
  children?: React.ReactNode;
}

const Card = (props: ICard) => {
  return <div className="p-4 shadow-lg rounded-lg flex">{props.children}</div>;
};

export default Card;

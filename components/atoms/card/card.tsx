import React from "react";

interface ICard {
  children?: React.ReactNode;
  onClick?: () => void;
}

const Card = (props: ICard) => {
  return (
    <div onClick={props.onClick} className="p-4 shadow-card rounded-lg flex">
      {props.children}
    </div>
  );
};

export default Card;

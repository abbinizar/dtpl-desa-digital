import React from "react";
import Overlay from "./overlay";

interface IDialog {
  show?: boolean;
  children?: React.ReactNode;
}

const Dialog = (props: IDialog) => {
  return (
    <Overlay show={props.show as boolean}>
      <div className="w-full h-full flex justify-center items-center">
        <div className="bg-white rounded-lg p-4 w-6/12">{props.children}</div>
      </div>
    </Overlay>
  );
};

export default Dialog;

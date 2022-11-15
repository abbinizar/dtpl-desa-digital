import React, { useEffect, useState } from "react";

interface IDialog {
  show: boolean;
  children: React.ReactNode;
  onClose?: () => void;
}

const Overlay = (props: IDialog) => {
  const closedStyle = { overlayClass: "fixed top-0 left-0 h-0 w-full" };
  const openedStyle = {
    overlayClass:
      "fixed top-0 w-screen h-screen left-0 bg-nobel z-50 overflow-y-hidden",
  };
  const [sheetStyle, setSheetStyle] = useState(openedStyle);

  useEffect(() => {
    if (props.show) {
      setSheetStyle(openedStyle);
    } else {
      setSheetStyle(closedStyle);
    }
  }, [props.show]);

  return (
    <div
      className={sheetStyle.overlayClass}
      style={{
        overscrollBehavior: "contain",
        backgroundColor: "rgb(34,34,34,0.6)",
        zIndex: 11111,
      }}
    >
      {props.show ? props.children : null}
    </div>
  );
};

export default Overlay;

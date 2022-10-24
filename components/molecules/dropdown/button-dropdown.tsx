import Link from "next/link";
import React, { useRef, useState } from "react";
import useOutsideClick from "../../../helpers/use-outside";
import Button from "../../atoms/button/button";

interface IButtonDropdown {
  itemData: Array<any>;
  label?: string;
  iconComponent?: React.ReactElement;
}

const ButtonDropdown = (props: IButtonDropdown) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  const [click, setClick] = useState(false);

  let widthItem;
  if (buttonRef.current) {
    widthItem = buttonRef.current?.offsetWidth;
  }

  useOutsideClick(divRef, () => {
    if (click) {
      setClick(false);
    }
  });

  return (
    <div ref={divRef}>
      <Button
        ref={buttonRef}
        label={props.label}
        onClick={() => setClick((prev) => !prev)}
        IconComponent={props.iconComponent}
        withIcon
        iconPossition="right"
        className="bg-transparent active:bg-tosca-darkest-1 hover:bg-tosca-darkest-1 font-normal relative"
      />
      {click && (
        <div
          style={{ minWidth: widthItem, zIndex: 1 }}
          className="z-50 absolute p-2 space-y-2 shadow bg-white rounded-lg mt-2"
        >
          {props.itemData.map((e: any, i: number) => {
            return (
              <div
                key={i}
                className={`${
                  e.disable ? "pointer-events-none" : "pointer-events-auto"
                }  hover:bg-tosca-lightest rounded-lg`}
              >
                <Link href={e.href} passHref={true}>
                  <div
                    className={`p-3 text-sm text-tosca-darker cursor-pointer font-semibold"`}
                  >
                    {e.title}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ButtonDropdown;

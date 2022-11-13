import Link from "next/link";
import React, { useRef, useState } from "react";
import useOutsideClick from "../../../helpers/use-outside";
import Button from "../../atoms/button/button";
import Image from "next/image";
import { getStatic } from "../../../helpers";

interface IAvatarDropdown {
  itemData: Array<any>;
}

const AvatarDropdown = (props: IAvatarDropdown) => {
  const buttonRef = useRef<HTMLDivElement>(null);
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
    <div ref={divRef} className="">
      <div
        ref={buttonRef}
        onClick={() => setClick((prev) => !prev)}
        className="rounded-full cursor-pointer"
      >
        <Image
          className="w-10 h-10 rounded-full"
          width={40}
          height={40}
          src={getStatic("avatar.png")}
          alt="avatar"
        />
      </div>
      {click && (
        <div
          style={{ minWidth: 120, zIndex: 1, marginLeft: -70 }}
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
                    onClick={e.onClick}
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

export default AvatarDropdown;

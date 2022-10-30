import Link from "next/link";
import React from "react";
import ChevronDown from "../../atoms/icon/chevron-down";
import ButtonDropdown from "../../molecules/dropdown/button-dropdown";

interface IHeader {
  leftComponent?:React.ReactElement
  rightComponent?:React.ReactElement
}

const Header = (props:IHeader) => {
  
  return (
    <header className="z-50 h-16 w-full bg-tosca-darkest sticky top-0 p-4 px-16 flex items-center justify-between">
      <div>
        {props.leftComponent}
      </div>
      <div className="flex space-x-8 items-center">
        {props.rightComponent}
      </div>
    </header>
  );
};

export default Header;

import React from "react";

interface IInput {
  placeholder?: string;
  value?: any;
  onChange?: (e: any) => void;
  label?: string;
  error?: string;
  iconComponent?: React.ReactNode;
  type?: string;
}

const Input = (props: IInput) => {
  return (
    <div className="w-full space-y-1">
      {props.label && <p className="text-sm text-grey-dark">{props.label}</p>}
      <div className="border border-grey-light rounded-lg flex w-full items-center">
        <input
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
          type={props.type}
          className="bg-white text-sm rounded-lg focus:outline-none p-2 w-full"
        />
        {props.iconComponent}
      </div>
      {props.error && <p className="text-xs text-red">{props.error}</p>}
    </div>
  );
};

export default Input;

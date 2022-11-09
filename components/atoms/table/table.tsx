import React, { Children } from "react";
import ButtonIcon from "../button/button-icon";
import Plus from "../icon/plus";

interface ITable {
  withTitle?: boolean;
  withButton?: boolean;
  children?: React.ReactNode;
  title?: string;
  labelButton?: string;
  onClick?: () => void;
}

interface ITableContainer {
  children?: React.ReactNode;
}

export const TableHead = (props: ITableContainer) => {
  return (
    <thead className="w-full bg-tosca-lightest border-y border-tosca text-base font-bold">
      {props.children}
    </thead>
  );
};

export const TableBody = (props: ITableContainer) => {
  return <tbody className="w-full text-base">{props.children}</tbody>;
};

export const TableRow = (props: ITableContainer) => {
  return <tr className="w-full border-b">{props.children}</tr>;
};

export const TableData = (props: ITableContainer) => {
  return <td className="p-3">{props.children}</td>;
};

const Table = (props: ITable) => {
  const ChildTable = Children.toArray(props.children);
  const TableHead = ChildTable[0];
  const TableBody = ChildTable[1];
  return (
    <div className="w-full shadow-card rounded flex flex-col">
      {props.withTitle && (
        <div className="px-3 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">{props.title}</h1>
          {props.withButton && (
            <ButtonIcon
              className="bg-tosca-darkest"
              label={props.labelButton}
              iconPossition="right"
              withIcon
              IconComponent={<Plus />}
              onClick={props.onClick}
            />
          )}
        </div>
      )}
      <table className="w-full">
        {TableHead}
        {TableBody}
      </table>
    </div>
  );
};

export default Table;

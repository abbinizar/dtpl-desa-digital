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
  isPegawai?: boolean;
  labelButtonHapus?: string;
  onClickHapus?: () => void;
  labelButtonEdit?: string;
  onClickEdit?: () => void;
  labelButtonDownload?: string;
  onClickDownload?: () => void;
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
          {props.isPegawai && (
            <div style={{ display:"flex", justifyContent:"space-between", gap:"15px", width:"30vw" }}>
            <ButtonIcon
              className="bg-red"
              label={props.labelButtonHapus}
              onClick={props.onClickHapus}
              isFull
            />
            <ButtonIcon
              className="bg-grey"
              label={props.labelButtonEdit}
              onClick={props.onClickEdit}
              isFull
            />
            <ButtonIcon
              className="bg-tosca-darkest"
              label={props.labelButtonDownload}
              onClick={props.onClickDownload}
              isFull
            />
            </div>
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

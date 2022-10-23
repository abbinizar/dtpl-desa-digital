import React, { Children, useState } from "react";

const SelectedContext = React.createContext<any>(null);

export interface IPropsTab {
  children: React.ReactNode;
  initialSelected: number;
}

const Tab = (props: IPropsTab) => {
  const [selected, setSelected] = useState(props.initialSelected || 0);
  const ChildTabCustom = Children.toArray(props.children);
  const TabLabel = ChildTabCustom[0];
  const TabBody = ChildTabCustom[1];

  return (
    <SelectedContext.Provider value={{ selected, setSelected }}>
      {TabLabel}
      <div className="w-full">{TabBody}</div>
    </SelectedContext.Provider>
  );
};

export default Tab;

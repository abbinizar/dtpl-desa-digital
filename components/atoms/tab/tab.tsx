import React, {
  Children,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const SelectedContext = React.createContext<any>(null);

export interface IPropsTab {
  children: React.ReactNode;
  initialSelected: number;
}

interface ITabLabContainer {
  children: React.ReactNode;
}

interface ITabLabel {
  children: React.ReactNode;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
}

export interface IPropsTabBodyContainer {
  children: React.ReactNode;
}

export interface IPropsTabBody {
  children: React.ReactNode;
  className?: string;
}

export const TabLabelContainer = (props: ITabLabContainer) => {
  const { selected, setSelected } = useContext(SelectedContext);
  const tabChild = useMemo(() => Children.toArray(props.children), []);
  const handleClickContainer = useCallback((i: number) => {
    setSelected(i);
  }, []);

  const isLast = (i: any) => {
    return i === tabChild.length - 1;
  };
  return (
    <div className="flex w-full rounded-lg relative">
      {tabChild.map((tab: any, i: number) => {
        const tabelement = React.cloneElement(tab, {
          className:
            selected === i
              ? isLast(i)
                ? "text-tosca-dark font-semibold rounded-r-lg"
                : "text-tosca-dark font-semibold rounded-l-lg"
              : isLast(i)
              ? "rounded-r-lg"
              : "rounded-l-lg",
          onClick: () => {
            tab.props.onClick && tab.props.onClick();
            handleClickContainer(i);
          },
          isSelected: selected === i,
        });
        return tabelement;
      })}
    </div>
  );
};

export const TabLabel = (props: ITabLabel) => {
  return (
    <div
      style={{ whiteSpace: "nowrap" }}
      className={`w-full h-full items-center flex justify-center sm:text-base text-xs capitalize bg-white ${
        props.isSelected
          ? "border border-tosca-dark bg-tosca-light"
          : "border border-grey-light"
      } ${props.className}`}
      onClick={props.onClick}
    >
      <div className="w-full relative h-full flex flex-col justify-center">
        <div className="px-6 py-1 flex self-center cursor-pointer">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export const TabBodyContainer = (props: IPropsTabBodyContainer) => {
  const BodyChild: any[] = useMemo(() => Children.toArray(props.children), []);
  const { selected } = useContext(SelectedContext);
  const placeholderBodies = Array.from({ length: BodyChild.length }).map(
    (_: any, i: number) => <span key={i} />
  );
  let bodyContainers: JSX.Element[] =
    selected >= 0
      ? placeholderBodies.map((bodyContainer, i: number) =>
          i === selected ? BodyChild[selected] : { ...bodyContainer }
        )
      : placeholderBodies;

  const [bodyContainer, setBodyContainer] = useState(bodyContainers);
  useEffect(() => {
    if (selected >= 0) {
      if (bodyContainer[selected].key !== BodyChild[selected].key) {
        setBodyContainer(
          bodyContainer.map((bodyContainer: any, i: number) =>
            i === selected ? BodyChild[selected] : { ...bodyContainer }
          )
        );
      }
    }
  }, [selected]);

  return (
    <>
      {bodyContainer.map((body, i: number) => {
        return (
          <div key={i} className={`${selected === i ? "" : "hidden"}`}>
            {body}
          </div>
        );
      })}
    </>
  );
};

export const TabBody = (props: IPropsTabBody) => {
  return <div className={props.className}>{props.children}</div>;
};

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

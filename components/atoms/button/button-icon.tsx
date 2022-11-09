interface IButton {
  label?: string;
  onClick?: () => void;
  isFull?: boolean;
  variant?: "primary" | "secondary";
  withIcon?: boolean;
  iconPossition?: "left" | "right";
  IconComponent?: React.ReactNode;
  className?: string;
}

const ButtonIcon = (props: IButton) => {
  let style;
  let iconPlace;

  switch (props.variant) {
    case "primary":
      style = "bg-tosca-button text-white";
      break;
    case "secondary":
      style = "bg-white text-tosca-button border border-tosca-button";
      break;
    default:
      style = "bg-tosca-button text-white";
      break;
  }

  switch (props.iconPossition) {
    case "left":
      iconPlace = "flex flex-row items-center space-x-2";
      break;
    case "right":
      iconPlace = "flex flex-row-reverse items-center space-x-2";
      break;
    default:
      break;
  }
  return (
    <button
      onClick={props.onClick}
      className={`${style} ${iconPlace} py-2 px-2 font-bold capitalize rounded-lg ${
        props.isFull ? "w-full" : "w-auto"
      } ${props.className}`}
    >
      {props.label}
      {props.withIcon && props.IconComponent}
    </button>
  );
};

export default ButtonIcon;

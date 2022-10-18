interface IButton {
  label?: string;
  onClick?: () => void;
  isFull?: boolean;
  variant?: "primary" | "secondary";
}

const Button = (props: IButton) => {
  let style;
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
  return (
    <button
      onClick={props.onClick}
      className={`${style} py-2 px-6 font-bold capitalize rounded-lg ${
        props.isFull ? "w-full" : "w-auto"
      }`}
    >
      {props.label}
    </button>
  );
};

export default Button;

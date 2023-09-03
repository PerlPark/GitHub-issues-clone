import classNames from "classnames";

interface OutlineButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: "primary" | "secondary";
  size?: "full" | "self";
  children: React.ReactNode;
}

function Button({
  color,
  size = "self",
  children,
  ...props
}: OutlineButtonProps) {
  return (
    <button
      type="button"
      className={classNames("rounded px-5 py-3 text-lg font-bold", {
        "bg-sky-500 text-white": color === "primary",
        "bg-slate-500 text-white": color === "secondary",
        "w-full": size === "full",
      })}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;

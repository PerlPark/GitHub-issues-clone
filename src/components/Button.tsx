import classNames from "classnames";

interface OutlineButtonProps {
  type: "primary" | "secondary";
  size?: "full" | "self";
  children: React.ReactNode;
}

function Button({ type, size = "self", children }: OutlineButtonProps) {
  return (
    <button
      type="button"
      className={classNames("rounded px-5 py-3 text-lg font-bold", {
        "bg-sky-500 text-white": type === "primary",
        "bg-slate-500 text-white": type === "secondary",
        "w-full": size === "full",
      })}
    >
      {children}
    </button>
  );
}

export default Button;

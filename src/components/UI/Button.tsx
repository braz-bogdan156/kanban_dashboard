type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger" | "ghost";
};

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const base =
    "px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
    ghost: "bg-transparent hover:bg-gray-100",
  };

  return (
    <button
      {...props}
      className={`${base} ${variants[variant]} ${className}`}
    />
  );
}
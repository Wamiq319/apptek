import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "green";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  className?: string;
  rounded?: "sm" | "md" | "lg" | "full"; // new prop
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  children,
  className = "",
  rounded = "md",
  ...props
}) => {
  const base =
    "font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer mx-2";

  const variants: Record<string, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-300",
    outline:
      "bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-50 focus:ring-blue-500",
    green: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500",
  };

  const sizes: Record<string, string> = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const roundedClasses: Record<string, string> = {
    sm: "rounded",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${roundedClasses[rounded]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

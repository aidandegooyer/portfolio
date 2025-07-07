import React from "react";
import "@/components/Button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  gradient?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  gradient,
  size = "medium",
  className,
  children,
  ...props
}) => {
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${sizeClasses[size]} anim-bg-gradient cursor-pointer rounded-2xl bg-indigo-600 text-white shadow-2xl shadow-indigo-600/20 outline-offset-2 outline-indigo-700 transition-all hover:scale-105 hover:bg-indigo-700 focus:outline-2 dark:bg-sky-500 dark:shadow-sky-500/50 dark:outline-sky-600 dark:hover:bg-sky-600 ${className} `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

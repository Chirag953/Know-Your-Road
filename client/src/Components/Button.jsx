import React from "react";

const Button = ({
  title,
  onClick,
  variant = "container",
  disabled,
  className = "",
}) => {
  const baseClasses = "px-5 h-10 rounded"; // added rounded for better style

  const variantClasses =
    variant === "container"
      ? "bg-gray-500 text-white"
      : variant === "outlined"
      ? "border border-gray-500 text-gray-500 bg-transparent"
      : "";

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <div>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${baseClasses} ${variantClasses} ${disabledClasses} ${className}`}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;

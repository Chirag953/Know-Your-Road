import React from "react";

const Button = ({
  title,
  onClick,
  variant = "container",
  disabled,
  className = "",
}) => {
  const baseClasses = "w-full border rounded-lg px-3 py-2 sm:py-3 focus:outline-none focus:ring-3 focus:ring-gray-500 text-sm sm:text-base"; // added rounded for better style

  const variantClasses =
    variant === "container"
      ? "bg-blue-500 text-white"
      : variant === "outlined"
      ? "border border-blue-500 text-gray-500 bg-transparent"
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

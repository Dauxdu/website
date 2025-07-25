import React from "react"
import { motion } from "framer-motion"

const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  ...props
}) => {
  const baseClasses =
    "font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2"

  const variants = {
    primary: "bg-gradient-to-r from-orange-500 to-red-600 text-white",
    secondary:
      "border backdrop-blur-sm border-gray-600 text-white hover:bg-gray-700/50",
    ghost: "text-white hover:text-gray-100 hover:bg-gray-100/10",
    code: "bg-gray-700/50 hover:bg-gray-600/50 text-white",
    demo: "bg-orange-600/20 hover:bg-orange-600/30 text-orange-300 hover:text-orange-200",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const variantClass = variants[variant] || variants.primary
  const sizeClass = sizes[size] || sizes.md

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClass} ${sizeClass} ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button

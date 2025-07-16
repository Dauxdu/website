import React from "react"
import { motion } from "framer-motion"

const SocialIcon = ({
  href,
  icon: Icon,
  label,
  color = "orange",
  className = "",
  ...props
}) => {
  const colors = {
    orange: "hover:bg-orange-500/20 text-orange-400",
    blue: "hover:bg-blue-500/20 text-blue-400",
    red: "hover:bg-red-500/20 text-red-400",
  }

  const baseClasses =
    "magnetic-element p-2 sm:p-3 backdrop-blur-sm rounded-full transition-colors bg-gray-700/50"
  const colorClass = colors[color] || colors.orange

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${colorClass} ${className}`}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      aria-label={label}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4 sm:w-5 sm:h-5" />}
    </motion.a>
  )
}

export default SocialIcon

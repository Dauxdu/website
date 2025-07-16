import React from "react"
import { motion } from "framer-motion"

const Card = ({
  children,
  className = "",
  hover = true,
  padding = "p-6",
  ...props
}) => {
  const baseClasses = `backdrop-blur-md rounded-3xl border transition-all duration-500 bg-gray-800/50 border-gray-700/50`

  const hoverClasses = hover
    ? `hover:shadow-2xl hover:border-orange-400/30 hover:shadow-orange-500/20`
    : ""

  return (
    <motion.div
      className={`${baseClasses} ${hoverClasses} ${padding} ${className}`}
      whileHover={hover ? { scale: 1.02, y: -4 } : {}}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card

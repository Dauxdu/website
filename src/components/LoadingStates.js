import React from "react"
import { motion } from "framer-motion"

export const SkeletonCard = () => {
  return (
    <div className="p-6 h-full rounded-3xl border bg-gray-800/50 border-gray-700/50">
      <div className="animate-pulse">
        <div className="w-16 h-16 rounded-2xl mb-4 bg-gray-700" />
        <div className="h-6 rounded mb-3 bg-gray-700" />
        <div className="h-4 rounded mb-2 bg-gray-700" />
        <div className="h-4 rounded mb-4 w-3/4 bg-gray-700" />
        <div className="flex gap-2 mb-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-6 w-16 rounded-full bg-gray-700" />
          ))}
        </div>
        <div className="flex gap-3">
          <div className="h-8 flex-1 rounded-full bg-gray-700" />
          <div className="h-8 flex-1 rounded-full bg-gray-700" />
        </div>
      </div>
    </div>
  )
}

export const SkeletonTimeline = () => {
  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700" />

      {[1, 2, 3].map((i) => (
        <div key={i} className="relative flex items-start mb-12 last:mb-0">
          <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full border-4 bg-gray-800 border-gray-600" />

          <div className="ml-8 flex-grow p-6 rounded-2xl border bg-gray-800/50 border-gray-700/50">
            <div className="animate-pulse">
              <div className="h-6 rounded mb-3 w-2/3 bg-gray-700" />
              <div className="h-4 rounded mb-2 w-1/2 bg-gray-700" />
              <div className="h-4 rounded mb-2 bg-gray-700" />
              <div className="h-4 rounded w-3/4 bg-gray-700" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export const LoadingSpinner = () => {
  return (
    <motion.div
      className="flex items-center justify-center py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="w-12 h-12 border-4 border-t-transparent rounded-full border-orange-500"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  )
}

export const ProgressiveLoader = ({ children, isLoading, skeleton }) => {
  if (isLoading) {
    return skeleton ? skeleton : <LoadingSpinner />
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

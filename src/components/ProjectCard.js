import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, ExternalLink, Code, Star, Users } from "lucide-react"
import Card from "./Card"
import Badge from "./Badge"
import Button from "./Button"

const ProjectCard = ({ project, index, repositoryData }) => {
  const [isHovered, setIsHovered] = useState(false)

  // Get metrics from repositoryData prop, fallback to 0
  const metrics = repositoryData?.[index] || {
    stars: 0,
    commits: 0,
    contributors: 0,
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card hover={true} className="h-full cursor-pointer">
        {/* Animated Background Overlay */}
        <motion.div
          className="absolute inset-0 rounded-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background:
              "linear-gradient(135deg, rgba(249, 115, 22, 0.05) 0%, rgba(234, 88, 12, 0.05) 100%)",
          }}
        />

        <div className="relative z-10">
          {/* Header with Logo and Status */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <motion.img
                src={project.logo}
                alt={`${project.name} logo`}
                className="w-16 h-16 rounded-2xl border-2 border-gray-600 shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <Badge variant="success" size="xs">
                Active
              </Badge>
            </div>

            {/* Project Metrics */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex gap-3 text-xs"
                >
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500" />
                    <span className="text-gray-300">{metrics.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Code className="w-3 h-3 text-blue-500" />
                    <span className="text-gray-300">{metrics.commits}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3 text-purple-500" />
                    <span className="text-gray-300">
                      {metrics.contributors}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Project Title */}
          <motion.h3
            className="text-xl font-bold mb-3 transition-colors text-gray-100"
            animate={{
              color: isHovered ? "#f97316" : "#f3f4f6",
            }}
          >
            {project.name}
          </motion.h3>

          {/* Description */}
          <p className="mb-4 text-sm leading-relaxed text-gray-300">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, techIndex) => (
              <Badge key={techIndex} variant="default" size="xs" hover={false}>
                {tech}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              onClick={() => window.open(project.link, "_blank")}
              variant="code"
              size="sm"
              className="flex-1"
            >
              <Github className="w-4 h-4" />
              Code
            </Button>

            <Button
              onClick={() => window.open(project.demo, "_blank")}
              variant="demo"
              size="sm"
              className="flex-1"
            >
              <ExternalLink className="w-4 h-4" />
              <motion.span
                animate={{ opacity: isHovered ? [1, 0.7, 1] : 1 }}
                transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
              >
                Demo
              </motion.span>
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default ProjectCard

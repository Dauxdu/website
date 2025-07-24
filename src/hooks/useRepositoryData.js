import { useState, useEffect, useCallback } from "react"
import {
  fetchAllRepositoriesData,
  withRetry,
  GITHUB_CONFIG,
} from "../utils/githubApi"
import { CONFIG, getCacheValidity, debugLog } from "../config"

/**
 * Custom hook for managing GitHub repository data with automatic updates
 * @returns {Object} Repository data and loading state
 */
export const useRepositoryData = () => {
  const [repositoryData, setRepositoryData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState(null)
  const [error, setError] = useState(null)

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem("github-repository-data")
    const savedTimestamp = localStorage.getItem("github-repository-timestamp")

    if (savedData && savedTimestamp) {
      try {
        const data = JSON.parse(savedData)
        const timestamp = parseInt(savedTimestamp)
        const now = Date.now()

        // Check if data is still fresh (less than cache validity)
        if (now - timestamp < getCacheValidity()) {
          debugLog("Using cached repository data", { age: now - timestamp })
          setRepositoryData(data)
          setLastUpdated(new Date(timestamp))
          setIsLoading(false)
          return
        } else {
          debugLog("Cached data is stale, fetching fresh data")
        }
      } catch (err) {
        console.error("Error parsing saved repository data:", err)
      }
    }

    // If no saved data or data is stale, fetch fresh data
    updateRepositoryData()
  }, [])

  const updateRepositoryData = useCallback(async () => {
    try {
      setError(null)
      debugLog("Starting repository data update")

      const data = await withRetry(fetchAllRepositoriesData)

      setRepositoryData(data)
      setLastUpdated(new Date())

      // Save to localStorage
      localStorage.setItem("github-repository-data", JSON.stringify(data))
      localStorage.setItem("github-repository-timestamp", Date.now().toString())

      debugLog("Repository data updated successfully", data)
    } catch (err) {
      console.error("Failed to update repository data:", err)
      setError(err.message)

      if (CONFIG.fallback.useZeroValues) {
        // Use fallback data as specified in requirements
        const fallbackData = {
          0: { stars: 0, commits: 0, contributors: 0 },
          1: { stars: 0, commits: 0, contributors: 0 },
          2: { stars: 0, commits: 0, contributors: 0 },
        }
        setRepositoryData(fallbackData)
        debugLog("Using fallback data due to API failure")
      }
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Set up automatic updates
  useEffect(() => {
    if (isLoading) return

    debugLog(
      `Setting up auto-update interval: ${
        GITHUB_CONFIG.UPDATE_INTERVAL / 1000 / 60
      } minutes`
    )

    const interval = setInterval(() => {
      debugLog("Auto-updating repository data...")
      updateRepositoryData()
    }, GITHUB_CONFIG.UPDATE_INTERVAL)

    return () => {
      debugLog("Clearing auto-update interval")
      clearInterval(interval)
    }
  }, [isLoading, updateRepositoryData])

  // Manual refresh function
  const refresh = useCallback(() => {
    setIsLoading(true)
    updateRepositoryData()
  }, [updateRepositoryData])

  return {
    repositoryData,
    isLoading,
    lastUpdated,
    error,
    refresh,
  }
}

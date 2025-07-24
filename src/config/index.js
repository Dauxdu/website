/**
 * Configuration file for GitHub API integration
 *
 * Update intervals and settings can be modified here
 */

export const CONFIG = {
  // GitHub API settings
  github: {
    // Update interval in hours (default: 3 hours)
    updateIntervalHours: 3,

    // Maximum number of retries for failed API calls
    maxRetries: 3,

    // Delay between retries in milliseconds
    retryDelay: 5000,

    // GitHub API base URL
    apiBase: "https://api.github.com",

    // Enable/disable GitHub API integration
    enabled: true,

    // Rate limit settings
    rateLimitBuffer: 100, // Keep this many API calls in reserve
  },

  // Performance settings
  performance: {
    // Cache duration in localStorage (should match update interval)
    cacheValidityHours: 3,

    // Enable debug logging
    debugMode: process.env.NODE_ENV === "development",
  },

  // Fallback data when API is unavailable
  fallback: {
    useZeroValues: true, // Show 0 for all metrics when API fails
    showErrorIndicator: true, // Show error message to user
  },
}

// Helper function to get update interval in milliseconds
export const getUpdateInterval = () => {
  return CONFIG.github.updateIntervalHours * 60 * 60 * 1000
}

// Helper function to get cache validity in milliseconds
export const getCacheValidity = () => {
  return CONFIG.performance.cacheValidityHours * 60 * 60 * 1000
}

// Debug logging helper
export const debugLog = (message, data = null) => {
  if (CONFIG.performance.debugMode) {
    console.log(`[GitHub API] ${message}`, data)
  }
}

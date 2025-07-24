/**
 * GitHub API utilities for fetching repository data
 */

import { CONFIG, getUpdateInterval, debugLog } from "../config"

const GITHUB_API_BASE = CONFIG.github.apiBase

// Configuration for automatic updates
export const GITHUB_CONFIG = {
  UPDATE_INTERVAL: getUpdateInterval(),
  RETRY_DELAY: CONFIG.github.retryDelay,
  MAX_RETRIES: CONFIG.github.maxRetries,
}

// Repository information mapping
export const REPOSITORIES = {
  0: {
    owner: "Dauxdu",
    repo: "bbb-spd",
  },
  1: {
    owner: "Dauxdu",
    repo: "ca-app",
  },
  2: {
    owner: "Dauxdu",
    repo: "ansible",
  },
}

/**
 * Fetch repository data from GitHub API
 * @param {string} owner - Repository owner
 * @param {string} repo - Repository name
 * @returns {Promise<Object>} Repository data
 */
export const fetchRepositoryData = async (owner, repo) => {
  if (!CONFIG.github.enabled) {
    debugLog("GitHub API integration disabled")
    return { stars: 0, commits: 0, contributors: 0 }
  }

  try {
    debugLog(`Fetching data for ${owner}/${repo}`)

    const headers = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "Portfolio-Website",
    }

    // Add GitHub token if available (optional)
    const token = process.env.REACT_APP_GITHUB_TOKEN
    if (token) {
      headers["Authorization"] = `token ${token}`
      debugLog("Using GitHub token for authentication")
    }

    // Fetch repository info
    const repoResponse = await fetch(
      `${GITHUB_API_BASE}/repos/${owner}/${repo}`,
      {
        headers,
      }
    )

    if (!repoResponse.ok) {
      throw new Error(`Failed to fetch repository data: ${repoResponse.status}`)
    }

    const repoData = await repoResponse.json()

    // Fetch commits count
    const commitsResponse = await fetch(
      `${GITHUB_API_BASE}/repos/${owner}/${repo}/commits?per_page=1`,
      { headers }
    )

    let commitsCount = 0
    if (commitsResponse.ok) {
      const linkHeader = commitsResponse.headers.get("Link")
      if (linkHeader) {
        const lastPageMatch = linkHeader.match(/page=(\d+)>; rel="last"/)
        commitsCount = lastPageMatch ? parseInt(lastPageMatch[1]) : 1
      } else {
        // If no Link header, count commits from first page
        const commits = await commitsResponse.json()
        commitsCount = commits.length
      }
    }

    // Fetch contributors count
    const contributorsResponse = await fetch(
      `${GITHUB_API_BASE}/repos/${owner}/${repo}/contributors?per_page=100`,
      { headers }
    )

    let contributorsCount = 0
    if (contributorsResponse.ok) {
      const contributors = await contributorsResponse.json()
      contributorsCount = contributors.length
    }

    const result = {
      stars: repoData.stargazers_count || 0,
      commits: commitsCount,
      contributors: contributorsCount,
    }

    debugLog(`Successfully fetched data for ${owner}/${repo}`, result)
    return result
  } catch (error) {
    console.error(`Error fetching data for ${owner}/${repo}:`, error)
    debugLog(`API call failed for ${owner}/${repo}`, { error: error.message })

    return {
      stars: 0,
      commits: 0,
      contributors: 0,
    }
  }
}

/**
 * Fetch data for all repositories
 * @returns {Promise<Object>} All repositories data indexed by project index
 */
export const fetchAllRepositoriesData = async () => {
  const results = {}

  const promises = Object.entries(REPOSITORIES).map(
    async ([index, { owner, repo }]) => {
      const data = await fetchRepositoryData(owner, repo)
      return { index: parseInt(index), data }
    }
  )

  const resolvedData = await Promise.all(promises)

  resolvedData.forEach(({ index, data }) => {
    results[index] = data
  })

  return results
}

/**
 * Retry mechanism for API calls
 * @param {Function} fn - Function to retry
 * @param {number} retries - Number of retries
 * @returns {Promise} Result of function execution
 */
export const withRetry = async (fn, retries = GITHUB_CONFIG.MAX_RETRIES) => {
  try {
    return await fn()
  } catch (error) {
    if (retries > 0) {
      console.log(`Retrying... ${retries} attempts left`)
      await new Promise((resolve) =>
        setTimeout(resolve, GITHUB_CONFIG.RETRY_DELAY)
      )
      return withRetry(fn, retries - 1)
    }
    throw error
  }
}

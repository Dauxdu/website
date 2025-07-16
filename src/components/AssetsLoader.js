const AssetsLoader = {
  logo: {},
}

// Загрузка логотипов
try {
  const logoReq = require.context("../assets/logo", false, /\.(png|jpe?g|svg)$/)
  logoReq.keys().forEach((filename) => {
    const key = filename.replace("./", "")
    AssetsLoader.logo[key] = logoReq(filename)
  })
} catch (error) {
  console.warn("Assets loading error:", error)
}

export default AssetsLoader

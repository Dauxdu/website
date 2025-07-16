import { enContent } from "./content/en"
import { ruContent } from "./content/ru"
import AssetsLoader from "../components/AssetsLoader"

export const portfolioContent = {
  en: enContent,
  ru: ruContent,
}

export const technologiesData = [
  {
    id: 1,
    logo: AssetsLoader.logo["quickservice.svg"],
    format: "rectangular",
  },
  {
    id: 2,
    logo: AssetsLoader.logo["anturazh.png"],
    format: "rectangular",
  },
  {
    id: 3,
    logo: AssetsLoader.logo["wildberries.svg"],
    format: "rectangular",
  },
  {
    id: 4,
    logo: AssetsLoader.logo["ozon.svg"],
    format: "rectangular",
  },
]

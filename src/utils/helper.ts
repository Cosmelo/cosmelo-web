import { Colours } from "./Constants";

export enum ScoreCategories {
  Packaging = "packaging",
  Disclosure = "disclosure",
  HumanHealth = "humanHealth",
  SupplyChainAndEnvironment = "supplyChainAndEnvironment",
  Ethics = "ethics",
}

export interface CategoryInfo {
  score: number;
  details: string[];
}

export interface ProductInfo {
  packaging: CategoryInfo;
  disclosure: CategoryInfo;
  humanHealth: CategoryInfo;
  supplyChainAndEnvironment: CategoryInfo;
  ethics: CategoryInfo;
}

export const categories = {
  packaging: {
    label: "Packaging Recyclability",
    colour: Colours.Skobeloff,
  },
  disclosure: { label: "Animal Testing", colour: Colours.SkyBlueCrayola },
  humanHealth: {
    label: "Human Health",
    colour: Colours.NaplesYellow,
  },
  supplyChainAndEnvironment: {
    label: "Manufacturing greenhouse gas emissions",
    colour: Colours.Coral,
  },
  ethics: {
    label: "Human rights/Ethical labor",
    colour: Colours.CaribbeanGreen,
  },
};

export const orderedCategories: Array<keyof ProductInfo> = [
  ScoreCategories.Packaging,
  ScoreCategories.Disclosure,
  ScoreCategories.HumanHealth,
  ScoreCategories.SupplyChainAndEnvironment,
  ScoreCategories.Ethics,
];

export const scoringByCategory = {
  [ScoreCategories.Packaging]: {
    3: "The company has a refill or container return policy in the customer’s location",
    2: "This product’s packaging is recyclable with separation",
    1: "This product’s packaging is only recyclable via drop-off, mail-in, and/or takeback",
    0: "This product’s packaging is not recyclable in the form sold to consumers, or cannot be determined",
  },
  [ScoreCategories.Disclosure]: {
    3: "The company does not use animal testing on any of its products",
    2: "This product is not tested on animals, but the company participates in animal testing",
    1: "The company participates in animal testing, but is actively looking for alternatives",
    0: "The company performs animal testing on ingredients/products to justify safety",
  },
  [ScoreCategories.HumanHealth]: {
    3: "The company participates in ongoing research to improve product safety in ingredients and risk assessment",
    2: "The company discloses risk and safety information on our websites including full risk assessment of ingredients, risk assessment methodologies, and postmarket safety surveillance strategy/results",
    1: "The company does not address product safety beyond legal and regulatory compliance",
    0: "The product includes ingredients that are present in Cosmetic Ingredients Hotlist beyond a regulated amount",
  },
  [ScoreCategories.SupplyChainAndEnvironment]: {
    3: "Process of production for the product is carbon neutral",
    2: "The company sets, tracks, and discloses goals and results to reduce greenhouse gas emissions",
    1: "The company publicly discloses greenhouse gas emissions",
    0: "The company does not track or disclose greenhouse gas emissions ",
  },
  [ScoreCategories.Ethics]: {
    3: "The company conducts third party audits of suppliers at least once every 36 months, by industry standard",
    2: "The company performs internal risk assessments and social compliance audits",
    1: "The company has human rights policies in place throughout the supply chain ",
    0: "The company does not have human rights policies to assure the protection of human rights throughout the supply chain",
  },
};

export const calculateScore = (productInfo: ProductInfo) =>
  Object.values(productInfo).reduce(
    (accumulator, { score }) => accumulator + score,
    0
  );

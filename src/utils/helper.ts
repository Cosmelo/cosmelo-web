import { Colours } from "./Constants";

export enum ScoreCategories {
  Packaging = "packaging",
  AnimalTesting = "animalTesting",
  ManufacturingEmissions = "manufacturingEmissions",
  Ethics = "ethics",
}

export interface CategoryInfo {
  score: number;
  details: string[];
}

export interface ProductInfo {
  packaging: CategoryInfo;
  animalTesting: CategoryInfo;
  manufacturingEmissions: CategoryInfo;
  ethics: CategoryInfo;
}

export const categories = {
  packaging: {
    label: "Packaging Recyclability",
    colour: Colours.Skobeloff,
  },
  animalTesting: { label: "Animal Testing", colour: Colours.SkyBlueCrayola },
  manufacturingEmissions: {
    label: "Manufacturing Emissions",
    colour: Colours.Coral,
  },
  ethics: {
    label: "Human rights/Ethical labor",
    colour: Colours.CaribbeanGreen,
  },
};

export const orderedCategories: Array<keyof ProductInfo> = [
  ScoreCategories.Packaging,
  ScoreCategories.AnimalTesting,
  ScoreCategories.ManufacturingEmissions,
  ScoreCategories.Ethics,
];

export const scoringByCategory = {
  [ScoreCategories.Packaging]: {
    3: "The company has a refill or container return policy in the customer’s location",
    2: "This product’s packaging is recyclable with separation",
    1: "This product’s packaging is only recyclable via drop-off, mail-in, and/or takeback",
    0: "This product’s packaging is not recyclable in the form sold to consumers, or cannot be determined",
  },
  [ScoreCategories.AnimalTesting]: {
    3: "The company does not use animal testing on any of its products",
    2: "This product is not tested on animals, but the company participates in animal testing",
    1: "The company participates in animal testing, but is actively looking for alternatives",
    0: "The company performs animal testing on ingredients/products to justify safety",
  },
  [ScoreCategories.ManufacturingEmissions]: {
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

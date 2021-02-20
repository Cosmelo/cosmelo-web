import { ProductInfo } from "./helper";

export const randomInfo: ProductInfo = {
  packaging: {
    score: 2,
    details: [],
  },
  disclosure: {
    score: 2,
    details: [],
  },
  humanHealth: {
    score: 3,
    details: [],
  },
  supplyChainAndEnvironment: {
    score: 3,
    details: [],
  },
  ethics: {
    score: 3,
    details: [],
  },
};

export const squalaneCleanserInfo: ProductInfo = {
  packaging: {
    score: 3,
    details: [
      "Deciem offers in-store recycling program and accepts empties from any beauty brands",
      "Deciem accepts all post-use skincare and cosmetics packaging that typically don’t have a home in most curbside recycling programs",
    ],
  },
  disclosure: {
    score: 3,
    details: [
      " Deciem does not test on animals and only sells to customers in China through cross-border operations",
    ],
  },
  humanHealth: {
    score: 2,
    details: [
      "All Deciem formulations are made by in-house team of bio-chemists and material-chemists in their own labs",
      "All Deciem products undergo thorough safety assessment before hitting the market. Each ingredient is reviewed against current scientific literature and strict global regulations",
    ],
  },
  supplyChainAndEnvironment: {
    score: 3,
    details: [
      "Carbon neutral unit boxes",
      "Works with The Ontario Biodiversity Afforestation Project and The Southern Quebec Afforestation Project to plant trees in areas of need",
    ],
  },
  ethics: {
    score: 2,
    details: [
      "Deciem is part owned by Estee Lauder (28%), which has criticisms against ethical labor practices",
    ],
  },
};

export const soyMakeupRemovingFaceWashInfo: ProductInfo = {
  packaging: {
    score: 2,
    details: [
      "Fresh uses glass products which are made of 17% post-consumer recycled glass",
      "Fresh blue gift boxes and bags are 100% plastic-free because of removed lamination",
    ],
  },
  disclosure: {
    score: 3,
    details: ["Fresh is against and does not use animal testing"],
  },
  humanHealth: {
    score: 2,
    details: [
      "This product contains Rosa Damascena Flower Oil which is expensive to extract and is required in large amounts, also contains fragrant components that might irritate sensitive skin",
      "This product used Ascorbyl Palmitate (AP), which is a not so stable vitamin C derivative. AP can promote lipid peroxidation and cytotoxicity",
    ],
  },
  supplyChainAndEnvironment: {
    score: 2,
    details: [
      "Fresh’s main manufacturing facilities are powered by renewable energy and are ISO 14001 certified",
      "For Fresh’s top 25 products, reduced transportation carbon footprint by more than 75%^ between 2014 and 2018",
    ],
  },
  ethics: {
    score: 0,
    details: ["No info found"],
  },
};

export const superfoodAntioxidantCleanserInfo: ProductInfo = {
  packaging: {
    score: 2,
    details: [
      "YTTP reduce quantity of plastic waste by choosing glass for bottles and jars",
      "YTTP chooses post-consumer materials whenever possible",
      "YTTP manufactures locally and use paper from responsible sources",
    ],
  },
  disclosure: {
    score: 3,
    details: ["Never, the company’s line is 100% vegan and cruelty free"],
  },
  humanHealth: {
    score: 2,
    details: [
      "All ingredients in this product are biodegradable and abide by EU’s list of 1300+ ingredients that are restricted for cosmetic use",
    ],
  },
  supplyChainAndEnvironment: {
    score: 0,
    details: ["No mention on website"],
  },
  ethics: {
    score: 0,
    details: ["No mention on website"],
  },
};

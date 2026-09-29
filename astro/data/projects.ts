export interface Project {
  slug: string;
  name: string;
  image: string;
  imageAlt: string;
  skills: string[];
  description: string;
  siteUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "stocksinseconds",
    name: "StocksInSeconds.com",
    image: "/assets/projects/stocks-in-seconds/stocksInSeconds.png",
    imageAlt: "StocksInSeconds.com interface",
    skills: ["Python", "Flask", "JavaScript", "AWS services", "APIs"],
    description:
      "Full stack website for a startup business. I had to learn how to deploy a backend on AWS and manage all the security features such as authentication, cookies management, and Stripe integration.",
  },
  {
    slug: "buildingenergypredictor",
    name: "Building Energy Predictor",
    image:
      "/assets/projects/building-energy-predictor/buildingEnergyPredictor.png",
    imageAlt: "Building Energy Predictor interface",
    skills: ["Python", "Jupyter Notebook", "Machine Learning", "APIs"],
    description:
      "A machine learning model that predicts the energy usage of a building based on various features such as weather data and building characteristics.",
    siteUrl: "https://jacklockhart04.github.io/building_energy_predictor/",
  },
  {
    slug: "password-manager",
    name: "Password Manager",
    image: "/assets/projects/password-manager/password_gen.png",
    imageAlt: "Password generator interface",
    skills: ["Cryptography", "Password Security", "JavaScript"],
    description:
      "Browser-based generator and local vault emphasizing cryptographic correctness: Web Crypto RNG, rejection-sampled generation, PBKDF2 key derivation and AES-GCM storage. Includes strength meters and explicit, auditable generation controls.",
  },
];

export function getProject(slug: string): Project {
  const project = projects.find((candidate) => candidate.slug === slug);

  if (!project) {
    throw new Error(`Unknown project: ${slug}`);
  }

  return project;
}

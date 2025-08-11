interface Artwork {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category?: string;
  year?: number;
}

export const artworks: Artwork[] = [
  {
    id: 1,
    title: "Composition abstraite",
    description: "Huile sur toile, exploration des formes et couleurs",
    imageUrl: "/images/artwork1.jpg",
    category: "Abstrait",
    year: 2024
  },
  {
    id: 2,
    title: "Paysage urbain",
    description: "Vue de la ville au coucher du soleil",
    imageUrl: "/images/artwork2.jpg",
    category: "Paysage",
    year: 2023
  },
  {
    id: 3,
    title: "Portrait intérieur",
    description: "Exploration de l'âme humaine à travers la peinture",
    imageUrl: "/images/artwork3.jpg",
    category: "Portrait",
    year: 2024
  },
  {
    id: 4,
    title: "Nature morte moderne",
    description: "Réinterprétation contemporaine du genre classique",
    imageUrl: "/images/artwork4.jpg",
    category: "Nature morte",
    year: 2023
  },
  {
    id: 5,
    title: "Émotions colorées",
    description: "Expression des sentiments à travers la palette chromatique",
    imageUrl: "/images/artwork5.jpg",
    category: "Abstrait",
    year: 2024
  },
  {
    id: 6,
    title: "Horizon lointain",
    description: "Paysage marin aux tons apaisants",
    imageUrl: "/images/artwork6.jpg",
    category: "Paysage",
    year: 2022
  }
];

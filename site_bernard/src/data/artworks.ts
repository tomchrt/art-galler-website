interface Artwork {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: 'Peintures' | 'Autres';
  year?: number;
  technique?: string;
  dimensions?: string;
}

export const artworks: Artwork[] = [
  {
    id: 1,
    title: "Composition abstraite",
    description: "Exploration des formes et couleurs contemporaines",
    imageUrl: "/images/artwork1.jpg",
    category: "Peintures",
    year: 2024,
    technique: "Huile sur toile",
    dimensions: "100 x 80 cm"
  },
  {
    id: 2,
    title: "Paysage urbain",
    description: "Vue de la ville au coucher du soleil",
    imageUrl: "/images/artwork2.jpg",
    category: "Peintures",
    year: 2023,
    technique: "Acrylique sur toile",
    dimensions: "120 x 90 cm"
  },
  {
    id: 3,
    title: "Portrait intérieur",
    description: "Exploration de l'âme humaine à travers la peinture",
    imageUrl: "/images/artwork3.jpg",
    category: "Peintures",
    year: 2024,
    technique: "Huile sur toile",
    dimensions: "80 x 100 cm"
  },
  {
    id: 4,
    title: "Nature morte moderne",
    description: "Réinterprétation contemporaine du genre classique",
    imageUrl: "/images/artwork4.jpg",
    category: "Peintures",
    year: 2023,
    technique: "Acrylique sur toile",
    dimensions: "60 x 80 cm"
  },
  {
    id: 5,
    title: "Émotions colorées",
    description: "Expression des sentiments à travers la palette chromatique",
    imageUrl: "/images/artwork5.jpg",
    category: "Peintures",
    year: 2024,
    technique: "Huile sur toile",
    dimensions: "100 x 100 cm"
  },
  {
    id: 6,
    title: "Horizon lointain",
    description: "Paysage marin aux tons apaisants",
    imageUrl: "/images/artwork6.jpg",
    category: "Peintures",
    year: 2022,
    technique: "Acrylique sur toile",
    dimensions: "150 x 100 cm"
  },
  {
    id: 7,
    title: "Sculpture en bronze",
    description: "Forme organique inspirée de la nature",
    imageUrl: "/images/sculpture1.jpg",
    category: "Autres",
    year: 2023,
    technique: "Bronze patiné",
    dimensions: "H: 45 cm"
  },
  {
    id: 8,
    title: "Installation lumineuse",
    description: "Expérience immersive avec lumière et espace",
    imageUrl: "/images/installation1.jpg",
    category: "Autres",
    year: 2024,
    technique: "Lumière LED, matériaux mixtes",
    dimensions: "Variable"
  },
  {
    id: 9,
    title: "Dessin au fusain",
    description: "Étude de composition en noir et blanc",
    imageUrl: "/images/dessin1.jpg",
    category: "Autres",
    year: 2023,
    technique: "Fusain sur papier",
    dimensions: "50 x 70 cm"
  }
];
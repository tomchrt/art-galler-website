interface Artwork {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: 'Peintures' | 'Autres';
  year?: number;
  technique?: string;
  dimensions?: string;
  aspectRatio: 'square' | 'portrait' | 'landscape' | 'tall' | 'wide';
}

export const artworks: Artwork[] = [
  {
    id: 1,
    title: "Composition 1",
    description: "Œuvre contemporaine explorant les formes et couleurs",
    imageUrl: "/src/images/image00001.jpeg",
    category: "Peintures",
    year: 2024,
    technique: "Technique mixte",
    dimensions: "100 x 80 cm",
    aspectRatio: "landscape"
  },
  {
    id: 2,
    title: "Composition 2",
    description: "Exploration des textures et matières",
    imageUrl: "/src/images/image00002.jpeg",
    category: "Peintures",
    year: 2024,
    technique: "Acrylique sur toile",
    dimensions: "120 x 90 cm",
    aspectRatio: "landscape"
  },
  {
    id: 3,
    title: "Composition 3",
    description: "Abstraction géométrique et couleurs vives",
    imageUrl: "/src/images/image00003.jpeg",
    category: "Peintures",
    year: 2024,
    technique: "Huile sur toile",
    dimensions: "80 x 100 cm",
    aspectRatio: "portrait"
  },
  {
    id: 4,
    title: "Composition 4",
    description: "Étude de composition et d'équilibre",
    imageUrl: "/src/images/image00004.jpeg",
    category: "Peintures",
    year: 2024,
    technique: "Mixte sur toile",
    dimensions: "100 x 100 cm",
    aspectRatio: "square"
  },
  {
    id: 5,
    title: "Composition 5",
    description: "Exploration des formes organiques",
    imageUrl: "/src/images/image00005.jpeg",
    category: "Peintures",
    year: 2024,
    technique: "Acrylique sur toile",
    dimensions: "120 x 80 cm",
    aspectRatio: "landscape"
  },
  {
    id: 6,
    title: "Composition 6",
    description: "Paysage abstrait aux tons apaisants",
    imageUrl: "/src/images/image00006.jpeg",
    category: "Peintures",
    year: 2024,
    technique: "Huile sur toile",
    dimensions: "100 x 150 cm",
    aspectRatio: "tall"
  },
  {
    id: 7,
    title: "Composition 7",
    description: "Formes géométriques et contrastes",
    imageUrl: "/src/images/image00007.jpeg",
    category: "Peintures",
    year: 2024,
    technique: "Acrylique sur toile",
    dimensions: "80 x 120 cm",
    aspectRatio: "landscape"
  },
  {
    id: 8,
    title: "Composition 8",
    description: "Exploration chromatique et rythmes",
    imageUrl: "/src/images/image00008.jpeg",
    category: "Peintures",
    year: 2024,
    technique: "Mixte sur toile",
    dimensions: "90 x 90 cm",
    aspectRatio: "landscape"
  },
  {
    id: 9,
    title: "Composition 9",
    description: "Abstraction lyrique et gestuelle",
    imageUrl: "/src/images/image00009.jpeg",
    category: "Peintures",
    year: 2024,
    technique: "Huile sur toile",
    dimensions: "100 x 120 cm",
    aspectRatio: "portrait"
  },
  {
    id: 10,
    title: "Composition 10",
    description: "Formes biomorphiques et couleurs terre",
    imageUrl: "/src/images/image00010.jpeg",
    category: "Peintures",
    year: 2024,
    technique: "Acrylique sur toile",
    dimensions: "120 x 100 cm",
    aspectRatio: "landscape"
  },
  {
    id: 11,
    title: "Composition 11",
    description: "Étude de lumière et d'ombre",
    imageUrl: "/src/images/image00011.jpeg",
    category: "Peintures",
    year: 2024,
    technique: "Huile sur toile",
    dimensions: "80 x 100 cm",
    aspectRatio: "portrait"
  },
  {
    id: 12,
    title: "Composition 12",
    description: "Composition dynamique et mouvement",
    imageUrl: "/src/images/image00012.jpeg",
    category: "Peintures",
    year: 2024,
    technique: "Mixte sur toile",
    dimensions: "100 x 80 cm",
    aspectRatio: "landscape"
  },
  {
    id: 13,
    title: "Composition 13",
    description: "Exploration des limites et frontières",
    imageUrl: "/src/images/image00013.jpeg",
    category: "Peintures",
    year: 2024,
    technique: "Acrylique sur toile",
    dimensions: "90 x 120 cm",
    aspectRatio: "portrait"
  }
];
interface Artist {
  name: string;
  bio: string;
  portraitUrl: string;
  exhibitions?: string[];
}

export const artist: Artist = {
  name: "Bernard",
  bio: "Artiste peintre passionné par l'exploration des couleurs et des formes. Mon travail s'inspire de la nature et de l'émotion humaine. Chaque toile raconte une histoire, capture un moment d'émotion pure. À travers mes pinceaux, je cherche à transmettre la beauté du monde qui nous entoure et les sentiments qui nous animent.",
  portraitUrl: "/images/artist-portrait.jpg",
  exhibitions: [
    "Galerie Moderne - Paris, 2024",
    "Exposition collective - Lyon, 2023",
    "Salon d'Art Contemporain - Marseille, 2022",
    "Festival des Arts - Nice, 2021",
    "Galerie du Temps - Bordeaux, 2020"
  ]
};

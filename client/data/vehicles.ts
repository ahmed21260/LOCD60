export interface Vehicle {
  id: number;
  name: string;
  brand: string;
  model: string;
  year: number;
  category: "citadine" | "sport" | "premium" | "utilitaire";
  images: string[];
  mainImage: string;
  specs: {
    power: string;
    consumption: string;
    transmission: "Manuelle" | "Automatique";
    fuel: "Essence" | "Diesel" | "Hybride" | "Électrique";
    doors: number;
    seats: number;
    luggage: string;
    acceleration: string;
    maxSpeed: string;
  };
  features: string[];
  pricing: {
    daily: number;
    weekly: number;
    monthly: number;
    deposit: number;
  };
  availability: boolean;
  rating: number;
  reviews: number;
  badge?: string;
  description: string;
  included: string[];
  location: string;
}

export const vehicles: Vehicle[] = [
  {
    id: 1,
    name: "Renault Clio 5 RS",
    brand: "Renault",
    model: "Clio RS",
    year: 2023,
    category: "sport",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
    ],
    mainImage: "/api/placeholder/400/250",
    specs: {
      power: "200 ch",
      consumption: "6.5L/100km",
      transmission: "Manuelle",
      fuel: "Essence",
      doors: 5,
      seats: 5,
      luggage: "301L",
      acceleration: "6.7s (0-100km/h)",
      maxSpeed: "230 km/h",
    },
    features: [
      "Système de navigation GPS",
      "Climatisation automatique",
      "Régulateur de vitesse",
      "Sièges sport Recaro",
      "Jantes 18 pouces",
      "Échappement sport",
      "Aide au stationnement",
      "Caméra de recul",
    ],
    pricing: {
      daily: 45,
      weekly: 280,
      monthly: 1050,
      deposit: 800,
    },
    availability: true,
    rating: 4.9,
    reviews: 127,
    badge: "Populaire",
    description:
      "La Clio RS allie performance et praticité au quotidien. Son moteur turbo de 200ch et sa transmission manuelle offrent des sensations de conduite uniques en ville comme sur route.",
    included: [
      "Assurance tous risques",
      "Kilométrage illimité",
      "Assistance 24h/24",
      "2ème conducteur gratuit",
    ],
    location: "Compiègne",
  },
  {
    id: 2,
    name: "Renault Clio 5",
    brand: "Renault",
    model: "Clio",
    year: 2023,
    category: "citadine",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
    ],
    mainImage: "/api/placeholder/400/250",
    specs: {
      power: "130 ch",
      consumption: "5.2L/100km",
      transmission: "Automatique",
      fuel: "Essence",
      doors: 5,
      seats: 5,
      luggage: "301L",
      acceleration: "9.9s (0-100km/h)",
      maxSpeed: "190 km/h",
    },
    features: [
      "Écran tactile 9.3 pouces",
      "Android Auto / Apple CarPlay",
      "Climatisation automatique",
      "Régulateur de vitesse adaptatif",
      "Détection d'angle mort",
      "Freinage d'urgence automatique",
      "Éclairage LED",
      "Jantes alliage 16 pouces",
    ],
    pricing: {
      daily: 35,
      weekly: 210,
      monthly: 750,
      deposit: 500,
    },
    availability: true,
    rating: 4.8,
    reviews: 89,
    badge: "Eco",
    description:
      "La citadine idéale pour vos déplacements urbains. Économique, confortable et dotée des dernières technologies, elle vous accompagne partout en toute sérénité.",
    included: [
      "Assurance tous risques",
      "Kilométrage illimité",
      "Assistance 24h/24",
      "Livraison gratuite",
    ],
    location: "Beauvais",
  },
  {
    id: 3,
    name: "Volkswagen Polo GTI R-Line",
    brand: "Volkswagen",
    model: "Polo GTI",
    year: 2023,
    category: "sport",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
    ],
    mainImage: "/api/placeholder/400/250",
    specs: {
      power: "150 ch",
      consumption: "5.8L/100km",
      transmission: "Manuelle",
      fuel: "Essence",
      doors: 5,
      seats: 5,
      luggage: "267L",
      acceleration: "8.5s (0-100km/h)",
      maxSpeed: "210 km/h",
    },
    features: [
      "Cockpit Digital Pro",
      "Système audio Beats",
      "Sièges sport R-Line",
      "Suspension sport",
      "Jantes 17 pouces GTI",
      "Différentiel autobloquant",
      "Phares LED Matrix",
      "Toit panoramique",
    ],
    pricing: {
      daily: 40,
      weekly: 245,
      monthly: 900,
      deposit: 700,
    },
    availability: true,
    rating: 4.9,
    reviews: 156,
    badge: "Sport",
    description:
      "La Polo GTI incarne l'ADN sportif de Volkswagen. Compacte mais puissante, elle offre un plaisir de conduite exceptionnel avec un équipement premium.",
    included: [
      "Assurance tous risques",
      "Kilométrage illimité",
      "Assistance 24h/24",
      "Nettoyage inclus",
    ],
    location: "Creil",
  },
  {
    id: 4,
    name: "Citroën DS5",
    brand: "Citroën",
    model: "DS5",
    year: 2023,
    category: "premium",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
    ],
    mainImage: "/api/placeholder/400/250",
    specs: {
      power: "165 ch",
      consumption: "6.0L/100km",
      transmission: "Automatique",
      fuel: "Essence",
      doors: 5,
      seats: 5,
      luggage: "465L",
      acceleration: "8.8s (0-100km/h)",
      maxSpeed: "205 km/h",
    },
    features: [
      "Sièges cuir Nappa",
      "Suspension pilotée",
      "Écran 12 pouces",
      "Système audio Focal",
      "Toit ouvrant panoramique",
      "Massage des sièges avant",
      "Éclairage d'ambiance",
      "Clé mains libres",
    ],
    pricing: {
      daily: 50,
      weekly: 315,
      monthly: 1200,
      deposit: 1000,
    },
    availability: true,
    rating: 5.0,
    reviews: 78,
    badge: "Premium",
    description:
      "Le summum du luxe à la française. La DS5 combine élégance, confort et technologie pour une expérience de conduite d'exception.",
    included: [
      "Assurance tous risques",
      "Kilométrage illimité",
      "Assistance 24h/24",
      "Service conciergerie",
    ],
    location: "Compiègne",
  },
  {
    id: 5,
    name: "Peugeot 208 GT Line",
    brand: "Peugeot",
    model: "208 GT",
    year: 2023,
    category: "citadine",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
    ],
    mainImage: "/api/placeholder/400/250",
    specs: {
      power: "110 ch",
      consumption: "4.9L/100km",
      transmission: "Automatique",
      fuel: "Essence",
      doors: 5,
      seats: 5,
      luggage: "265L",
      acceleration: "10.1s (0-100km/h)",
      maxSpeed: "180 km/h",
    },
    features: [
      "Peugeot i-Cockpit 3D",
      "Écran tactile 10 pouces",
      "Pack GT Line",
      "Jantes diamantées 17 pouces",
      "Toit noir contrasté",
      "Éclairage LED",
      "Sellerie TEP/Alcantara",
      "Volant GT compact",
    ],
    pricing: {
      daily: 32,
      weekly: 190,
      monthly: 680,
      deposit: 450,
    },
    availability: true,
    rating: 4.7,
    reviews: 203,
    badge: "Nouveau",
    description:
      "La 208 GT Line allie style moderne et technologies innovantes. Son i-Cockpit révolutionnaire transforme chaque trajet en expérience unique.",
    included: [
      "Assurance tous risques",
      "Kilométrage illimité",
      "Assistance 24h/24",
      "GPS inclus",
    ],
    location: "Senlis",
  },
  {
    id: 6,
    name: "BMW Série 1 M135i",
    brand: "BMW",
    model: "Série 1 M135i",
    year: 2023,
    category: "sport",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
    ],
    mainImage: "/api/placeholder/400/250",
    specs: {
      power: "306 ch",
      consumption: "7.1L/100km",
      transmission: "Automatique",
      fuel: "Essence",
      doors: 5,
      seats: 5,
      luggage: "380L",
      acceleration: "4.8s (0-100km/h)",
      maxSpeed: "250 km/h",
    },
    features: [
      "BMW Live Cockpit Professional",
      "Système audio Harman Kardon",
      "Sièges sport M",
      "Suspension M Sport",
      "Différentiel M Sport",
      "Jantes M 18 pouces",
      "Échappement M Performance",
      "Modes de conduite M",
    ],
    pricing: {
      daily: 85,
      weekly: 520,
      monthly: 1850,
      deposit: 1500,
    },
    availability: true,
    rating: 4.9,
    reviews: 94,
    badge: "Exclusive",
    description:
      "La BMW M135i offre des performances exceptionnelles dans un format compact. 306 chevaux de pur plaisir avec la transmission intégrale xDrive.",
    included: [
      "Assurance tous risques",
      "Kilométrage illimité",
      "Assistance 24h/24",
      "Service premium",
    ],
    location: "Compiègne",
  },
];

export const getVehicleById = (id: number): Vehicle | undefined => {
  return vehicles.find((vehicle) => vehicle.id === id);
};

export const getVehiclesByCategory = (category: string): Vehicle[] => {
  if (category === "all") return vehicles;
  return vehicles.filter((vehicle) => vehicle.category === category);
};

export const getAvailableVehicles = (): Vehicle[] => {
  return vehicles.filter((vehicle) => vehicle.availability);
};

export const calculatePrice = (vehicleId: number, days: number): number => {
  const vehicle = getVehicleById(vehicleId);
  if (!vehicle) return 0;

  if (days >= 30) {
    return vehicle.pricing.monthly;
  } else if (days >= 7) {
    const weeks = Math.floor(days / 7);
    const remainingDays = days % 7;
    return (
      weeks * vehicle.pricing.weekly + remainingDays * vehicle.pricing.daily
    );
  } else {
    return days * vehicle.pricing.daily;
  }
};

export const getDiscountPercentage = (days: number): number => {
  if (days >= 30) return 15;
  if (days >= 7) return 10;
  if (days >= 3) return 5;
  return 0;
};

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  Car,
  Star,
  Heart,
  MapPin,
  Zap,
  Fuel,
  Users,
  Settings,
  SlidersHorizontal,
  Grid3X3,
  List,
  ArrowUpDown,
} from "lucide-react";
import { vehicles, getVehiclesByCategory } from "../data/vehicles";

export default function Vehicles() {
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedTransmission, setSelectedTransmission] = useState("all");
  const [selectedFuel, setSelectedFuel] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);

  const brands = [...new Set(vehicles.map((v) => v.brand))];
  const categories = [
    { key: "all", label: "Tous", count: vehicles.length },
    {
      key: "citadine",
      label: "Citadines",
      count: vehicles.filter((v) => v.category === "citadine").length,
    },
    {
      key: "sport",
      label: "Sport",
      count: vehicles.filter((v) => v.category === "sport").length,
    },
    {
      key: "premium",
      label: "Premium",
      count: vehicles.filter((v) => v.category === "premium").length,
    },
    {
      key: "utilitaire",
      label: "Utilitaires",
      count: vehicles.filter((v) => v.category === "utilitaire").length,
    },
  ];

  useEffect(() => {
    let filtered = vehicles.filter((vehicle) => {
      const matchesSearch =
        vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || vehicle.category === selectedCategory;
      const matchesBrand =
        selectedBrand === "all" || vehicle.brand === selectedBrand;
      const matchesTransmission =
        selectedTransmission === "all" ||
        vehicle.specs.transmission === selectedTransmission;
      const matchesFuel =
        selectedFuel === "all" || vehicle.specs.fuel === selectedFuel;
      const matchesPrice =
        vehicle.pricing.daily >= priceRange[0] &&
        vehicle.pricing.daily <= priceRange[1];

      return (
        matchesSearch &&
        matchesCategory &&
        matchesBrand &&
        matchesTransmission &&
        matchesFuel &&
        matchesPrice
      );
    });

    // Tri
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "price-low":
          return a.pricing.daily - b.pricing.daily;
        case "price-high":
          return b.pricing.daily - a.pricing.daily;
        case "rating":
          return b.rating - a.rating;
        case "year":
          return b.year - a.year;
        default:
          return 0;
      }
    });

    setFilteredVehicles(filtered);
  }, [
    searchTerm,
    selectedCategory,
    selectedBrand,
    selectedTransmission,
    selectedFuel,
    priceRange,
    sortBy,
  ]);

  const toggleFavorite = (vehicleId: number) => {
    setFavorites((prev) =>
      prev.includes(vehicleId)
        ? prev.filter((id) => id !== vehicleId)
        : [...prev, vehicleId],
    );
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedBrand("all");
    setSelectedTransmission("all");
    setSelectedFuel("all");
    setPriceRange([0, 100]);
    setSortBy("name");
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Populaire":
        return "bg-gradient-to-r from-red-500 to-red-600";
      case "Sport":
        return "bg-gradient-to-r from-gray-800 to-gray-900";
      case "Premium":
        return "bg-gradient-to-r from-yellow-500 to-yellow-600";
      case "Eco":
        return "bg-gradient-to-r from-green-500 to-green-600";
      case "Nouveau":
        return "bg-gradient-to-r from-blue-500 to-blue-600";
      case "Exclusive":
        return "bg-gradient-to-r from-purple-500 to-purple-600";
      default:
        return "bg-gradient-to-r from-gray-500 to-gray-600";
    }
  };

  return (
    <main className="pt-16 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Notre <span className="gradient-text">flotte</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez notre sélection de véhicules premium pour tous vos
              besoins
            </p>
          </div>

          {/* Barre de recherche et filtres */}
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Recherche */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Rechercher un véhicule..."
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:border-red-500 focus:outline-none"
              />
            </div>

            {/* Filtres rapides */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-6 py-4 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200 transition-colors"
              >
                <SlidersHorizontal className="w-5 h-5" />
                <span>Filtres</span>
              </button>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-3 rounded-xl transition-colors ${
                    viewMode === "grid"
                      ? "bg-red-500 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-3 rounded-xl transition-colors ${
                    viewMode === "list"
                      ? "bg-red-500 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar filtres */}
          <div
            className={`lg:w-80 space-y-6 ${
              showFilters ? "block" : "hidden lg:block"
            }`}
          >
            {/* Catégories */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Catégories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.key}
                    onClick={() => setSelectedCategory(category.key)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors ${
                      selectedCategory === category.key
                        ? "bg-red-50 text-red-600 border border-red-200"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span>{category.label}</span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        selectedCategory === category.key
                          ? "bg-red-100 text-red-600"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Marques */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Marques</h3>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl focus:border-red-500 focus:outline-none"
              >
                <option value="all">Toutes les marques</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            {/* Transmission */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Transmission
              </h3>
              <div className="space-y-2">
                {["all", "Manuelle", "Automatique"].map((transmission) => (
                  <button
                    key={transmission}
                    onClick={() => setSelectedTransmission(transmission)}
                    className={`w-full p-3 text-left rounded-xl transition-colors ${
                      selectedTransmission === transmission
                        ? "bg-red-50 text-red-600 border border-red-200"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {transmission === "all" ? "Toutes" : transmission}
                  </button>
                ))}
              </div>
            </div>

            {/* Carburant */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Carburant
              </h3>
              <div className="space-y-2">
                {["all", "Essence", "Diesel", "Hybride", "Électrique"].map(
                  (fuel) => (
                    <button
                      key={fuel}
                      onClick={() => setSelectedFuel(fuel)}
                      className={`w-full p-3 text-left rounded-xl transition-colors ${
                        selectedFuel === fuel
                          ? "bg-red-50 text-red-600 border border-red-200"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {fuel === "all" ? "Tous" : fuel}
                    </button>
                  ),
                )}
              </div>
            </div>

            {/* Prix */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Prix par jour
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    {priceRange[0]}€
                  </span>
                  <span className="text-sm text-gray-600">
                    {priceRange[1]}€
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], Number(e.target.value)])
                  }
                  className="w-full"
                />
              </div>
            </div>

            {/* Bouton reset */}
            <button
              onClick={resetFilters}
              className="w-full btn-secondary text-center"
            >
              Réinitialiser les filtres
            </button>
          </div>

          {/* Contenu principal */}
          <div className="flex-1">
            {/* Barre de tri et résultats */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-gray-600">
                {filteredVehicles.length} véhicule
                {filteredVehicles.length > 1 ? "s" : ""} trouvé
                {filteredVehicles.length > 1 ? "s" : ""}
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <ArrowUpDown className="w-4 h-4 text-gray-500" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-xl px-4 py-2 focus:border-red-500 focus:outline-none"
                  >
                    <option value="name">Nom A-Z</option>
                    <option value="price-low">Prix croissant</option>
                    <option value="price-high">Prix décroissant</option>
                    <option value="rating">Meilleures notes</option>
                    <option value="year">Plus récents</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Grille/Liste des véhicules */}
            {viewMode === "grid" ? (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredVehicles.map((vehicle) => (
                  <div
                    key={vehicle.id}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    {/* Image */}
                    <div className="relative">
                      <img
                        src={vehicle.mainImage}
                        alt={vehicle.name}
                        className="w-full h-48 object-cover"
                      />
                      {vehicle.badge && (
                        <div
                          className={`absolute top-4 left-4 ${getBadgeColor(
                            vehicle.badge,
                          )} text-white px-3 py-1 rounded-full text-sm font-bold`}
                        >
                          {vehicle.badge}
                        </div>
                      )}
                      <button
                        onClick={() => toggleFavorite(vehicle.id)}
                        className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                          favorites.includes(vehicle.id)
                            ? "bg-red-100 text-red-600"
                            : "bg-white/90 text-gray-600 hover:bg-red-50 hover:text-red-600"
                        }`}
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            favorites.includes(vehicle.id) ? "fill-current" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Contenu */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900">
                          {vehicle.name}
                        </h3>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm font-semibold text-gray-600">
                            {vehicle.rating}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center text-gray-500 mb-4">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{vehicle.location}</span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 mb-6 text-sm">
                        <div className="flex items-center text-gray-600">
                          <Zap className="w-4 h-4 mr-1 text-red-500" />
                          {vehicle.specs.power}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Fuel className="w-4 h-4 mr-1 text-green-500" />
                          {vehicle.specs.fuel}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Settings className="w-4 h-4 mr-1 text-blue-500" />
                          {vehicle.specs.transmission.slice(0, 3)}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-gray-900">
                            {vehicle.pricing.daily}€
                          </span>
                          <span className="text-gray-500">/jour</span>
                        </div>
                        <Link
                          to={`/vehicule/${vehicle.id}`}
                          className="btn-primary"
                        >
                          Voir détails
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredVehicles.map((vehicle) => (
                  <div
                    key={vehicle.id}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Image */}
                      <div className="relative md:w-64 flex-shrink-0">
                        <img
                          src={vehicle.mainImage}
                          alt={vehicle.name}
                          className="w-full h-48 md:h-32 object-cover rounded-xl"
                        />
                        {vehicle.badge && (
                          <div
                            className={`absolute top-2 left-2 ${getBadgeColor(
                              vehicle.badge,
                            )} text-white px-2 py-1 rounded-full text-xs font-bold`}
                          >
                            {vehicle.badge}
                          </div>
                        )}
                      </div>

                      {/* Contenu */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">
                              {vehicle.name}
                            </h3>
                            <div className="flex items-center text-gray-500">
                              <MapPin className="w-4 h-4 mr-1" />
                              <span className="text-sm">
                                {vehicle.location}
                              </span>
                              <div className="flex items-center ml-4">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="ml-1 text-sm font-semibold text-gray-600">
                                  {vehicle.rating}
                                </span>
                                <span className="ml-1 text-xs text-gray-500">
                                  ({vehicle.reviews})
                                </span>
                              </div>
                            </div>
                          </div>
                          <button
                            onClick={() => toggleFavorite(vehicle.id)}
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                              favorites.includes(vehicle.id)
                                ? "bg-red-100 text-red-600"
                                : "bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600"
                            }`}
                          >
                            <Heart
                              className={`w-5 h-5 ${
                                favorites.includes(vehicle.id)
                                  ? "fill-current"
                                  : ""
                              }`}
                            />
                          </button>
                        </div>

                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {vehicle.description}
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <Zap className="w-4 h-4 mr-2 text-red-500" />
                            {vehicle.specs.power}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Fuel className="w-4 h-4 mr-2 text-green-500" />
                            {vehicle.specs.consumption}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Settings className="w-4 h-4 mr-2 text-blue-500" />
                            {vehicle.specs.transmission}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="w-4 h-4 mr-2 text-purple-500" />
                            {vehicle.specs.seats} places
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-2xl font-bold text-gray-900">
                              {vehicle.pricing.daily}€
                            </span>
                            <span className="text-gray-500">/jour</span>
                            {vehicle.pricing.weekly <
                              vehicle.pricing.daily * 7 && (
                              <span className="ml-2 text-sm text-green-600">
                                Réduction semaine disponible
                              </span>
                            )}
                          </div>
                          <Link
                            to={`/vehicule/${vehicle.id}`}
                            className="btn-primary"
                          >
                            Voir détails
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {filteredVehicles.length === 0 && (
              <div className="text-center py-16">
                <Car className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Aucun véhicule trouvé
                </h3>
                <p className="text-gray-600 mb-6">
                  Essayez de modifier vos critères de recherche
                </p>
                <button onClick={resetFilters} className="btn-primary">
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

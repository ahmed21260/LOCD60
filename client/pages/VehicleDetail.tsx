import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Star,
  Heart,
  Share2,
  Calendar,
  MapPin,
  Users,
  Fuel,
  Zap,
  Settings,
  Shield,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  Phone,
  MessageCircle,
} from "lucide-react";
import {
  vehicles,
  getVehicleById,
  calculatePrice,
  getDiscountPercentage,
} from "../data/vehicles";

export default function VehicleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState(getVehicleById(Number(id)));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedDays, setSelectedDays] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (!vehicle) {
      navigate("/vehicules");
    }
  }, [vehicle, navigate]);

  if (!vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Véhicule non trouvé
          </h2>
          <Link to="/vehicules" className="btn-primary">
            Retour aux véhicules
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % vehicle.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length,
    );
  };

  const totalPrice = calculatePrice(vehicle.id, selectedDays);
  const discountPercentage = getDiscountPercentage(selectedDays);
  const originalPrice = selectedDays * vehicle.pricing.daily;
  const savings = originalPrice - totalPrice;

  const handleReservation = () => {
    const reservationData = {
      vehicleId: vehicle.id,
      vehicleName: vehicle.name,
      startDate,
      endDate,
      days: selectedDays,
      totalPrice,
      deposit: vehicle.pricing.deposit,
    };

    localStorage.setItem("reservationData", JSON.stringify(reservationData));
    navigate("/reservation");
  };

  const relatedVehicles = vehicles
    .filter((v) => v.category === vehicle.category && v.id !== vehicle.id)
    .slice(0, 3);

  return (
    <main className="pt-16 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 hover:text-red-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Retour
            </button>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-3 rounded-full transition-colors ${
                  isFavorite
                    ? "bg-red-100 text-red-600"
                    : "bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600"
                }`}
              >
                <Heart
                  className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`}
                />
              </button>
              <button className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Colonne principale */}
          <div className="lg:col-span-2 space-y-8">
            {/* Galerie d'images */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <div className="relative h-96 md:h-[500px]">
                <img
                  src={vehicle.images[currentImageIndex]}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />

                {/* Badge */}
                {vehicle.badge && (
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                    {vehicle.badge}
                  </div>
                )}

                {/* Navigation */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-colors shadow-lg"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-colors shadow-lg"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Indicateurs */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {vehicle.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "bg-white w-8"
                          : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Miniatures */}
              <div className="p-4 flex space-x-3 overflow-x-auto">
                {vehicle.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex
                        ? "border-red-500"
                        : "border-gray-200 hover:border-red-300"
                    }`}
                  >
                    <img
                      src={image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Informations du véhicule */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {vehicle.name}
                  </h1>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="ml-1 font-semibold text-gray-700">
                        {vehicle.rating}
                      </span>
                      <span className="ml-1 text-gray-500">
                        ({vehicle.reviews} avis)
                      </span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      {vehicle.location}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-900">
                    {vehicle.pricing.daily}€
                  </div>
                  <div className="text-gray-500">par jour</div>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8">
                {vehicle.description}
              </p>

              {/* Spécifications */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {vehicle.specs.power}
                    </div>
                    <div className="text-sm text-gray-500">Puissance</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Fuel className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {vehicle.specs.consumption}
                    </div>
                    <div className="text-sm text-gray-500">Consommation</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {vehicle.specs.transmission}
                    </div>
                    <div className="text-sm text-gray-500">Transmission</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {vehicle.specs.seats} places
                    </div>
                    <div className="text-sm text-gray-500">Passagers</div>
                  </div>
                </div>
              </div>

              {/* Équipements */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Équipements inclus
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {vehicle.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Services inclus */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Services inclus dans le prix
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {vehicle.included.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar réservation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Réserver ce véhicule
                </h3>

                {/* Sélection des dates */}
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Date de début
                    </label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:border-red-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Date de fin
                    </label>
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      min={startDate || new Date().toISOString().split("T")[0]}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:border-red-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Durée de location */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Durée de location
                  </label>
                  <select
                    value={selectedDays}
                    onChange={(e) => setSelectedDays(Number(e.target.value))}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:border-red-500 focus:outline-none"
                  >
                    <option value={1}>1 jour</option>
                    <option value={2}>2 jours</option>
                    <option value={3}>3 jours</option>
                    <option value={7}>1 semaine</option>
                    <option value={14}>2 semaines</option>
                    <option value={30}>1 mois</option>
                  </select>
                </div>

                {/* Récapitulatif des prix */}
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        {vehicle.pricing.daily}€ × {selectedDays} jour
                        {selectedDays > 1 ? "s" : ""}
                      </span>
                      <span className="text-gray-900">{originalPrice}€</span>
                    </div>
                    {discountPercentage > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Réduction ({discountPercentage}%)</span>
                        <span>-{savings}€</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-600">Caution</span>
                      <span className="text-gray-900">
                        {vehicle.pricing.deposit}€
                      </span>
                    </div>
                    <div className="border-t border-gray-200 pt-3">
                      <div className="flex justify-between text-xl font-bold">
                        <span>Total</span>
                        <span className="text-red-600">{totalPrice}€</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Boutons d'action */}
                <div className="space-y-3">
                  <button
                    onClick={handleReservation}
                    disabled={!startDate || !endDate}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Réserver maintenant
                  </button>
                  <button className="w-full btn-secondary">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Poser une question
                  </button>
                </div>

                {/* Contact rapide */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-1" />
                      06 12 34 56 78
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      8h-20h
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Véhicules similaires */}
        {relatedVehicles.length > 0 && (
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Véhicules similaires
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedVehicles.map((relatedVehicle) => (
                <Link
                  key={relatedVehicle.id}
                  to={`/vehicule/${relatedVehicle.id}`}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <img
                    src={relatedVehicle.mainImage}
                    alt={relatedVehicle.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {relatedVehicle.name}
                    </h4>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm font-semibold text-gray-600">
                          {relatedVehicle.rating}
                        </span>
                      </div>
                      <div className="text-xl font-bold text-red-600">
                        {relatedVehicle.pricing.daily}€/jour
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

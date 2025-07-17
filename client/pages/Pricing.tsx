import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Calculator,
  Calendar,
  Car,
  Clock,
  Shield,
  Star,
  Check,
  X,
  Info,
  ChevronDown,
  Zap,
  Fuel,
  Users,
  ArrowRight,
} from "lucide-react";
import {
  vehicles,
  calculatePrice,
  getDiscountPercentage,
} from "../data/vehicles";

export default function Pricing() {
  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0].id);
  const [rentalDays, setRentalDays] = useState(1);
  const [showCalculator, setShowCalculator] = useState(true);

  const selectedVehicleData = vehicles.find((v) => v.id === selectedVehicle);
  const calculatedPrice = calculatePrice(selectedVehicle, rentalDays);
  const discountPercentage = getDiscountPercentage(rentalDays);
  const originalPrice = rentalDays * (selectedVehicleData?.pricing.daily || 0);
  const savings = originalPrice - calculatedPrice;

  const pricingTiers = [
    {
      title: "Particulier",
      subtitle: "Idéal pour les vacances et week-ends",
      price: "À partir de 35€",
      period: "/jour",
      color: "border-gray-200 bg-white",
      popular: false,
      features: [
        "Assurance tous risques incluse",
        "Kilométrage illimité",
        "Assistance 24h/24",
        "Livraison gratuite dans l'Oise",
        "Nettoyage véhicule",
        "Réservation annulable 24h avant",
      ],
      notIncluded: ["Carburant", "Péages", "Conducteur supplémentaire"],
    },
    {
      title: "Professionnel",
      subtitle: "Pour vos déplacements d'affaires",
      price: "À partir de 45€",
      period: "/jour",
      color: "border-red-500 bg-red-50",
      popular: true,
      features: [
        "Tout du forfait Particulier",
        "Facture avec TVA",
        "Véhicules premium disponibles",
        "Service prioritaire",
        "Gestionnaire dédié",
        "Contrats cadres possibles",
        "Paiement différé (30j)",
      ],
      notIncluded: ["Carburant", "Péages"],
    },
    {
      title: "Longue durée",
      subtitle: "Location mensuelle avantageuse",
      price: "À partir de 680€",
      period: "/mois",
      color: "border-gray-200 bg-white",
      popular: false,
      features: [
        "Tout du forfait Professionnel",
        "Tarifs dégressifs",
        "Jusqu'à -30% de réduction",
        "Maintenance incluse",
        "Remplacement véhicule gratuit",
        "Assurance renforcée",
        "Télépéage inclus",
      ],
      notIncluded: ["Carburant"],
    },
  ];

  const faqItems = [
    {
      question: "Comment sont calculés les tarifs ?",
      answer:
        "Nos tarifs varient selon le véhicule choisi, la durée de location et la saison. Plus la durée est longue, plus le prix journalier diminue. Nous appliquons des réductions automatiques : 5% à partir de 3 jours, 10% à partir de 7 jours, et 15% à partir de 30 jours.",
    },
    {
      question: "Y a-t-il des frais cachés ?",
      answer:
        "Non, nos prix sont transparents. Le prix affiché inclut l'assurance tous risques, le kilométrage illimité et l'assistance 24h/24. Seuls le carburant, les péages et les options supplémentaires sont en sus.",
    },
    {
      question: "Quelle caution est demandée ?",
      answer:
        "La caution varie de 500€ à 1500€ selon le véhicule. Elle est prélevée sur votre carte bancaire et automatiquement restituée dans les 7 jours suivant le retour du véhicule, sous réserve qu'aucun dommage ne soit constaté.",
    },
    {
      question: "Puis-je annuler ma réservation ?",
      answer:
        "Oui, vous pouvez annuler gratuitement jusqu'à 24h avant le début de la location. Au-delà, des frais d'annulation de 50% du montant total s'appliquent.",
    },
    {
      question: "Proposez-vous des réductions ?",
      answer:
        "Oui ! Nous proposons des réductions automatiques selon la durée de location, des tarifs préférentiels pour les étudiants sur présentation de la carte, et des offres spéciales pour nos clients fidèles.",
    },
  ];

  return (
    <main className="pt-16 bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Nos <span className="gradient-text">tarifs</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Des prix transparents et compétitifs pour tous vos besoins de
              mobilité. Calculez votre devis en temps réel.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full">
                <Check className="w-4 h-4 mr-2" />
                Assurance incluse
              </div>
              <div className="flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 mr-2" />
                Kilométrage illimité
              </div>
              <div className="flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 mr-2" />
                Assistance 24h/24
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculateur de prix */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">
                      Calculateur de prix
                    </h2>
                    <p className="text-red-100">
                      Obtenez un devis instantané et personnalisé
                    </p>
                  </div>
                  <Calculator className="w-12 h-12 text-red-200" />
                </div>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Sélection */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-lg font-semibold text-gray-900 mb-4">
                        Choisissez votre véhicule
                      </label>
                      <div className="space-y-3">
                        {vehicles.slice(0, 4).map((vehicle) => (
                          <div
                            key={vehicle.id}
                            className={`p-4 border-2 rounded-xl cursor-pointer transition-all hover:shadow-md ${
                              selectedVehicle === vehicle.id
                                ? "border-red-500 bg-red-50"
                                : "border-gray-200 hover:border-red-300"
                            }`}
                            onClick={() => setSelectedVehicle(vehicle.id)}
                          >
                            <div className="flex items-center space-x-4">
                              <img
                                src={vehicle.mainImage}
                                alt={vehicle.name}
                                className="w-16 h-12 object-cover rounded-lg"
                              />
                              <div className="flex-1">
                                <h3 className="font-semibold text-gray-900">
                                  {vehicle.name}
                                </h3>
                                <div className="flex items-center space-x-4 text-sm text-gray-600">
                                  <span className="flex items-center">
                                    <Zap className="w-4 h-4 mr-1 text-red-500" />
                                    {vehicle.specs.power}
                                  </span>
                                  <span className="flex items-center">
                                    <Fuel className="w-4 h-4 mr-1 text-green-500" />
                                    {vehicle.specs.consumption}
                                  </span>
                                  <span className="flex items-center">
                                    <Users className="w-4 h-4 mr-1 text-blue-500" />
                                    {vehicle.specs.seats}
                                  </span>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-lg font-bold text-gray-900">
                                  {vehicle.pricing.daily}€
                                </div>
                                <div className="text-sm text-gray-500">
                                  par jour
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-lg font-semibold text-gray-900 mb-4">
                        Durée de location
                      </label>
                      <div className="space-y-3">
                        <input
                          type="range"
                          min="1"
                          max="90"
                          value={rentalDays}
                          onChange={(e) =>
                            setRentalDays(Number(e.target.value))
                          }
                          className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                        />
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>1 jour</span>
                          <span>90 jours</span>
                        </div>
                        <div className="text-center">
                          <span className="text-2xl font-bold text-red-600">
                            {rentalDays}
                          </span>
                          <span className="text-gray-600 ml-2">
                            jour{rentalDays > 1 ? "s" : ""}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Résultat */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Devis personnalisé
                    </h3>

                    {selectedVehicleData && (
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4 p-4 bg-white rounded-xl">
                          <img
                            src={selectedVehicleData.mainImage}
                            alt={selectedVehicleData.name}
                            className="w-16 h-12 object-cover rounded-lg"
                          />
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              {selectedVehicleData.name}
                            </h4>
                            <div className="flex items-center text-sm text-gray-600">
                              <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                              {selectedVehicleData.rating}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">
                              Prix de base ({rentalDays} jour
                              {rentalDays > 1 ? "s" : ""})
                            </span>
                            <span className="font-semibold">
                              {originalPrice}€
                            </span>
                          </div>

                          {discountPercentage > 0 && (
                            <div className="flex justify-between text-green-600">
                              <span>Réduction ({discountPercentage}%)</span>
                              <span>-{savings}€</span>
                            </div>
                          )}

                          <div className="flex justify-between">
                            <span className="text-gray-600">Caution</span>
                            <span className="text-gray-600">
                              {selectedVehicleData.pricing.deposit}€
                            </span>
                          </div>

                          <div className="border-t border-gray-300 pt-3">
                            <div className="flex justify-between text-2xl font-bold">
                              <span>Total</span>
                              <span className="text-red-600">
                                {calculatedPrice}€
                              </span>
                            </div>
                            <div className="text-sm text-gray-500 text-right">
                              Soit {(calculatedPrice / rentalDays).toFixed(2)}€
                              /jour
                            </div>
                          </div>
                        </div>

                        <div className="pt-4">
                          <Link
                            to={`/vehicule/${selectedVehicleData.id}`}
                            className="btn-primary w-full text-center"
                          >
                            Réserver ce véhicule
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </Link>
                          <p className="text-xs text-gray-500 text-center mt-2">
                            Réservation annulable jusqu'à 24h avant
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formules tarifaires */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos <span className="gradient-text">formules</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choisissez la formule qui correspond le mieux à vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-8 shadow-lg border-2 ${tier.color} ${
                  tier.popular ? "transform scale-105" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Le plus populaire
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {tier.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{tier.subtitle}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-red-600">
                      {tier.price.split(" ")[2]}
                    </span>
                    <span className="text-gray-500 ml-2">{tier.period}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    Inclus dans cette formule
                  </h4>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {tier.notIncluded.length > 0 && (
                    <div className="pt-4 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-900 flex items-center mb-3">
                        <X className="w-5 h-5 text-red-500 mr-2" />
                        Non inclus
                      </h4>
                      <ul className="space-y-2">
                        {tier.notIncluded.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-center space-x-3"
                          >
                            <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-8">
                  <Link
                    to="/vehicules"
                    className={`w-full text-center py-4 px-6 rounded-xl font-semibold transition-all ${
                      tier.popular
                        ? "bg-red-500 text-white hover:bg-red-600"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    Choisir cette formule
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pourquoi nos <span className="gradient-text">tarifs</span> ?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Transparence totale",
                description: "Aucun frais caché, prix tout inclus affichés",
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Réductions automatiques",
                description: "Plus vous louez longtemps, moins vous payez",
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Disponibilité 24h/24",
                description: "Réservation et assistance à toute heure",
              },
              {
                icon: <Car className="w-8 h-8" />,
                title: "Véhicules récents",
                description: "Flotte renouvelée régulièrement, moins de 2 ans",
              },
            ].map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-red-600">
                  {advantage.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Tarifs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Questions sur les <span className="gradient-text">tarifs</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="bg-white rounded-2xl border border-gray-200 hover:border-red-300 transition-all duration-300 overflow-hidden"
              >
                <summary className="p-6 cursor-pointer text-gray-900 font-semibold text-lg hover:text-red-600 transition-colors flex items-center justify-between">
                  {item.question}
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-red-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Prêt à réserver votre véhicule ?
          </h2>
          <p className="text-red-100 text-xl mb-8 max-w-2xl mx-auto">
            Profitez de nos tarifs préférentiels et de notre service premium
            pour tous vos déplacements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/vehicules"
              className="btn-secondary bg-white text-red-600 hover:bg-gray-100"
            >
              Voir tous les véhicules
            </Link>
            <a
              href="tel:0612345678"
              className="btn-secondary border-white text-white hover:bg-white hover:text-red-600"
            >
              Appelez-nous : 06 12 34 56 78
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

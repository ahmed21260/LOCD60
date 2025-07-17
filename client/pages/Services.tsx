import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Truck,
  Clock,
  Shield,
  Car,
  MapPin,
  Baby,
  Navigation,
  Wrench,
  Heart,
  Users,
  Building,
  GraduationCap,
  Phone,
  CheckCircle,
  Star,
  ArrowRight,
  Calendar,
  CreditCard,
  Headphones,
} from "lucide-react";

export default function Services() {
  const [selectedService, setSelectedService] = useState("delivery");

  const mainServices = [
    {
      id: "delivery",
      icon: <Truck className="w-8 h-8" />,
      title: "Livraison & Retour",
      description: "Service de livraison gratuit dans tout l'Oise",
      features: [
        "Livraison gratuite dans l'Oise (60)",
        "Livraison en moins de 2h en semaine",
        "Retour à domicile ou lieu de travail",
        "Livraison weekend (+15€)",
        "Livraison départements limitrophes (+25€)",
        "Créneaux de livraison au choix",
      ],
      image: "/api/placeholder/600/400",
      price: "Gratuit dans l'Oise",
    },
    {
      id: "assistance",
      icon: <Headphones className="w-8 h-8" />,
      title: "Assistance 24h/24",
      description: "Support client et assistance technique",
      features: [
        "Ligne d'assistance 24h/24 - 7j/7",
        "Dépannage en cas de panne",
        "Véhicule de remplacement si nécessaire",
        "Support technique par téléphone",
        "Assistance en cas d'accident",
        "Service client multilingue",
      ],
      image: "/api/placeholder/600/400",
      price: "Inclus",
    },
    {
      id: "insurance",
      icon: <Shield className="w-8 h-8" />,
      title: "Assurance Premium",
      description: "Protection complète pour votre tranquillité",
      features: [
        "Assurance tous risques incluse",
        "Franchise réduite (300€ max)",
        "Bris de glace inclus",
        "Vol et incendie couverts",
        "Assistance juridique",
        "Option franchise 0€ (+15€/jour)",
      ],
      image: "/api/placeholder/600/400",
      price: "Inclus + options",
    },
    {
      id: "maintenance",
      icon: <Wrench className="w-8 h-8" />,
      title: "Maintenance & Entretien",
      description: "Véhicules entretenus par des professionnels",
      features: [
        "Révision complète tous les 10 000 km",
        "Contrôle technique à jour",
        "Nettoyage intérieur/extérieur",
        "Vérification des niveaux",
        "Pneumatiques en excellent état",
        "Désinfection systématique",
      ],
      image: "/api/placeholder/600/400",
      price: "Inclus",
    },
  ];

  const additionalOptions = [
    {
      icon: <Navigation className="w-6 h-6" />,
      title: "GPS Navigation",
      description: "Système de navigation avec cartes à jour",
      price: "5€/jour",
      popular: true,
    },
    {
      icon: <Baby className="w-6 h-6" />,
      title: "Siège enfant",
      description: "Siège auto homologué (3-12 ans)",
      price: "3€/jour",
      popular: true,
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Rehausseur",
      description: "Rehausseur pour enfants (4-12 ans)",
      price: "2€/jour",
      popular: false,
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Conducteur supplémentaire",
      description: "Autorisation de conduite pour une 2ème personne",
      price: "Gratuit",
      popular: true,
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Coffre de toit",
      description: "Coffre de toit 400L (selon disponibilité)",
      price: "15€/jour",
      popular: false,
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Kit de dépannage",
      description: "Câbles, compresseur, triangle de signalisation",
      price: "Inclus",
      popular: false,
    },
  ];

  const specialOffers = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Forfait Professionnel",
      description: "Solutions sur mesure pour les entreprises",
      features: [
        "Facture avec TVA déductible",
        "Contrats cadres disponibles",
        "Gestionnaire dédié",
        "Tarifs préférentiels volume",
        "Paiement différé (30 jours)",
        "Véhicules de remplacement prioritaires",
      ],
      price: "À partir de 40€/jour",
      badge: "Entreprises",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Forfait Étudiant",
      description: "Tarifs réduits pour les étudiants",
      features: [
        "-15% sur tous les véhicules",
        "Caution réduite (300€)",
        "Assurance jeune conducteur incluse",
        "Kilométrage illimité",
        "Réservation flexible",
        "Parrainage étudiant (+5% de réduction)",
      ],
      price: "À partir de 28€/jour",
      badge: "Étudiants",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Forfait Week-end",
      description: "Offres spéciales pour vos escapades",
      features: [
        "Prix fixe vendredi-lundi",
        "-20% par rapport au tarif journalier",
        "Kilométrage illimité",
        "Retour flexible dimanche soir",
        "GPS inclus",
        "Nettoyage offert",
      ],
      price: "À partir de 95€",
      badge: "Week-end",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Choisissez",
      description: "Sélectionnez votre véhicule et vos dates",
      icon: <Car className="w-6 h-6" />,
    },
    {
      number: 2,
      title: "Réservez",
      description: "Complétez votre réservation en ligne",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      number: 3,
      title: "Payez",
      description: "Paiement sécurisé par carte ou PayPal",
      icon: <CreditCard className="w-6 h-6" />,
    },
    {
      number: 4,
      title: "Profitez",
      description: "Récupérez ou faites-vous livrer votre véhicule",
      icon: <CheckCircle className="w-6 h-6" />,
    },
  ];

  const testimonials = [
    {
      name: "Jean-Pierre M.",
      company: "Directeur Commercial",
      text: "Le forfait professionnel nous fait économiser du temps et de l'argent. Service impeccable !",
      rating: 5,
    },
    {
      name: "Amélie L.",
      company: "Étudiante ESCOM",
      text: "Grâce au forfait étudiant, je peux rentrer chez mes parents tous les week-ends. Parfait !",
      rating: 5,
    },
    {
      name: "Marc & Sarah",
      company: "Couple",
      text: "Nous utilisons le forfait week-end chaque mois. Pratique et économique pour nos escapades.",
      rating: 5,
    },
  ];

  return (
    <main className="pt-16 bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Nos <span className="gradient-text">services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Des services pens��s pour simplifier votre expérience de location
              et vous accompagner dans tous vos déplacements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4 mr-2" />
                Livraison gratuite
              </div>
              <div className="flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 mr-2" />
                Assistance 24h/24
              </div>
              <div className="flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 mr-2" />
                Assurance incluse
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services principaux */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Services <span className="gradient-text">principaux</span>
            </h2>
            <p className="text-xl text-gray-600">
              Tout ce dont vous avez besoin pour une location réussie
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Navigation des services */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Nos services
                </h3>
                <div className="space-y-3">
                  {mainServices.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-all ${
                        selectedService === service.id
                          ? "bg-red-50 border-2 border-red-500 text-red-600"
                          : "bg-gray-50 border-2 border-transparent text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <div
                        className={`p-2 rounded-lg ${
                          selectedService === service.id
                            ? "bg-red-100"
                            : "bg-white"
                        }`}
                      >
                        {service.icon}
                      </div>
                      <div className="text-left">
                        <div className="font-semibold">{service.title}</div>
                        <div className="text-sm opacity-75">
                          {service.price}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Détail du service sélectionné */}
            <div className="lg:col-span-2">
              {mainServices
                .filter((service) => service.id === selectedService)
                .map((service) => (
                  <div
                    key={service.id}
                    className="bg-white rounded-3xl shadow-lg overflow-hidden"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="p-3 bg-red-100 rounded-xl text-red-600">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {service.title}
                          </h3>
                          <p className="text-gray-600">{service.description}</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        {service.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm text-gray-600">
                              Tarif de ce service
                            </div>
                            <div className="text-2xl font-bold text-red-600">
                              {service.price}
                            </div>
                          </div>
                          <Link to="/vehicules" className="btn-primary">
                            Réserver maintenant
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Options supplémentaires */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Options <span className="gradient-text">supplémentaires</span>
            </h2>
            <p className="text-xl text-gray-600">
              Personnalisez votre location selon vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalOptions.map((option, index) => (
              <div
                key={index}
                className={`relative bg-white border-2 rounded-2xl p-6 transition-all hover:shadow-lg ${
                  option.popular
                    ? "border-red-500 bg-red-50"
                    : "border-gray-200 hover:border-red-300"
                }`}
              >
                {option.popular && (
                  <div className="absolute -top-3 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Populaire
                    </span>
                  </div>
                )}

                <div className="flex items-start space-x-4">
                  <div
                    className={`p-3 rounded-xl ${
                      option.popular
                        ? "bg-red-100 text-red-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {option.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {option.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {option.description}
                    </p>
                    <div className="text-lg font-bold text-red-600">
                      {option.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offres spéciales */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Offres <span className="gradient-text">spéciales</span>
            </h2>
            <p className="text-xl text-gray-600">
              Des formules adaptées à tous les profils
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {specialOffers.map((offer, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg relative"
              >
                <div className="absolute -top-4 left-6">
                  <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    {offer.badge}
                  </span>
                </div>

                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-red-600">
                    {offer.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-gray-600">{offer.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {offer.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center border-t border-gray-200 pt-6">
                  <div className="text-2xl font-bold text-red-600 mb-4">
                    {offer.price}
                  </div>
                  <Link
                    to="/vehicules"
                    className="btn-primary w-full text-center"
                  >
                    Découvrir l'offre
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus de location */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comment ça <span className="gradient-text">marche</span> ?
            </h2>
            <p className="text-xl text-gray-600">
              Un processus simple en 4 étapes
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300 -z-10">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2">
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                )}

                <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold relative z-10">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                <div className="mt-4 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mx-auto text-red-600">
                  {step.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ils nous font <span className="gradient-text">confiance</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Contact */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-red-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Des questions sur nos services ?
          </h2>
          <p className="text-red-100 text-xl mb-8 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour vous conseiller et vous
            accompagner dans votre projet de location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-secondary bg-white text-red-600 hover:bg-gray-100"
            >
              Nous contacter
            </Link>
            <a
              href="tel:0612345678"
              className="btn-secondary border-white text-white hover:bg-white hover:text-red-600"
            >
              <Phone className="w-5 h-5 mr-2" />
              06 12 34 56 78
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

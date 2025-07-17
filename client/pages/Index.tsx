import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Car,
  MapPin,
  Clock,
  Shield,
  Star,
  ChevronLeft,
  ChevronRight,
  Filter,
  Fuel,
  Zap,
  Users,
  Phone,
  Mail,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Heart,
  Award,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const heroSlides = [
    {
      image: "/api/placeholder/1200/600",
      title: "Clio 5 RS",
      subtitle: "Puissance et style urbain",
      color: "from-blue-500 to-cyan-500",
    },
    {
      image: "/api/placeholder/1200/600",
      title: "Polo GTI R-Line",
      subtitle: "Performance et élégance",
      color: "from-purple-500 to-pink-500",
    },
    {
      image: "/api/placeholder/1200/600",
      title: "DS5",
      subtitle: "Confort et prestige",
      color: "from-amber-500 to-orange-500",
    },
  ];

  const vehicles = [
    {
      id: 1,
      name: "Renault Clio 5 RS",
      image: "/api/placeholder/400/250",
      specs: {
        power: "200 ch",
        consumption: "6.5L/100km",
        transmission: "Manuelle",
      },
      price: "45€",
      period: "/jour",
      category: "sport",
      rating: 4.9,
      reviews: 127,
      badge: "Populaire",
    },
    {
      id: 2,
      name: "Renault Clio 5",
      image: "/api/placeholder/400/250",
      specs: {
        power: "130 ch",
        consumption: "5.2L/100km",
        transmission: "Automatique",
      },
      price: "35€",
      period: "/jour",
      category: "citadine",
      rating: 4.8,
      reviews: 89,
      badge: "Eco",
    },
    {
      id: 3,
      name: "Volkswagen Polo GTI R-Line",
      image: "/api/placeholder/400/250",
      specs: {
        power: "150 ch",
        consumption: "5.8L/100km",
        transmission: "Manuelle",
      },
      price: "40€",
      period: "/jour",
      category: "sport",
      rating: 4.9,
      reviews: 156,
      badge: "Sport",
    },
    {
      id: 4,
      name: "Citroën DS5",
      image: "/api/placeholder/400/250",
      specs: {
        power: "165 ch",
        consumption: "6.0L/100km",
        transmission: "Automatique",
      },
      price: "50€",
      period: "/jour",
      category: "premium",
      rating: 5.0,
      reviews: 78,
      badge: "Premium",
    },
  ];

  const services = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Livraison Express",
      description: "Livraison gratuite dans l'Oise en moins de 2h",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24h/24 - 7j/7",
      description: "Service client disponible à tout moment",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Assurance Premium",
      description: "Véhicules assurés tous risques inclus",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Flotte 2023",
      description: "Véhicules neufs avec moins de 10,000km",
      color: "from-amber-500 to-orange-500",
    },
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      rating: 5,
      text: "Service exceptionnel ! La réservation en ligne est ultra simple et la voiture était impeccable. Je recommande vivement Loc'D 60 !",
      avatar: "/api/placeholder/60/60",
      location: "Compiègne",
      verified: true,
    },
    {
      name: "Thomas Martin",
      rating: 5,
      text: "J'ai loué une Clio RS pour le week-end, quelle expérience ! Livraison ponctuelle et véhicule en parfait état.",
      avatar: "/api/placeholder/60/60",
      location: "Beauvais",
      verified: true,
    },
    {
      name: "Sophie Lemaire",
      rating: 5,
      text: "Équipe très professionnelle, prix transparents et véhicules toujours propres. Mon choix de référence dans l'Oise !",
      avatar: "/api/placeholder/60/60",
      location: "Creil",
      verified: true,
    },
  ];

  const faqItems = [
    {
      question: "À partir de quel âge puis-je louer ?",
      answer:
        "Vous devez avoir au minimum 21 ans et posséder votre permis de conduire depuis au moins 2 ans.",
    },
    {
      question: "Quelle caution est demandée ?",
      answer:
        "La caution varie de 500€ à 1000€ selon le véhicule choisi. Elle est simplement bloquée sur votre carte bancaire.",
    },
    {
      question: "L'assurance est-elle incluse dans le prix ?",
      answer:
        "Oui, absolument ! Tous nos véhicules sont assurés tous risques avec une franchise réduite de 300€ maximum.",
    },
    {
      question: "Que se passe-t-il en cas de retard ?",
      answer:
        "Contactez-nous immédiatement au 06 12 34 56 78. Une tolérance de 2h est accordée, au-delà des frais s'appliquent.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  const filteredVehicles = vehicles.filter(
    (vehicle) =>
      selectedFilter === "all" || vehicle.category === selectedFilter,
  );

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Populaire":
        return "bg-gradient-to-r from-blue-500 to-cyan-500";
      case "Sport":
        return "bg-gradient-to-r from-purple-500 to-pink-500";
      case "Premium":
        return "bg-gradient-to-r from-amber-500 to-orange-500";
      case "Eco":
        return "bg-gradient-to-r from-emerald-500 to-teal-500";
      default:
        return "bg-gradient-to-r from-gray-500 to-gray-600";
    }
  };

  return (
    <main className="pt-16">
      {/* Hero Section Moderne */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
        {/* Background avec overlay moderne */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/80 to-transparent z-10" />

        {/* Effet de particules/mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-40 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 mb-8 border border-white/20">
            <Sparkles className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-white font-medium">
              N°1 de la location dans l'Oise
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-8 leading-tight">
            La voiture qu'il vous faut,{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              quand il vous la faut
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre flotte de véhicules premium dans l'Oise. Réservation
            en 2 minutes, livraison gratuite, prix transparents.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() =>
                document
                  .getElementById("vehicles")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-primary text-lg inline-flex items-center group"
            >
              <Car className="mr-3 w-6 h-6" />
              Découvrir nos véhicules
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="btn-secondary text-lg inline-flex items-center group">
              <Phone className="mr-3 w-6 h-6" />
              06 12 34 56 78
            </button>
          </div>

          {/* Stats en bas */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-slate-300">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">15</div>
              <div className="text-slate-300">Véhicules premium</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">4.9/5</div>
              <div className="text-slate-300">Note moyenne</div>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 glass-effect rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 glass-effect rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {heroSlides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? `w-8 ${slide.color.replace("from-", "bg-").split(" ")[0]}`
                  : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Section Véhicules */}
      <section id="vehicles" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full px-6 py-2 mb-6">
              <Car className="w-5 h-5 text-white mr-2" />
              <span className="text-white font-semibold">Notre Flotte</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-display font-bold text-slate-800 mb-6">
              Véhicules <span className="gradient-text">Premium</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Une sélection rigoureuse de véhicules récents, entretenus par des
              professionnels et équipés des dernières technologies
            </p>
          </div>

          {/* Filtres modernes */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              {
                key: "all",
                label: "Tous les véhicules",
                icon: <Filter className="w-5 h-5" />,
                count: vehicles.length,
              },
              {
                key: "citadine",
                label: "Citadines",
                icon: <Car className="w-5 h-5" />,
                count: 1,
              },
              {
                key: "sport",
                label: "Sport",
                icon: <Zap className="w-5 h-5" />,
                count: 2,
              },
              {
                key: "premium",
                label: "Premium",
                icon: <Star className="w-5 h-5" />,
                count: 1,
              },
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setSelectedFilter(filter.key)}
                className={`flex items-center space-x-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedFilter === filter.key
                    ? "bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 shadow-sm"
                }`}
              >
                {filter.icon}
                <span>{filter.label}</span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-bold ${
                    selectedFilter === filter.key
                      ? "bg-white/20"
                      : "bg-slate-100"
                  }`}
                >
                  {filter.count}
                </span>
              </button>
            ))}
          </div>

          {/* Grille de véhicules */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredVehicles.map((vehicle, index) => (
              <div
                key={vehicle.id}
                className="card-vehicle group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Badge */}
                <div
                  className={`absolute top-4 left-4 z-10 ${getBadgeColor(vehicle.badge)} text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg`}
                >
                  {vehicle.badge}
                </div>

                {/* Favori */}
                <button className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-600 hover:text-red-500 transition-colors shadow-lg">
                  <Heart className="w-5 h-5" />
                </button>

                <div className="relative overflow-hidden rounded-t-3xl">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-800">
                      {vehicle.name}
                    </h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-semibold text-slate-600">
                        {vehicle.rating}
                      </span>
                      <span className="ml-1 text-xs text-slate-500">
                        ({vehicle.reviews})
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center text-sm text-slate-600">
                      <Zap className="w-4 h-4 mr-2 text-blue-500" />
                      {vehicle.specs.power}
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <Fuel className="w-4 h-4 mr-2 text-green-500" />
                      {vehicle.specs.consumption}
                    </div>
                    <div className="flex items-center text-sm text-slate-600 col-span-2">
                      <Users className="w-4 h-4 mr-2 text-purple-500" />
                      {vehicle.specs.transmission}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-3xl font-bold text-slate-800">
                        {vehicle.price}
                      </span>
                      <span className="text-slate-500">{vehicle.period}</span>
                    </div>
                    <Link
                      to={`/vehicule/${vehicle.id}`}
                      className="bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-sky-600 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg"
                    >
                      Réserver
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full px-6 py-2 mb-6">
              <Shield className="w-5 h-5 text-white mr-2" />
              <span className="text-white font-semibold">Nos Avantages</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-display font-bold text-slate-800 mb-6">
              Pourquoi choisir <span className="gradient-text">Loc'D 60</span> ?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Une expérience de location révolutionnaire avec un service client
              d'exception
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 rounded-full px-6 py-2 mb-6">
              <Star className="w-5 h-5 text-white mr-2" />
              <span className="text-white font-semibold">Témoignages</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-display font-bold text-slate-800 mb-6">
              Avis <span className="gradient-text">clients</span>
            </h2>
            <p className="text-xl text-slate-600">
              Des milliers de clients nous font confiance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-slate-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full mr-4 border-2 border-blue-100"
                  />
                  <div>
                    <div className="flex items-center">
                      <p className="font-bold text-slate-800">
                        {testimonial.name}
                      </p>
                      {testimonial.verified && (
                        <CheckCircle className="w-4 h-4 text-blue-500 ml-2" />
                      )}
                    </div>
                    <p className="text-sm text-slate-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-slate-800 mb-6">
              Questions <span className="gradient-text">fréquentes</span>
            </h2>
            <p className="text-xl text-slate-600">
              Toutes les réponses à vos questions
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all duration-300 overflow-hidden"
              >
                <summary className="p-8 cursor-pointer text-slate-800 font-semibold text-lg hover:text-blue-600 transition-colors">
                  {item.question}
                </summary>
                <div className="px-8 pb-8 text-slate-600 leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Contactez-
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                nous
              </span>
            </h2>
            <p className="text-xl text-slate-300">
              Notre équipe est là pour vous accompagner
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h3 className="text-3xl font-bold mb-8">
                Informations de contact
              </h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">06 12 34 56 78</p>
                    <p className="text-slate-300">
                      Lundi au Samedi • 8h00 - 20h00
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">contact@locd60.fr</p>
                    <p className="text-slate-300">Réponse garantie sous 2h</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Zone de livraison</p>
                    <p className="text-slate-300">
                      Tout le département de l'Oise (60)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-3xl">
              <h3 className="text-3xl font-bold mb-8">
                Envoyez-nous un message
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Prénom"
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-300 focus:border-cyan-400 focus:outline-none backdrop-blur-sm"
                  />
                  <input
                    type="text"
                    placeholder="Nom"
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-300 focus:border-cyan-400 focus:outline-none backdrop-blur-sm"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-300 focus:border-cyan-400 focus:outline-none backdrop-blur-sm"
                />
                <textarea
                  placeholder="Votre message..."
                  rows={5}
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-300 focus:border-cyan-400 focus:outline-none backdrop-blur-sm resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-4 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Boutons flottants */}
      <a
        href="https://wa.me/33612345678"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all z-50"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* CTA Mobile Sticky */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-sky-500 to-cyan-500 p-4 z-40 md:hidden">
        <Link
          to="/reservation"
          className="block w-full text-center bg-white text-sky-600 font-bold py-4 rounded-xl shadow-lg"
        >
          Réserver maintenant
        </Link>
      </div>
    </main>
  );
}

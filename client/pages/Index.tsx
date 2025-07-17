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
} from "lucide-react";

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const heroSlides = [
    {
      image: "/api/placeholder/1200/600",
      title: "Clio 5 RS",
      subtitle: "Puissance et style urbain",
    },
    {
      image: "/api/placeholder/1200/600",
      title: "Polo GTI R-Line",
      subtitle: "Performance et élégance",
    },
    {
      image: "/api/placeholder/1200/600",
      title: "DS5",
      subtitle: "Confort et prestige",
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
      price: "45€/jour",
      category: "sport",
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
      price: "35€/jour",
      category: "citadine",
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
      price: "40€/jour",
      category: "sport",
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
      price: "50€/jour",
      category: "premium",
    },
  ];

  const services = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Livraison",
      description: "Livraison gratuite dans l'Oise",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24h/24",
      description: "Service client disponible",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Assurance",
      description: "Véhicules assurés tous risques",
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Flotte récente",
      description: "Véhicules de moins de 2 ans",
    },
  ];

  const testimonials = [
    {
      name: "Marie L.",
      rating: 5,
      text: "Service excellent, voiture impeccable. Je recommande vivement !",
      avatar: "/api/placeholder/60/60",
    },
    {
      name: "Thomas B.",
      rating: 5,
      text: "Réservation simple et rapide. La Clio RS était parfaite pour mon week-end.",
      avatar: "/api/placeholder/60/60",
    },
    {
      name: "Sophie M.",
      rating: 5,
      text: "Équipe très professionnelle, prix abordables. Mon choix de référence !",
      avatar: "/api/placeholder/60/60",
    },
  ];

  const faqItems = [
    {
      question: "Quel âge minimum pour louer ?",
      answer:
        "Vous devez avoir au minimum 21 ans et posséder votre permis depuis au moins 2 ans.",
    },
    {
      question: "Quelle caution est demandée ?",
      answer:
        "Une caution de 500€ à 1000€ selon le véhicule, bloquée sur votre carte bancaire.",
    },
    {
      question: "L'assurance est-elle incluse ?",
      answer:
        "Oui, tous nos véhicules sont assurés tous risques avec franchise réduite.",
    },
    {
      question: "Que faire en cas de retard ?",
      answer:
        "Contactez-nous immédiatement. Des frais peuvent s'appliquer au-delà de 2h de retard.",
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

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-locd-black/80 via-locd-black/50 to-transparent z-10" />

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

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white mb-6">
            La voiture qu'il vous faut,{" "}
            <span className="text-locd-red">quand il vous la faut</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Location de citadines stylées dans l'Oise. Réservation simple, prix
            transparents.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("vehicles")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary text-lg inline-flex items-center group hover:scale-105 transition-transform"
          >
            Voir les véhicules
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-locd-red transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-locd-red transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-locd-red" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Vehicles Section */}
      <section id="vehicles" className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
              Notre <span className="text-locd-red">flotte</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Des véhicules récents, entretenus et prêts pour vos déplacements
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              {
                key: "all",
                label: "Tous",
                icon: <Filter className="w-4 h-4" />,
              },
              {
                key: "citadine",
                label: "Citadines",
                icon: <Car className="w-4 h-4" />,
              },
              {
                key: "sport",
                label: "Sport",
                icon: <Zap className="w-4 h-4" />,
              },
              {
                key: "premium",
                label: "Premium",
                icon: <Star className="w-4 h-4" />,
              },
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setSelectedFilter(filter.key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 ${
                  selectedFilter === filter.key
                    ? "bg-locd-red text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {filter.icon}
                <span>{filter.label}</span>
              </button>
            ))}
          </div>

          {/* Vehicle Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVehicles.map((vehicle, index) => (
              <div
                key={vehicle.id}
                className="card-vehicle group cursor-pointer hover:scale-102 transition-transform"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-locd-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {vehicle.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {vehicle.name}
                  </h3>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span className="flex items-center">
                        <Zap className="w-4 h-4 mr-2" />
                        {vehicle.specs.power}
                      </span>
                      <span className="flex items-center">
                        <Fuel className="w-4 h-4 mr-2" />
                        {vehicle.specs.consumption}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Users className="w-4 h-4 mr-2" />
                      {vehicle.specs.transmission}
                    </div>
                  </div>
                  <Link
                    to={`/vehicule/${vehicle.id}`}
                    className="btn-primary w-full text-center group"
                  >
                    Réserver
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-locd-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
              Pourquoi <span className="text-locd-red">Loc'D 60</span> ?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Une expérience de location simple, fiable et transparente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-locd-red transition-all duration-300 hover:shadow-lg hover:shadow-locd-red/20 hover:scale-105"
              >
                <div className="w-16 h-16 bg-locd-red/20 rounded-full flex items-center justify-center mx-auto mb-4 text-locd-red">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
              Avis <span className="text-locd-red">clients</span>
            </h2>
            <p className="text-xl text-gray-400">Ce que pensent nos clients</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:scale-102 transition-transform"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-400">Client vérifié</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-locd-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
              Questions <span className="text-locd-red">fréquentes</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="bg-gray-900 rounded-xl border border-gray-800 hover:border-locd-red transition-colors"
              >
                <summary className="p-6 cursor-pointer text-white font-semibold hover:text-locd-red transition-colors">
                  {item.question}
                </summary>
                <div className="px-6 pb-6 text-gray-400">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
              Nous <span className="text-locd-red">contacter</span>
            </h2>
            <p className="text-xl text-gray-400">
              Une question ? Nous sommes là pour vous aider
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Informations de contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-locd-red mr-4" />
                  <div>
                    <p className="text-white font-semibold">06 12 34 56 78</p>
                    <p className="text-gray-400 text-sm">Lun-Sam 8h-20h</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-locd-red mr-4" />
                  <div>
                    <p className="text-white font-semibold">
                      contact@locd60.fr
                    </p>
                    <p className="text-gray-400 text-sm">Réponse sous 2h</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-locd-red mr-4" />
                  <div>
                    <p className="text-white font-semibold">
                      Zone de livraison
                    </p>
                    <p className="text-gray-400 text-sm">
                      Tout le département de l'Oise
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Envoyez-nous un message
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full p-4 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:border-locd-red focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full p-4 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:border-locd-red focus:outline-none"
                />
                <textarea
                  placeholder="Votre message"
                  rows={4}
                  className="w-full p-4 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:border-locd-red focus:outline-none resize-none"
                />
                <button
                  type="submit"
                  className="btn-primary w-full hover:scale-102 transition-transform"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/33612345678"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 hover:scale-110 transition-all z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Sticky CTA Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-locd-red p-4 z-40 md:hidden">
        <Link
          to="/reservation"
          className="block w-full text-center bg-white text-locd-red font-bold py-3 rounded-lg"
        >
          Réserver maintenant
        </Link>
      </div>
    </main>
  );
}

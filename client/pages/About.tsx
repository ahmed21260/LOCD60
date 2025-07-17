import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Target,
  Award,
  Heart,
  Car,
  MapPin,
  Phone,
  Mail,
  Calendar,
  TrendingUp,
  Shield,
  Clock,
  Star,
  CheckCircle,
  ChevronRight,
} from "lucide-react";

export default function About() {
  const [selectedYear, setSelectedYear] = useState(2023);

  const teamMembers = [
    {
      name: "Alexandre Dubois",
      role: "Fondateur & Directeur",
      image: "/api/placeholder/300/300",
      bio: "Passionné d'automobile depuis toujours, Alexandre a créé Loc'D 60 pour démocratiser l'accès à des véhicules de qualité dans l'Oise.",
      experience: "15 ans dans l'automobile",
      speciality: "Stratégie & Développement",
      linkedin: "#",
    },
    {
      name: "Marie Leclerc",
      role: "Responsable Commerciale",
      image: "/api/placeholder/300/300",
      bio: "Marie gère toute la partie commerciale et relation client. Son objectif : vous offrir la meilleure expérience possible.",
      experience: "8 ans en relation client",
      speciality: "Service Client & Ventes",
      linkedin: "#",
    },
    {
      name: "Thomas Martin",
      role: "Chef d'Atelier",
      image: "/api/placeholder/300/300",
      bio: "Thomas s'assure que chaque véhicule soit en parfait état. Mécanicien passionné, il veille à votre sécurité.",
      experience: "12 ans en mécanique",
      speciality: "Maintenance & Technique",
      linkedin: "#",
    },
    {
      name: "Sophie Bernard",
      role: "Responsable Logistique",
      image: "/api/placeholder/300/300",
      bio: "Sophie coordonne toutes les livraisons et retours. Elle optimise nos circuits pour vous servir toujours plus vite.",
      experience: "6 ans en logistique",
      speciality: "Livraisons & Planning",
      linkedin: "#",
    },
  ];

  const timeline = [
    {
      year: 2019,
      title: "Création de Loc'D 60",
      description: "Lancement de l'entreprise avec 3 véhicules dans l'Oise",
      milestone: "3 véhicules",
    },
    {
      year: 2020,
      title: "Expansion de la flotte",
      description:
        "Acquisition de 8 nouveaux véhicules et service de livraison",
      milestone: "11 véhicules",
    },
    {
      year: 2021,
      title: "Digitalisation",
      description: "Lancement de la plateforme en ligne et app mobile",
      milestone: "Plateforme digitale",
    },
    {
      year: 2022,
      title: "Partenariats professionnels",
      description: "Développement des forfaits entreprises et étudiants",
      milestone: "500+ clients",
    },
    {
      year: 2023,
      title: "Leadership régional",
      description: "N°1 de la location dans l'Oise avec 15 véhicules premium",
      milestone: "15 véhicules premium",
    },
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Proximité",
      description:
        "Nous privilégions le contact humain et l'accompagnement personnalisé de chaque client.",
      color: "text-red-600 bg-red-100",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Fiabilité",
      description:
        "Nos véhicules sont régulièrement entretenus et contrôlés pour votre sécurité.",
      color: "text-blue-600 bg-blue-100",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description:
        "Nous visons constamment l'amélioration de nos services et la satisfaction client.",
      color: "text-green-600 bg-green-100",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Réactivité",
      description:
        "Assistance 24h/24 et livraison rapide pour répondre à tous vos besoins.",
      color: "text-purple-600 bg-purple-100",
    },
  ];

  const stats = [
    { number: "2000+", label: "Clients satisfaits", icon: <Users /> },
    { number: "15", label: "Véhicules premium", icon: <Car /> },
    { number: "4.9/5", label: "Note moyenne", icon: <Star /> },
    { number: "24h/24", label: "Assistance", icon: <Clock /> },
  ];

  const certifications = [
    {
      name: "Assurance Qualité",
      description: "Certifié par nos partenaires assureurs",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      name: "Maintenance Professionnelle",
      description: "Entretien selon standards constructeurs",
      icon: <Award className="w-6 h-6" />,
    },
    {
      name: "Service Client",
      description: "Label Excellence Service",
      icon: <CheckCircle className="w-6 h-6" />,
    },
  ];

  return (
    <main className="pt-16 bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              À propos de <span className="gradient-text">Loc'D 60</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Depuis 2019, nous révolutionnons la location de véhicules dans
              l'Oise avec un service de proximité et des véhicules premium.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mx-auto mb-2 text-red-600">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notre <span className="gradient-text">histoire</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De l'idée initiale à aujourd'hui, découvrez comment Loc'D 60 est
              devenue la référence de la location de véhicules dans l'Oise.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Timeline navigation */}
            <div className="flex justify-center mb-12">
              <div className="flex space-x-2 bg-white rounded-2xl p-2 shadow-lg">
                {timeline.map((item) => (
                  <button
                    key={item.year}
                    onClick={() => setSelectedYear(item.year)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                      selectedYear === item.year
                        ? "bg-red-500 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {item.year}
                  </button>
                ))}
              </div>
            </div>

            {/* Timeline content */}
            {timeline
              .filter((item) => item.year === selectedYear)
              .map((item) => (
                <div
                  key={item.year}
                  className="bg-white rounded-3xl p-8 shadow-lg max-w-4xl mx-auto"
                >
                  <div className="text-center">
                    <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.year}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-xl text-gray-600 mb-6">
                      {item.description}
                    </p>
                    <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-xl font-semibold">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      {item.milestone}
                    </div>
                  </div>
                </div>
              ))}

            {/* Timeline visual */}
            <div className="mt-16 relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 -translate-x-1/2"></div>
              <div className="grid gap-8">
                {timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className={`flex items-center ${
                      index % 2 === 0 ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div
                      className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}
                    >
                      <div className="bg-white rounded-xl p-6 shadow-md relative">
                        <div
                          className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full ${
                            index % 2 === 0 ? "-right-2" : "-left-2"
                          }`}
                        ></div>
                        <div className="text-lg font-bold text-red-600 mb-1">
                          {item.year}
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos <span className="gradient-text">valeurs</span>
            </h2>
            <p className="text-xl text-gray-600">
              Les principes qui guident notre action au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div
                  className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* L'équipe */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notre <span className="gradient-text">équipe</span>
            </h2>
            <p className="text-xl text-gray-600">
              Des professionnels passionnés à votre service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <div className="text-red-600 font-semibold mb-3">
                    {member.role}
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-500">
                      <Award className="w-4 h-4 mr-2" />
                      {member.experience}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Target className="w-4 h-4 mr-2" />
                      {member.speciality}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos <span className="gradient-text">certifications</span>
            </h2>
            <p className="text-xl text-gray-600">
              Des labels qui garantissent la qualité de nos services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="text-center p-8 border-2 border-gray-200 rounded-2xl hover:border-red-300 transition-colors"
              >
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-red-600">
                  {cert.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {cert.name}
                </h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-red-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Notre mission</h2>
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              "Démocratiser l'acc��s à des véhicules de qualité dans l'Oise en
              proposant un service de proximité, transparent et innovant. Nous
              voulons que chaque habitant puisse accéder facilement à la
              mobilité dont il a besoin, que ce soit pour les loisirs, le
              travail ou les urgences."
            </p>
            <div className="text-lg text-red-100 italic">
              - Alexandre Dubois, Fondateur de Loc'D 60
            </div>
          </div>
        </div>
      </section>

      {/* Engagement local */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Engagement <span className="gradient-text">local</span>
            </h2>
            <p className="text-xl text-gray-600">
              Fiers de contribuer au développement de notre région
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Ancrage territorial
              </h3>
              <p className="text-gray-600">
                100% de nos véhicules sont basés dans l'Oise. Nous participons
                activement à l'économie locale en privilégiant les fournisseurs
                régionaux.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Emploi local
              </h3>
              <p className="text-gray-600">
                Notre équipe de 8 personnes est entièrement recrutée localement.
                Nous offrons des emplois stables et épanouissants dans la
                région.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Actions solidaires
              </h3>
              <p className="text-gray-600">
                Partenariat avec les associations locales, tarifs préférentiels
                pour les étudiants et soutien aux événements communautaires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Rejoindre */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Rejoignez la famille Loc'D 60
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Que vous soyez un client potentiel ou que vous souhaitiez rejoindre
            notre équipe, nous serions ravis de faire votre connaissance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/vehicules" className="btn-primary">
              Découvrir nos véhicules
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

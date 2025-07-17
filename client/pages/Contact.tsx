import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
  Car,
  Calendar,
  CreditCard,
  User,
  ChevronRight,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    type: "general", // general, reservation, support, partnership
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedContactMethod, setSelectedContactMethod] = useState("form");

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      primary: "06 12 34 56 78",
      secondary: "Lundi au Samedi • 8h00 - 20h00",
      action: "tel:0612345678",
      color: "text-blue-600 bg-blue-100",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      primary: "contact@locd60.fr",
      secondary: "Réponse garantie sous 2h",
      action: "mailto:contact@locd60.fr",
      color: "text-green-600 bg-green-100",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      primary: "06 12 34 56 78",
      secondary: "Chat disponible 24h/24",
      action: "https://wa.me/33612345678",
      color: "text-emerald-600 bg-emerald-100",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adresse",
      primary: "Zone de livraison",
      secondary: "Tout le département de l'Oise (60)",
      action: null,
      color: "text-purple-600 bg-purple-100",
    },
  ];

  const contactReasons = [
    {
      id: "general",
      title: "Question générale",
      description: "Informations sur nos services",
      icon: <MessageCircle className="w-5 h-5" />,
    },
    {
      id: "reservation",
      title: "Réservation",
      description: "Aide pour votre réservation",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      id: "support",
      title: "Support technique",
      description: "Problème avec votre location",
      icon: <AlertCircle className="w-5 h-5" />,
    },
    {
      id: "partnership",
      title: "Partenariat",
      description: "Collaboration professionnelle",
      icon: <User className="w-5 h-5" />,
    },
  ];

  const quickActions = [
    {
      title: "Réserver un véhicule",
      description: "Accédez directement à notre catalogue",
      icon: <Car className="w-6 h-6" />,
      action: "/vehicules",
      color: "bg-red-500 hover:bg-red-600",
    },
    {
      title: "Calculer un tarif",
      description: "Obtenez un devis personnalisé",
      icon: <CreditCard className="w-6 h-6" />,
      action: "/tarifs",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      title: "Nos services",
      description: "Découvrez toutes nos prestations",
      icon: <CheckCircle className="w-6 h-6" />,
      action: "/services",
      color: "bg-green-500 hover:bg-green-600",
    },
  ];

  const faqItems = [
    {
      question: "Comment puis-je modifier ma réservation ?",
      answer:
        "Contactez-nous par téléphone au 06 12 34 56 78 ou par email. Les modifications sont gratuites jusqu'à 24h avant le début de la location.",
    },
    {
      question: "Que faire en cas de panne ?",
      answer:
        "Appelez immédiatement notre assistance 24h/24 au 06 12 34 56 78. Nous organiserons un dépannage ou un véhicule de remplacement.",
    },
    {
      question: "Puis-je prolonger ma location ?",
      answer:
        "Oui, sous réserve de disponibilité. Contactez-nous avant la fin de votre location pour organiser la prolongation.",
    },
    {
      question: "Comment récupérer ma caution ?",
      answer:
        "La caution est automatiquement restituée dans les 7 jours suivant le retour du véhicule, si aucun dommage n'est constaté.",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation de l'envoi
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        type: "general",
      });
    }, 3000);
  };

  return (
    <main className="pt-16 bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Contactez <span className="gradient-text">Loc'D 60</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Notre équipe est à votre disposition pour répondre à toutes vos
              questions et vous accompagner dans votre projet de location.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 mr-2" />
                Réponse sous 2h
              </div>
              <div className="flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                <Phone className="w-4 h-4 mr-2" />
                Support 7j/7
              </div>
              <div className="flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat en direct
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informations de contact */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div
                  className={`w-12 h-12 ${info.color} rounded-lg flex items-center justify-center mx-auto mb-4`}
                >
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.action ? (
                    <a
                      href={info.action}
                      className="text-red-600 font-semibold hover:underline block"
                    >
                      {info.primary}
                    </a>
                  ) : (
                    <div className="text-gray-900 font-semibold">
                      {info.primary}
                    </div>
                  )}
                  <div className="text-sm text-gray-600">{info.secondary}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Actions rapides */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Actions <span className="gradient-text">rapides</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {quickActions.map((action, index) => (
                <a
                  key={index}
                  href={action.action}
                  className={`${action.color} text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center group`}
                >
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {action.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{action.title}</h3>
                  <p className="text-sm opacity-90 mb-4">
                    {action.description}
                  </p>
                  <div className="flex items-center justify-center">
                    <span className="mr-2">Accéder</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Formulaire de contact */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Envoyez-nous un message
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Message envoyé !
                    </h3>
                    <p className="text-gray-600">
                      Nous vous répondrons dans les plus brefs délais.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Type de demande */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-4">
                        Type de demande
                      </label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {contactReasons.map((reason) => (
                          <button
                            key={reason.id}
                            type="button"
                            onClick={() =>
                              setFormData({ ...formData, type: reason.id })
                            }
                            className={`flex items-center space-x-3 p-4 border-2 rounded-xl transition-all ${
                              formData.type === reason.id
                                ? "border-red-500 bg-red-50 text-red-600"
                                : "border-gray-200 hover:border-red-300 text-gray-700"
                            }`}
                          >
                            {reason.icon}
                            <div className="text-left">
                              <div className="font-semibold">
                                {reason.title}
                              </div>
                              <div className="text-sm opacity-75">
                                {reason.description}
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Informations personnelles */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Prénom *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full p-4 border border-gray-300 rounded-xl focus:border-red-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Nom *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full p-4 border border-gray-300 rounded-xl focus:border-red-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full p-4 border border-gray-300 rounded-xl focus:border-red-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full p-4 border border-gray-300 rounded-xl focus:border-red-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Sujet *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="Résumez votre demande en quelques mots"
                        className="w-full p-4 border border-gray-300 rounded-xl focus:border-red-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        placeholder="Décrivez votre demande en détail..."
                        className="w-full p-4 border border-gray-300 rounded-xl focus:border-red-500 focus:outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Envoyer le message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar FAQ */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Questions fréquentes
                </h3>
                <div className="space-y-6">
                  {faqItems.map((item, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {item.question}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-4">
                      Vous ne trouvez pas votre réponse ?
                    </p>
                    <a
                      href="tel:0612345678"
                      className="btn-secondary w-full text-center"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Appelez-nous
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horaires et disponibilité */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos <span className="gradient-text">horaires</span>
            </h2>
            <p className="text-xl text-gray-600">
              Nous sommes là pour vous, quand vous en avez besoin
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Horaires bureau */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Horaires bureau
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lundi - Vendredi</span>
                    <span className="font-semibold">8h00 - 20h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Samedi</span>
                    <span className="font-semibold">9h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dimanche</span>
                    <span className="text-red-600 font-semibold">Fermé</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Note :</strong> Les livraisons et retours peuvent
                    être organisés en dehors de ces horaires sur rendez-vous.
                  </p>
                </div>
              </div>

              {/* Assistance */}
              <div className="bg-red-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Assistance d'urgence
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">24h/24 - 7j/7</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Dépannage rapide</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      Véhicule de remplacement
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Support multilingue</span>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="tel:0612345678"
                    className="btn-primary w-full text-center"
                  >
                    06 12 34 56 78
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zone de livraison */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Zone de <span className="gradient-text">livraison</span>
            </h2>
            <p className="text-xl text-gray-600">
              Nous livrons gratuitement dans tout l'Oise
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <MapPin className="w-8 h-8 text-red-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Département de l'Oise (60)
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      Livraison gratuite dans l'Oise
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      Délai de livraison : 1-2h
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      Créneaux flexibles 7j/7
                    </span>
                  </div>
                  <div className="flex items-center">
                    <AlertCircle className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-gray-700">
                      Départements limitrophes : +25€
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
                <div className="text-lg text-gray-900 mb-4">
                  Couverture de l'Oise
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>Compiègne • Beauvais • Creil</div>
                  <div>Senlis • Chantilly • Clermont</div>
                  <div>Noyon • Pont-Sainte-Maxence</div>
                  <div className="text-red-600 font-semibold">
                    Et toutes les communes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Car,
  User,
  CreditCard,
  Check,
  Clock,
  MapPin,
  Phone,
  Mail,
  Shield,
  AlertCircle,
  Plus,
  Minus,
  X,
} from "lucide-react";
import { getVehicleById } from "../data/vehicles";

interface ReservationData {
  vehicleId: number;
  vehicleName: string;
  startDate: string;
  endDate: string;
  days: number;
  totalPrice: number;
  deposit: number;
}

interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
  licenseNumber: string;
  licenseDate: string;
  address: string;
  city: string;
  postalCode: string;
  additionalDriver: boolean;
  additionalDriverInfo?: {
    firstName: string;
    lastName: string;
    licenseNumber: string;
    licenseDate: string;
  };
}

interface Options {
  gps: boolean;
  childSeat: boolean;
  additionalInsurance: boolean;
  fuelPackage: boolean;
}

export default function Reservation() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [reservationData, setReservationData] =
    useState<ReservationData | null>(null);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    licenseNumber: "",
    licenseDate: "",
    address: "",
    city: "",
    postalCode: "",
    additionalDriver: false,
  });
  const [options, setOptions] = useState<Options>({
    gps: false,
    childSeat: false,
    additionalInsurance: false,
    fuelPackage: false,
  });
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal">("card");
  const [cardInfo, setCardInfo] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: "",
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem("reservationData");
    if (savedData) {
      setReservationData(JSON.parse(savedData));
    } else {
      navigate("/vehicules");
    }
  }, [navigate]);

  const vehicle = reservationData
    ? getVehicleById(reservationData.vehicleId)
    : null;

  const optionsPricing = {
    gps: 5,
    childSeat: 3,
    additionalInsurance: 15,
    fuelPackage: 25,
  };

  const calculateOptionsTotal = () => {
    let total = 0;
    Object.entries(options).forEach(([key, value]) => {
      if (value) {
        total +=
          optionsPricing[key as keyof typeof optionsPricing] *
          (reservationData?.days || 1);
      }
    });
    return total;
  };

  const totalWithOptions =
    (reservationData?.totalPrice || 0) + calculateOptionsTotal();

  const steps = [
    { number: 1, title: "Dates & Options", icon: Calendar },
    { number: 2, title: "Informations", icon: User },
    { number: 3, title: "Paiement", icon: CreditCard },
  ];

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setProcessing(true);

    // Simulation du traitement de paiement
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Redirection vers une page de confirmation
    localStorage.removeItem("reservationData");
    navigate("/confirmation");
  };

  if (!reservationData || !vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Aucune réservation en cours
          </h2>
          <button
            onClick={() => navigate("/vehicules")}
            className="btn-primary"
          >
            Choisir un véhicule
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-16 bg-gray-50 min-h-screen">
      {/* Header avec étapes */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Finaliser votre réservation
          </h1>

          <div className="flex items-center justify-center space-x-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                      currentStep >= step.number
                        ? "bg-red-500 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {currentStep > step.number ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      <step.icon className="w-6 h-6" />
                    )}
                  </div>
                  <div className="ml-3 hidden md:block">
                    <div className="text-sm font-semibold text-gray-900">
                      Étape {step.number}
                    </div>
                    <div className="text-sm text-gray-600">{step.title}</div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <ChevronRight className="w-5 h-5 text-gray-400 mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contenu principal */}
          <div className="lg:col-span-2">
            {currentStep === 1 && (
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Dates et options
                </h2>

                {/* Résumé de la réservation */}
                <div className="border border-gray-200 rounded-2xl p-6 mb-8">
                  <div className="flex items-center space-x-4">
                    <img
                      src={vehicle.mainImage}
                      alt={vehicle.name}
                      className="w-20 h-16 object-cover rounded-xl"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {vehicle.name}
                      </h3>
                      <div className="flex items-center text-gray-600 mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {vehicle.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dates */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Date de début
                    </label>
                    <input
                      type="date"
                      value={reservationData.startDate}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:border-red-500 focus:outline-none"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Date de fin
                    </label>
                    <input
                      type="date"
                      value={reservationData.endDate}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:border-red-500 focus:outline-none"
                      readOnly
                    />
                  </div>
                </div>

                {/* Options */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Options supplémentaires
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        key: "gps" as keyof Options,
                        label: "GPS Navigation",
                        description:
                          "Système de navigation GPS avec cartes mises à jour",
                        price: optionsPricing.gps,
                      },
                      {
                        key: "childSeat" as keyof Options,
                        label: "Siège enfant",
                        description:
                          "Siège auto sécurisé pour enfants de 3 à 12 ans",
                        price: optionsPricing.childSeat,
                      },
                      {
                        key: "additionalInsurance" as keyof Options,
                        label: "Assurance supplémentaire",
                        description:
                          "Réduction de franchise à 0€ + bris de glace",
                        price: optionsPricing.additionalInsurance,
                      },
                      {
                        key: "fuelPackage" as keyof Options,
                        label: "Forfait carburant",
                        description:
                          "Véhicule rendu avec le même niveau de carburant",
                        price: optionsPricing.fuelPackage,
                      },
                    ].map((option) => (
                      <div
                        key={option.key}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-xl"
                      >
                        <div className="flex items-center space-x-4">
                          <input
                            type="checkbox"
                            checked={options[option.key]}
                            onChange={(e) =>
                              setOptions({
                                ...options,
                                [option.key]: e.target.checked,
                              })
                            }
                            className="w-5 h-5 text-red-600 rounded focus:ring-red-500"
                          />
                          <div>
                            <div className="font-semibold text-gray-900">
                              {option.label}
                            </div>
                            <div className="text-sm text-gray-600">
                              {option.description}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-gray-900">
                            +{option.price}€
                          </div>
                          <div className="text-sm text-gray-600">par jour</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Informations personnelles
                </h2>

                <form className="space-y-6">
                  {/* Informations principales */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        value={customerInfo.firstName}
                        onChange={(e) =>
                          setCustomerInfo({
                            ...customerInfo,
                            firstName: e.target.value,
                          })
                        }
                        className="w-full p-4 border border-gray-300 rounded-xl focus:border-red-500 focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        value={customerInfo.lastName}
                        onChange={(e) =>
                          setCustomerInfo({
                            ...customerInfo,
                            lastName: e.target.value,
                          })
                        }
                        className="w-full p-4 border border-gray-300 rounded-xl focus:border-red-500 focus:outline-none"
                        required
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
                        value={customerInfo.email}
                        onChange={(e) =>
                          setCustomerInfo({
                            ...customerInfo,
                            email: e.target.value,
                          })
                        }
                        className="w-full p-4 border border-gray-300 rounded-xl focus:border-red-500 focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        value={customerInfo.phone}
                        onChange={(e) =>
                          setCustomerInfo({
                            ...customerInfo,
                            phone: e.target.value,
                          })
                        }
                        className="w-full p-4 border border-gray-300 rounded-xl focus:border-red-500 focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Date de naissance *
                      </label>
                      <input
                        type="date"
                        value={customerInfo.birthDate}
                        onChange={(e) =>
                          setCustomerInfo({
                            ...customerInfo,
                            birthDate: e.target.value,
                          })
                        }
                        className="w-full p-4 border border-gray-300 rounded-xl focus:border-red-500 focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Numéro de permis *
                      </label>
                      <input
                        type="text"
                        value={customerInfo.licenseNumber}
                        onChange={(e) =>
                          setCustomerInfo({
                            ...customerInfo,
                            licenseNumber: e.target.value,
                          })
                        }
                        className="w-full p-4 border border-gray-300 rounded-xl focus:border-red-500 focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Date d'obtention du permis *
                      </label>
                      <input
                        type="date"
                        value={customerInfo.licenseDate}
                        onChange={(e) =>
                          setCustomerInfo({
                            ...customerInfo,
                            licenseDate: e.target.value,
                          })
                        }
                        className="w-full p-4 border border-gray-300 rounded-xl focus:border-red-500 focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  {/* Adresse */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Adresse *
                    </label>
                    <input
                      type="text"
                      value={customerInfo.address}
                      onChange={(e) =>
                        setCustomerInfo({
                          ...customerInfo,
                          address: e.target.value,
                        })
                      }
                      className="w-full p-4 border border-gray-300 rounded-xl focus:border-red-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Ville *
                      </label>
                      <input
                        type="text"
                        value={customerInfo.city}
                        onChange={(e) =>
                          setCustomerInfo({
                            ...customerInfo,
                            city: e.target.value,
                          })
                        }
                        className="w-full p-4 border border-gray-300 rounded-xl focus:border-red-500 focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Code postal *
                      </label>
                      <input
                        type="text"
                        value={customerInfo.postalCode}
                        onChange={(e) =>
                          setCustomerInfo({
                            ...customerInfo,
                            postalCode: e.target.value,
                          })
                        }
                        className="w-full p-4 border border-gray-300 rounded-xl focus:border-red-500 focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  {/* Conducteur supplémentaire */}
                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <input
                        type="checkbox"
                        checked={customerInfo.additionalDriver}
                        onChange={(e) =>
                          setCustomerInfo({
                            ...customerInfo,
                            additionalDriver: e.target.checked,
                          })
                        }
                        className="w-5 h-5 text-red-600 rounded focus:ring-red-500"
                      />
                      <label className="text-lg font-semibold text-gray-900">
                        Ajouter un conducteur supplémentaire (gratuit)
                      </label>
                    </div>

                    {customerInfo.additionalDriver && (
                      <div className="space-y-4 ml-8">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Prénom
                            </label>
                            <input
                              type="text"
                              value={
                                customerInfo.additionalDriverInfo?.firstName ||
                                ""
                              }
                              onChange={(e) =>
                                setCustomerInfo({
                                  ...customerInfo,
                                  additionalDriverInfo: {
                                    ...customerInfo.additionalDriverInfo,
                                    firstName: e.target.value,
                                    lastName:
                                      customerInfo.additionalDriverInfo
                                        ?.lastName || "",
                                    licenseNumber:
                                      customerInfo.additionalDriverInfo
                                        ?.licenseNumber || "",
                                    licenseDate:
                                      customerInfo.additionalDriverInfo
                                        ?.licenseDate || "",
                                  },
                                })
                              }
                              className="w-full p-3 border border-gray-300 rounded-xl focus:border-red-500 focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Nom
                            </label>
                            <input
                              type="text"
                              value={
                                customerInfo.additionalDriverInfo?.lastName ||
                                ""
                              }
                              onChange={(e) =>
                                setCustomerInfo({
                                  ...customerInfo,
                                  additionalDriverInfo: {
                                    ...customerInfo.additionalDriverInfo,
                                    firstName:
                                      customerInfo.additionalDriverInfo
                                        ?.firstName || "",
                                    lastName: e.target.value,
                                    licenseNumber:
                                      customerInfo.additionalDriverInfo
                                        ?.licenseNumber || "",
                                    licenseDate:
                                      customerInfo.additionalDriverInfo
                                        ?.licenseDate || "",
                                  },
                                })
                              }
                              className="w-full p-3 border border-gray-300 rounded-xl focus:border-red-500 focus:outline-none"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            )}

            {currentStep === 3 && (
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Paiement sécurisé
                </h2>

                {/* Méthodes de paiement */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Choisir une méthode de paiement
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <button
                      onClick={() => setPaymentMethod("card")}
                      className={`p-4 border-2 rounded-xl transition-colors ${
                        paymentMethod === "card"
                          ? "border-red-500 bg-red-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <CreditCard className="w-6 h-6 text-gray-600" />
                        <span className="font-semibold">Carte bancaire</span>
                      </div>
                    </button>
                    <button
                      onClick={() => setPaymentMethod("paypal")}
                      className={`p-4 border-2 rounded-xl transition-colors ${
                        paymentMethod === "paypal"
                          ? "border-red-500 bg-red-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                          PP
                        </div>
                        <span className="font-semibold">PayPal</span>
                      </div>
                    </button>
                  </div>
                </div>

                {paymentMethod === "card" && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Numéro de carte
                      </label>
                      <input
                        type="text"
                        value={cardInfo.number}
                        onChange={(e) =>
                          setCardInfo({ ...cardInfo, number: e.target.value })
                        }
                        placeholder="1234 5678 9012 3456"
                        className="w-full p-4 border border-gray-300 rounded-xl focus:border-red-500 focus:outline-none"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Date d'expiration
                        </label>
                        <input
                          type="text"
                          value={cardInfo.expiry}
                          onChange={(e) =>
                            setCardInfo({ ...cardInfo, expiry: e.target.value })
                          }
                          placeholder="MM/AA"
                          className="w-full p-4 border border-gray-300 rounded-xl focus:border-red-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          value={cardInfo.cvv}
                          onChange={(e) =>
                            setCardInfo({ ...cardInfo, cvv: e.target.value })
                          }
                          placeholder="123"
                          className="w-full p-4 border border-gray-300 rounded-xl focus:border-red-500 focus:outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nom sur la carte
                      </label>
                      <input
                        type="text"
                        value={cardInfo.name}
                        onChange={(e) =>
                          setCardInfo({ ...cardInfo, name: e.target.value })
                        }
                        placeholder="Jean Dupont"
                        className="w-full p-4 border border-gray-300 rounded-xl focus:border-red-500 focus:outline-none"
                      />
                    </div>
                  </div>
                )}

                {paymentMethod === "paypal" && (
                  <div className="text-center py-8">
                    <div className="text-gray-600 mb-4">
                      Vous serez redirigé vers PayPal pour finaliser le paiement
                    </div>
                    <button className="btn-primary bg-blue-600 hover:bg-blue-700">
                      Continuer avec PayPal
                    </button>
                  </div>
                )}

                {/* Conditions */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      className="w-5 h-5 text-red-600 rounded focus:ring-red-500 mt-1"
                    />
                    <div className="text-sm text-gray-600">
                      J'accepte les{" "}
                      <a href="#" className="text-red-600 hover:underline">
                        conditions générales
                      </a>{" "}
                      et la{" "}
                      <a href="#" className="text-red-600 hover:underline">
                        politique de confidentialité
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Boutons de navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center space-x-2 px-6 py-3 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:text-gray-900 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Précédent</span>
              </button>

              {currentStep < 3 ? (
                <button onClick={nextStep} className="btn-primary">
                  <span>Suivant</span>
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!agreeTerms || processing}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {processing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Traitement...
                    </>
                  ) : (
                    <>
                      <Shield className="w-5 h-5 mr-2" />
                      Payer maintenant
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Sidebar récapitulatif */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Récapitulatif
                </h3>

                {/* Véhicule */}
                <div className="border-b border-gray-200 pb-6 mb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={vehicle.mainImage}
                      alt={vehicle.name}
                      className="w-16 h-12 object-cover rounded-lg"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {vehicle.name}
                      </h4>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {vehicle.location}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Du{" "}
                      {new Date(
                        reservationData.startDate,
                      ).toLocaleDateString()}{" "}
                      au{" "}
                      {new Date(reservationData.endDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {reservationData.days} jour
                      {reservationData.days > 1 ? "s" : ""}
                    </div>
                  </div>
                </div>

                {/* Détail des prix */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Location ({reservationData.days} jour
                      {reservationData.days > 1 ? "s" : ""})
                    </span>
                    <span className="font-semibold">
                      {reservationData.totalPrice}€
                    </span>
                  </div>

                  {/* Options */}
                  {Object.entries(options).map(([key, value]) => {
                    if (!value) return null;
                    const optionLabels = {
                      gps: "GPS Navigation",
                      childSeat: "Siège enfant",
                      additionalInsurance: "Assurance supplémentaire",
                      fuelPackage: "Forfait carburant",
                    };
                    const price =
                      optionsPricing[key as keyof typeof optionsPricing] *
                      reservationData.days;
                    return (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-gray-600">
                          {optionLabels[key as keyof typeof optionLabels]}
                        </span>
                        <span>+{price}€</span>
                      </div>
                    );
                  })}

                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-red-600">{totalWithOptions}€</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Caution (restituée)</span>
                    <span>{reservationData.deposit}€</span>
                  </div>
                </div>

                {/* Sécurité */}
                <div className="bg-green-50 rounded-xl p-4">
                  <div className="flex items-center space-x-2 text-green-800">
                    <Shield className="w-5 h-5" />
                    <span className="font-semibold">Paiement sécuris��</span>
                  </div>
                  <div className="text-sm text-green-700 mt-1">
                    Vos données sont protégées par chiffrement SSL
                  </div>
                </div>

                {/* Contact */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Besoin d'aide ?
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      06 12 34 56 78
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      contact@locd60.fr
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

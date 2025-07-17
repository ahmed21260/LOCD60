import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Car } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "Véhicules", href: "/vehicules" },
    { label: "Tarifs", href: "/tarifs" },
    { label: "Services", href: "/services" },
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Car className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-display font-bold text-gray-900">
              Loc'
              <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                D
              </span>{" "}
              60
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-gray-700 hover:text-red-600 transition-colors duration-300 font-semibold px-4 py-2 rounded-lg hover:bg-red-50"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link
              to="/reservation"
              className="hidden sm:inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold px-6 py-3 rounded-xl hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Réserver maintenant
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-300 shadow-md"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 glass-effect border-b border-white/10">
            <nav className="px-6 py-8 space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-700 hover:text-red-600 transition-colors duration-300 font-semibold text-lg py-2"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/reservation"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold px-8 py-4 rounded-xl hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105 shadow-lg mt-6"
              >
                Réserver maintenant
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-locd-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-locd-red rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Car className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-display font-extrabold text-white">
              Loc'<span className="text-locd-red">D</span> 60
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-gray-300 hover:text-locd-red transition-colors duration-300 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link
              to="/reservation"
              className="btn-primary hidden sm:inline-flex items-center"
            >
              Réserver
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-white hover:bg-locd-red transition-colors duration-300"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-locd-black/98 backdrop-blur-sm border-b border-gray-800">
            <nav className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-300 hover:text-locd-red transition-colors duration-300 font-medium py-2"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/reservation"
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary inline-flex items-center mt-4"
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

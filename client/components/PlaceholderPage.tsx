import { Construction } from "lucide-react";
import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({
  title,
  description = "Cette page est en cours de développement.",
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-locd-black">
      <div className="text-center px-4 max-w-md mx-auto">
        <div className="w-20 h-20 bg-locd-red/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Construction className="w-10 h-10 text-locd-red" />
        </div>
        <h1 className="text-3xl font-display font-extrabold text-white mb-4">
          {title}
        </h1>
        <p className="text-gray-400 mb-8">{description}</p>
        <Link to="/" className="btn-primary inline-flex items-center">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, MessageCircle } from 'lucide-react';
import { generateInquiryWhatsAppURL } from '../utils/whatsapp';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="mb-8">
          <div className="text-9xl font-bold text-gray-300 mb-4">404</div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Page Introuvable
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            to="/"
            className="btn-primary w-full justify-center"
          >
            <Home className="w-5 h-5" />
            Retour à l'accueil
          </Link>

          <Link
            to="/appartements"
            className="btn-outline w-full justify-center"
          >
            <Search className="w-5 h-5" />
            Voir nos appartements
          </Link>

          <button
            onClick={() => window.open(generateInquiryWhatsAppURL(), '_blank')}
            className="w-full px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors font-medium inline-flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Contactez-nous via WhatsApp</span>
          </button>
        </div>

        <div className="mt-12 text-gray-500 text-sm">
          Si vous pensez qu'il s'agit d'une erreur, n'hésitez pas à nous contacter.
        </div>
      </div>
    </div>
  );
};

export default NotFound;
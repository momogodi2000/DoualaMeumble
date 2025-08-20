import { Link } from 'react-router-dom';
import { 
  Home, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Facebook, 
  Instagram, 
  Twitter,
  Clock,
  Shield,
  Wifi,
  Car
} from 'lucide-react';
import { generateInquiryWhatsAppURL } from '../../utils/whatsapp';
import { companyInfo } from '../../data/apartments';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Appartements', href: '/appartements' },
    { name: 'À Propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' }
  ];

  const legalLinks = [
    { name: 'Conditions générales', href: '/conditions' },
    { name: 'Politique de confidentialité', href: '/confidentialite' },
    { name: 'Mentions légales', href: '/mentions-legales' }
  ];

  const apartments = [
    { name: 'Studios Bonapriso', href: '/appartements?type=Studio&quarter=Bonapriso' },
    { name: 'T2 Bonanjo', href: '/appartements?type=T2&quarter=Bonanjo' },
    { name: 'T3 Akwa', href: '/appartements?type=T3&quarter=Akwa' },
    { name: 'Tous nos logements', href: '/appartements' }
  ];

  const features = [
    { icon: Shield, text: 'Sécurité 24h/7j' },
    { icon: Wifi, text: 'WiFi gratuit' },
    { icon: Car, text: 'Parking inclus' },
    { icon: Clock, text: 'Check-in flexible' }
  ];

  const handleWhatsAppClick = () => {
    const whatsappUrl = generateInquiryWhatsAppURL();
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img src="/icons/app-logo.svg" alt="Fresh Residence Logo" className="w-10 h-10" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-lg leading-none">
                    Fresh Residence
                  </span>
                  <span className="text-sm text-gray-400">
                    Appartements meublés
                  </span>
                </div>
              </Link>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Location d'appartements meublés haut de gamme à Douala. 
                Réservation simple via WhatsApp pour votre confort et sécurité.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                    <feature.icon className="w-4 h-4 text-primary-400" />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display font-semibold text-lg mb-6">Navigation</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Apartments */}
            <div>
              <h3 className="font-display font-semibold text-lg mb-6">Nos Logements</h3>
              <ul className="space-y-3">
                {apartments.map((apartment) => (
                  <li key={apartment.name}>
                    <Link 
                      to={apartment.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {apartment.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-display font-semibold text-lg mb-6">Contact</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Bonapriso, Douala</p>
                    <p className="text-gray-400 text-sm">Cameroun</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <a 
                    href={`tel:${companyInfo.phone}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {companyInfo.phone}
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <a 
                    href={`mailto:${companyInfo.email}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {companyInfo.email}
                  </a>
                </div>

                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <MessageCircle className="w-5 h-5 text-green-400 group-hover:text-green-300" />
                  <span>Réserver via WhatsApp</span>
                </button>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4 mt-6">
                <a 
                  href="#" 
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} {companyInfo.name}. Tous droits réservés.
            </div>
            
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              {legalLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="text-center text-gray-500 text-xs mt-4">
            Site web développé avec ❤️ pour la ville de Douala
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
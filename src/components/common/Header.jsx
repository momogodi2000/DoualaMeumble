import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, MapPin, Home } from 'lucide-react';
import { generateInquiryWhatsAppURL } from '../../utils/whatsapp';
import { usePWA } from '../../hooks/usePWA';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { isInstallable, installApp } = usePWA();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navigation = [
    { name: 'Accueil', href: '/', icon: Home },
    { name: 'Appartements', href: '/appartements' },
    { name: 'À Propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' }
  ];

  const handleWhatsAppClick = () => {
    const whatsappUrl = generateInquiryWhatsAppURL();
    window.open(whatsappUrl, '_blank');
  };

  const handleInstallClick = async () => {
    const installed = await installApp();
    if (installed) {
      console.log('App installed successfully');
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-lg leading-none transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                AppartDouala
              </span>
              <span className={`text-xs transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}>
                Appartements meublés
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors hover:text-primary-600 ${
                  location.pathname === item.href
                    ? 'text-primary-600'
                    : isScrolled 
                      ? 'text-gray-700 hover:text-primary-600' 
                      : 'text-white hover:text-primary-200'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {isInstallable && (
              <button
                onClick={handleInstallClick}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  isScrolled
                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                Installer l'app
              </button>
            )}
            
            <a
              href="tel:+237XXXXXXXXX"
              className={`p-2 rounded-lg transition-all ${
                isScrolled
                  ? 'text-gray-600 hover:bg-gray-100'
                  : 'text-white hover:bg-white/20'
              }`}
              title="Appeler"
            >
              <Phone className="w-5 h-5" />
            </a>
            
            <button
              onClick={handleWhatsAppClick}
              className="btn-secondary"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/20'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-3 py-2 font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  }`}
                >
                  {item.icon && <item.icon className="w-5 h-5" />}
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
            
            <div className="flex flex-col space-y-3 mt-6 pt-6 border-t border-gray-200">
              {isInstallable && (
                <button
                  onClick={handleInstallClick}
                  className="btn-outline text-left"
                >
                  Installer l'application
                </button>
              )}
              
              <div className="flex space-x-3">
                <a
                  href="tel:+237XXXXXXXXX"
                  className="flex-1 btn-outline"
                >
                  <Phone className="w-5 h-5" />
                  Appeler
                </a>
                
                <button
                  onClick={handleWhatsAppClick}
                  className="flex-1 btn-secondary"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
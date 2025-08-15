import { useState, useEffect } from 'react';
import { X, Download, Smartphone } from 'lucide-react';
import { usePWA } from '../../hooks/usePWA';

const InstallPrompt = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const { isInstallable, installApp, isInstalled } = usePWA();

  useEffect(() => {
    const hasSeenPrompt = localStorage.getItem('hasSeenInstallPrompt');
    
    if (isInstallable && !isInstalled && !hasSeenPrompt) {
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 10000); // Show after 10 seconds

      return () => clearTimeout(timer);
    }
  }, [isInstallable, isInstalled]);

  const handleInstall = async () => {
    const installed = await installApp();
    if (installed) {
      setShowPrompt(false);
      localStorage.setItem('hasSeenInstallPrompt', 'true');
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('hasSeenInstallPrompt', 'true');
  };

  if (!showPrompt || !isInstallable || isInstalled) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50">
      <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6 relative">
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
            <Smartphone className="w-6 h-6 text-white" />
          </div>

          <div className="flex-1">
            <h3 className="font-display font-semibold text-lg text-gray-900 mb-2">
              Installer l'application
            </h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Installez notre app pour un accès rapide aux appartements, des notifications 
              exclusives et une navigation hors ligne.
            </p>

            <div className="flex space-x-3">
              <button
                onClick={handleInstall}
                className="flex-1 btn-primary text-sm py-2"
              >
                <Download className="w-4 h-4" />
                Installer
              </button>
              <button
                onClick={handleDismiss}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 text-sm font-medium transition-colors"
              >
                Plus tard
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>✓ Navigation hors ligne</span>
            <span>✓ Notifications exclusives</span>
            <span>✓ Accès rapide</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallPrompt;
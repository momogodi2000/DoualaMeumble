import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import InstallPrompt from './InstallPrompt';
import { useEffect } from 'react';
import { initEmailJS } from '../../utils/email';

const Layout = () => {
  useEffect(() => {
    initEmailJS();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Outlet />
      </main>
      
      <Footer />
      
      {/* Additional Components */}
      <ScrollToTop />
      <InstallPrompt />
    </div>
  );
};

export default Layout;
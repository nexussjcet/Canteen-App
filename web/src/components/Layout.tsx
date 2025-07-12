import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import BottomNav from './BottomNav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const hideNavRoutes = ['/login', '/signup'];
  const showNav = !hideNavRoutes.includes(location.pathname);
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-gray-50">
      {showNav && <Navigation />}
      <main className={showNav && !isHomePage ? 'pb-20' : ''}>
        {children}
      </main>
      {showNav && !isHomePage && <BottomNav />}
    </div>
  );
};

export default Layout;
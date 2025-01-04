import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SunIcon, MoonIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { useCartStore } from '../store/cartStore';

const pages = [
  { title: 'Home', path: '/' },
  { title: 'Projects', path: '/benti-grid' },
  { title: 'Biography', path: '/biography' },
  { title: 'Shop', path: '/shop' },
  { title: 'Contact', path: '/contact' },
];

export default function Header({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const cartItems = useCartStore((state) => state.items);

  const handleNavigate = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate('/')}>
            <span className="font-playfair font-bold text-lg text-gray-900 dark:text-white">
              ARTIST NAME
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {pages.map((page) => (
              <button
                key={page.path}
                onClick={() => handleNavigate(page.path)}
                className={`px-3 py-2 text-sm font-medium transition-colors relative
                  ${location.pathname === page.path
                    ? 'text-primary dark:text-white border-b-2 border-primary dark:border-white'
                    : 'text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
              >
                {page.title}
                {page.title === 'Shop' && cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              {darkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden ml-2 p-2 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {pages.map((page) => (
                <button
                  key={page.path}
                  onClick={() => handleNavigate(page.path)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium relative
                    ${location.pathname === page.path
                      ? 'bg-gray-100 dark:bg-gray-800 text-primary dark:text-white'
                      : 'text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                >
                  {page.title}
                  {page.title === 'Shop' && cartItems.length > 0 && (
                    <span className="absolute top-2 right-2 bg-primary text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                      {cartItems.length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
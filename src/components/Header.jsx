import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SunIcon, MoonIcon, Bars3Icon } from '@heroicons/react/24/outline';

import Logo from '../assets/images/logomanu.png';

const pages = [
  { title: 'Home', path: '/' },
  { title: 'Progetti', path: '/benti-grid' },
  { title: 'Bio', path: '/biography' },
  { title: 'Contatti', path: '/contact' },
];

export default function Header({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 dark:bg-gray-900 shadow-sm bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-16">
          {/* Logo e Titolo */}
          <div
            className="flex-shrink-0 cursor-pointer flex items-center space-x-3"
            onClick={() => navigate('/')}
          >
            <img
              src={Logo}
              alt="Logo"
              className="h-8 w-8 lg:h-10 lg:w-10" /* Logo meno ingombrante */
            />
            <span className="sm:text-2xl md:text-sm lg:text-lg font-stencil text-gray-900 dark:text-white">
              Orma Il Viandante
            </span>
          </div>

          {/* Navigazione principale */}
          <nav className="hidden lg:flex mr-[155px] space-x-6">
            {pages.map((page) => (
              <button
                key={page.path}
                onClick={() => handleNavigate(page.path)}
                className={`px-3 py-2 xl:text-lg md:text-sm transition-colors relative
                  ${
                    location.pathname === page.path
                      ? 'text-primary dark:text-white border-b-2 border-primary dark:border-white'
                      : 'text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
              >
                {page.title}
              </button>
            ))}
          </nav>

          {/* Controlli Modalità Scura e Menu */}
          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <SunIcon className="h-5 w-5 lg:h-6 lg:w-6" /> /* Icone proporzionate */
              ) : (
                <MoonIcon className="h-5 w-5 lg:h-6 lg:w-6" />
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden ml-2 p-2 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              aria-expanded={isMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div
            className="lg:hidden origin-top-right transition-transform transform scale-95 bg-white dark:bg-gray-900 rounded-md shadow-lg"
            role="menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {pages.map((page) => (
                <button
                  key={page.path}
                  onClick={() => handleNavigate(page.path)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium relative
                    ${
                      location.pathname === page.path
                        ? 'bg-gray-100 dark:bg-gray-800 text-primary dark:text-white'
                        : 'text-black font-semibold dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  role="menuitem"
                >
                  {page.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

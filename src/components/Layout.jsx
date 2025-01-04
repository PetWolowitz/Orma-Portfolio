import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, darkMode, toggleDarkMode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-1 mt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
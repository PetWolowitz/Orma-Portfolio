import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import BentiCard from '../components/BentiCard';
import { bentiItems } from '../data/bentiData';

export default function BentiGrid() {
  const navigate = useNavigate();

  const handleCardClick = (title) => {
    const slug = title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/benti-grid/${slug}`);
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-semibold text-center mb-8 sm:mb-12 md:mb-16 text-gray-900 dark:text-white font-graffiti">
          Project Categories
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {bentiItems.map((item) => (
            <BentiCard 
              key={item.id}
              item={item} 
              onClick={() => handleCardClick(item.title)}
            />
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
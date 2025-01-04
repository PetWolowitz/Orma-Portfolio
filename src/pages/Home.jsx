import PageTransition from '../components/PageTransition';
import BackgroundCarousel from '../components/BackgroundCarousel';
import { carouselImages } from '../data/carouselImages';

export default function Home() {
  return (
    <PageTransition>
      <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <BackgroundCarousel images={carouselImages} />
        
        <div className="relative container mx-auto px-4 sm:px-6 md:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-citystencil  tracking-wide mb-6 text-shadow-custom">
            Orma Il Viandante
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-lato font-light tracking-wide max-w-3xl mx-auto px-4 sm:px-8 text-shadow-custom">
            <span>Artist</span> | <span>Designer</span> | <span>Painter</span>
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
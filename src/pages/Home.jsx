import PageTransition from '../components/PageTransition';
import BackgroundCarousel from '../components/BackgroundCarousel';
import { carouselImages } from '../data/carouselImages';

export default function Home() {
  return (
    <PageTransition>
      <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <BackgroundCarousel images={carouselImages} />
        
        <div className="relative container mx-auto px-4 sm:px-6 md:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-6 drop-shadow-lg ">
            Orma Il Viandante
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-lato font-light tracking-wide max-w-3xl mx-auto px-4 sm:px-8">
            <span className="font-semibold">Artist</span> | <span className="font-semibold">Designer</span> | <span className="font-semibold">Painter</span>
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
import PageTransition from '../components/PageTransition';
import BackgroundCarousel from '../components/BackgroundCarousel';
import { carouselImages } from '../data/carouselImages';

export default function Home() {
  return (
    <PageTransition>
      <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <BackgroundCarousel images={carouselImages} />

        {/* Aggiunta dell'immagine al posto della scritta */}
        <div className="relative container  mx-auto px-4 sm:px-6 md:px-8 text-center">
        <img
          src="/images/h1Hero/ormalogobianco.png"
          alt="Orma Il Viandante Logo"
          className="max-w-full h-auto mx-auto mt-8 sm:mt-12 md:mt-16 py-4 sm:py-6 md:py-8"
        />
        </div>
      </div>
    </PageTransition>
  );
}

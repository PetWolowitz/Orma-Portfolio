import { useParams, useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import ProjectCarousel from '../components/ProjectCarousel';
import { bentiItems } from '../data/bentiData';

export default function BentiDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const artwork = bentiItems.find(item => item.title.toLowerCase().replace(/\s+/g, '-') === id);

  if (!artwork) {
    return (
      <div className="container mx-auto px-4">
        <p>Project not found</p>
        <button
          onClick={() => navigate('/benti-grid')}
          className="inline-flex items-center text-primary hover:text-primary-dark my-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12">
        <button
          onClick={() => navigate('/benti-grid')}
          className="inline-flex items-center mb-8 text-primary hover:text-primary-dark font-semibold dark:text-white"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <ProjectCarousel projects={artwork.details.projects} />
          </div>

          <div className="w-full md:w-1/2">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h1 className="text-2xl sm:text-3xl mb-4 text-gray-900 dark:text-white">
                {artwork.title}
              </h1>
              
              <p className="text-gray-600 dark:text-gray-300 font-semibold mt-8 text-sm sm:text-base">
                {artwork.details.description}
              </p>

              <div className="mt-4">
                <p className="text-sm text-gray-500 font-semibold mb-2 dark:text-gray-400">
                   {artwork.details.year}
                </p>
                <p className="text-sm text-gray-500 font-semibold dark:text-gray-400">
                 {artwork.details.medium}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
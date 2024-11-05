import React from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import VideoUploadForm from './VideoUploadForm';
import { ArrowLeft } from 'lucide-react';
import { addVideo } from '../lib/video-service';

const UploadPage: React.FC = () => {
  const navigate = useNavigate();
  const { category } = useParams<{ category: string }>();
  const [searchParams] = useSearchParams();

  const handleVideoUpload = async (
    title: string,
    description: string,
    url: string,
    tags: { [key: string]: string[] }
  ) => {
    if (!category) return;

    try {
      const videoId = url.split('v=')[1]?.split('&')[0];
      if (!videoId) {
        throw new Error('Invalid YouTube URL');
      }
      await addVideo(category, title, description, videoId, tags);
      // Preserve filters when navigating back after upload
      navigate(`/${category}${location.search}`);
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Failed to upload video');
    }
  };

  // Create back link URL with preserved filters
  const backToGalleryUrl = `/${category}${location.search}`;

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          to={backToGalleryUrl} 
          className="flex items-center text-blue-500 hover:text-blue-600 mb-4"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to {category} Gallery
        </Link>
        <h1 className="text-3xl font-bold mb-6">Upload Video - {category}</h1>
        <VideoUploadForm onVideoUpload={handleVideoUpload} category={category || ''} />
      </div>
    </div>
  );
};

export default UploadPage;
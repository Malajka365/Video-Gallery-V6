import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import CategoryGallery from './components/CategoryGallery';
import UploadPage from './components/UploadPage';
import ManageVideosPage from './components/ManageVideosPage';
import TagManagementPage from './components/TagManagementPage';
import VideoPage from './components/VideoPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:category" element={<CategoryGallery />} />
          <Route path="/:category/video/:id" element={<VideoPage />} />
          <Route path="/:category/upload" element={<UploadPage />} />
          <Route path="/:category/manage" element={<ManageVideosPage />} />
          <Route path="/:category/tags" element={<TagManagementPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
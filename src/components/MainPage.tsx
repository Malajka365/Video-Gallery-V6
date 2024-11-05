import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Dumbbell, CircleDot } from 'lucide-react';

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <button
          onClick={() => navigate('/handball')}
          className="group flex flex-col items-center justify-center p-12 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <CircleDot className="w-16 h-16 text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-2xl font-bold text-gray-800">Handball</span>
        </button>

        <button
          onClick={() => navigate('/physical')}
          className="group flex flex-col items-center justify-center p-12 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <Dumbbell className="w-16 h-16 text-green-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-2xl font-bold text-gray-800">Physical</span>
        </button>
      </div>
    </div>
  );
};

export default MainPage;
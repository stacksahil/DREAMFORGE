import React from 'react';
import { Star, MessageSquare } from 'lucide-react';

const experts = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    title: 'Career Counselor',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    specialization: 'Tech Careers',
    experience: '15+ years'
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'Industry Expert',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    specialization: 'Business & Finance',
    experience: '12+ years'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    title: 'Career Coach',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    specialization: 'Healthcare',
    experience: '10+ years'
  },
  {
    id: 4,
    name: 'David Wilson',
    title: 'HR Consultant',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    specialization: 'Corporate Careers',
    experience: '8+ years'
  }
];

const Experts = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Chat with Career Experts</h1>
        <p className="text-gray-600">Connect with experienced professionals for personalized guidance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {experts.map((expert) => (
          <div key={expert.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative">
              <img
                src={expert.image}
                alt={expert.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">{expert.rating}</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{expert.name}</h3>
              <p className="text-gray-600 mb-2">{expert.title}</p>
              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Specialization:</span> {expert.specialization}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Experience:</span> {expert.experience}
                </p>
              </div>
              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2">
                <MessageSquare className="h-5 w-5" />
                <span>Start Chat</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experts;
import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';

const books = [
  {
    id: 1,
    title: 'The Career Guide for Tech Professionals',
    author: 'Jane Smith',
    price: 29.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    category: 'Technology'
  },
  {
    id: 2,
    title: 'Business Career Pathways',
    author: 'Michael Brown',
    price: 24.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    category: 'Business'
  },
  {
    id: 3,
    title: 'Healthcare Career Development',
    author: 'Dr. Sarah Johnson',
    price: 34.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    category: 'Healthcare'
  },
  {
    id: 4,
    title: 'The Art of Career Navigation',
    author: 'Robert Wilson',
    price: 19.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    category: 'General'
  }
];

const Shop = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Career Resources Shop</h1>
        <p className="text-gray-600">Discover books and resources to advance your career</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div key={book.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-indigo-600">{book.category}</span>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{book.rating}</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-1">{book.title}</h3>
              <p className="text-gray-600 text-sm mb-4">by {book.author}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">${book.price}</span>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
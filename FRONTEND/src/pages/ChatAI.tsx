import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ChatAI = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', content: 'Hello! I\'m your AI career advisor. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { type: 'user', content: input }]);
    
    // Simulate AI response (in a real app, this would call an AI service)
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        content: 'This is a simulated AI response. In a real application, this would be connected to an AI service.'
      }]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg h-[600px] flex flex-col">
        <div className="bg-indigo-600 text-white px-6 py-4 rounded-t-lg">
          <h1 className="text-xl font-semibold">Chat with AI Career Advisor</h1>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-lg px-4 py-2 ${
                  message.type === 'user'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSend} className="border-t p-4">
          <div className="flex space-x-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2"
            >
              <span>Send</span>
              <Send className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatAI;
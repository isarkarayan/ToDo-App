import React from 'react';
import { CheckSquare } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center">
        <a href='https://todo.ayansarkar.co.in/'><CheckSquare className="h-8 w-8 text-blue-500 mr-3" /></a>
          <a href='https://todo.ayansarkar.co.in/'><h1 className="text-2xl font-bold text-gray-900">ToDo Note</h1></a>
        </div>
      </div>
    </header>
  );
}
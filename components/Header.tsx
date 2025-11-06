
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm p-4 text-center">
      <h1 className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400">
        Markdown to Rich Text Converter
      </h1>
      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-1">
        Paste your Gemini output to get a clean, copy-friendly format for Word & OneNote.
      </p>
    </header>
  );
};

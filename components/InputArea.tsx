import React from 'react';

interface InputAreaProps {
  value: string;
  onChange: (value: string) => void;
}

export const InputArea: React.FC<InputAreaProps> = ({ value, onChange }) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Paste your Markdown content here..."
      className="flex-grow w-full p-4 bg-transparent text-base font-mono focus:ring-0 focus:outline-none resize-none rounded-b-xl"
      style={{ minHeight: '75vh' }}
    />
  );
};
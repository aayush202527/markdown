import React from 'react';

interface CopyButtonProps {
  onClick: () => void;
  status: 'copy' | 'copied' | 'error';
}

const CheckIcon: React.FC<{className: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
);

const ClipboardIcon: React.FC<{className: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a2.25 2.25 0 0 1-2.25 2.25H9a2.25 2.25 0 0 1-2.25-2.25v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
    </svg>
);

const ErrorIcon: React.FC<{className: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);


export const CopyButton: React.FC<CopyButtonProps> = ({ onClick, status }) => {
  const statusConfig = {
    copy: {
      text: 'Copy',
      icon: <ClipboardIcon className="w-4 h-4 mr-2" />,
      className: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    },
    copied: {
      text: 'Copied!',
      icon: <CheckIcon className="w-4 h-4 mr-2" />,
      className: 'bg-green-600 hover:bg-green-700 text-white',
    },
    error: {
      text: 'Error',
      icon: <ErrorIcon className="w-4 h-4 mr-2" />,
      className: 'bg-red-600 hover:bg-red-700 text-white',
    },
  };

  const { text, icon, className } = statusConfig[status];

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800 focus:ring-indigo-500 transition-all duration-200 ${className}`}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
};
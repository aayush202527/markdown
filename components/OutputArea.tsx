import React from 'react';

interface OutputAreaProps {
  htmlContent: string;
}

export const OutputArea = React.forwardRef<HTMLDivElement, OutputAreaProps>(
  ({ htmlContent }, ref) => {
    return (
      <div
        ref={ref}
        className="prose prose-indigo dark:prose-invert max-w-none flex-grow w-full p-6 bg-transparent overflow-y-auto rounded-b-xl"
        style={{ minHeight: '75vh' }}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    );
  }
);
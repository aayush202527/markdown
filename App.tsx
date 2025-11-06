import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Header } from './components/Header';
import { InputArea } from './components/InputArea';
import { OutputArea } from './components/OutputArea';
import { CopyButton } from './components/CopyButton';
import { convertToRichText } from './services/markdownConverter';
import { SAMPLE_INPUT } from './constants';

declare global {
  interface Window {
    markdownit: any;
    markdownitKatex: any;
    katex: any;
  }
}

const App: React.FC = () => {
  const [inputText, setInputText] = useState<string>(SAMPLE_INPUT);
  const [outputText, setOutputText] = useState<string>('');
  const [copyStatus, setCopyStatus] = useState<'copy' | 'copied' | 'error'>('copy');
  const [rendererLoaded] = useState<boolean>(!!(window.markdownit && window.markdownitKatex && window.katex));
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rendererLoaded) {
      setOutputText('<p class="text-center text-red-500 font-bold p-4">Error: Could not load the Markdown renderer. Please check your connection and refresh.</p>');
      return;
    }

    const handler = setTimeout(() => {
      const html = convertToRichText(inputText);
      setOutputText(html);
    }, 200); // Debounce conversion

    return () => clearTimeout(handler);
  }, [inputText, rendererLoaded]);

  const handleCopy = useCallback(async () => {
    if (!outputRef.current || !outputText) return;

    try {
      const htmlBlob = new Blob([outputText], { type: 'text/html' });
      const textBlob = new Blob([outputRef.current.innerText], { type: 'text/plain' });

      await navigator.clipboard.write([
        new ClipboardItem({
          'text/html': htmlBlob,
          'text/plain': textBlob,
        }),
      ]);

      setCopyStatus('copied');
      setTimeout(() => setCopyStatus('copy'), 2500);
    } catch (error) {
      console.error('Failed to copy rich text:', error);
      setCopyStatus('error');
      setTimeout(() => setCopyStatus('copy'), 2500);
    }
  }, [outputText]);

  const handleClear = () => {
    setInputText('');
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-200 flex flex-col">
      <Header />
      <main className="flex-grow p-4 md:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6 h-full items-start">
        {/* Input Panel */}
        <div className="flex flex-col h-full bg-white dark:bg-gray-900/50 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center p-3 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Markdown</h2>
            <button
              onClick={handleClear}
              className="px-3 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/50 rounded-md hover:bg-indigo-200 dark:hover:bg-indigo-900 transition-colors"
            >
              Clear
            </button>
          </div>
          <InputArea value={inputText} onChange={setInputText} />
        </div>

        {/* Output Panel */}
        <div className="flex flex-col h-full bg-white dark:bg-gray-900/50 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center p-3 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Rich Text Preview</h2>
            <CopyButton onClick={handleCopy} status={copyStatus} />
          </div>
          <OutputArea ref={outputRef} htmlContent={outputText} />
        </div>
      </main>
    </div>
  );
};

export default App;
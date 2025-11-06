declare global {
  interface Window {
    markdownit: any;
    markdownitKatex: any;
    katex: any;
  }
}

let md: any = null;

// Initialize the markdown-it renderer with the KaTeX plugin
const initializeMarkdownIt = () => {
  if (window.markdownit && window.markdownitKatex && window.katex) {
    md = window.markdownit({
      html: true,       // Enable HTML tags in source
      linkify: true,    // Autoconvert URL-like text to links
      typographer: true, // Enable smartquotes and other typographic replacements
    }).use(window.markdownitKatex, {
        throwOnError: false,
        errorColor: "#cc0000"
    });
  }
};

export const convertToRichText = (markdown: string): string => {
  // Initialize on first run
  if (!md) {
    initializeMarkdownIt();
  }

  // If initialization failed (e.g., scripts blocked), return an error message
  if (!md) {
    return `<p class="text-center text-red-500 font-bold">Error: Markdown renderer not loaded. Please check your connection and refresh.</p>`;
  }
  
  // The Gemini output often includes double-escaped backslashes in math formulas (e.g., "\\\\le").
  // The renderer needs single backslashes (e.g., "\\le"). This replacement fixes that.
  const cleanedMarkdown = markdown.replace(/\\\\/g, '\\');
  
  return md.render(cleanedMarkdown);
};


import React, { useState, useEffect } from 'react';

declare global {
    interface Window {
        marked: any;
    }
}

const defaultMarkdown = `
# Welcome to Doodax 🚀

## The Next-Gen Markdown Editor

Doodax isn't just a previewer; it's a creation engine.

---

### 🔥 Why Doodax?

*   **Instant Rendering:** Zero latency preview.
*   **Privacy First:** 100% Client-side processing.
*   **Export Ready:** Download your work as HTML instantly.

### 💻 Code Snippet Example

\`\`\`javascript
const creativeFlow = (focus) => {
  if (focus === 'absolute') {
    return 'Masterpiece';
  }
  return 'Draft';
};
\`\`\`

### 📊 Tables Support

| Feature | Doodax | Others |
| :--- | :---: | :---: |
| Live Preview | ✅ | ⚠️ |
| Galaxy Theme | ✅ | ❌ |
| Local Processing | ✅ | ❌ |

> "Simplicity is the ultimate sophistication." - Leonardo da Vinci
`;

const MarkdownPreviewer: React.FC = () => {
    const [markdown, setMarkdown] = useState<string>(defaultMarkdown);
    const [html, setHtml] = useState<string>('');
    const [copyStatus, setCopyStatus] = useState<string>('Copy HTML');
    const [wordCount, setWordCount] = useState<number>(0);
    const [charCount, setCharCount] = useState<number>(0);

    useEffect(() => {
        if (window.marked) {
            setHtml(window.marked.parse(markdown));
        }
        // Calculate stats
        const words = markdown.trim() ? markdown.trim().split(/\s+/).length : 0;
        setWordCount(words);
        setCharCount(markdown.length);
    }, [markdown]);

    const handleClear = () => setMarkdown('');

    const handleCopy = () => {
        navigator.clipboard.writeText(html).then(() => {
            setCopyStatus('Copied!');
            setTimeout(() => setCopyStatus('Copy HTML'), 2000);
        }).catch(err => console.error('Failed to copy', err));
    };

    const handleDownload = () => {
        const element = document.createElement("a");
        const file = new Blob([html], {type: 'text/html'});
        element.href = URL.createObjectURL(file);
        element.download = "doodax-export.html";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
        document.body.removeChild(element);
    };

    return (
        <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-fade-in-up">
            {/* Toolbar Header */}
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/10">
                <div className="flex justify-between items-center p-3 bg-white/5">
                    <div className="flex items-center gap-2">
                         <span className="w-3 h-3 rounded-full bg-red-500"></span>
                         <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                         <span className="w-3 h-3 rounded-full bg-green-500"></span>
                         <h2 className="ml-2 text-sm font-semibold text-slate-300 uppercase tracking-wider">Editor</h2>
                    </div>
                    <button
                        onClick={handleClear}
                        className="text-xs px-3 py-1.5 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white rounded transition-all duration-200 border border-red-500/20"
                    >
                        Clear
                    </button>
                </div>
                <div className="flex justify-between items-center p-3 bg-indigo-900/20 border-t md:border-t-0 md:border-l border-white/10">
                    <h2 className="text-sm font-semibold text-indigo-300 uppercase tracking-wider">Live Preview</h2>
                    <div className="flex gap-2">
                        <button
                            onClick={handleDownload}
                            className="text-xs px-3 py-1.5 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded transition-all duration-200 border border-cyan-500/20"
                        >
                            Download
                        </button>
                        <button
                            onClick={handleCopy}
                            className="text-xs px-3 py-1.5 bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500 hover:text-white rounded transition-all duration-200 border border-indigo-500/20"
                        >
                            {copyStatus}
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
                {/* Input Area */}
                <div className="relative group">
                    <textarea
                        value={markdown}
                        onChange={(e) => setMarkdown(e.target.value)}
                        className="w-full h-full p-6 bg-transparent text-slate-300 font-mono text-sm leading-relaxed resize-none focus:outline-none focus:bg-white/5 transition-colors custom-scrollbar"
                        placeholder="# Start creating..."
                        spellCheck="false"
                    />
                    <div className="absolute bottom-2 right-4 text-xs text-slate-500 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                        {wordCount} words | {charCount} chars
                    </div>
                </div>

                {/* Preview Area */}
                <div className="bg-black/20 md:border-l border-white/10 overflow-hidden">
                    <div
                        id="preview"
                        className="h-full p-6 prose-doodax prose-sm md:prose-base max-w-none overflow-y-auto custom-scrollbar"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            </div>
        </div>
    );
};

export default MarkdownPreviewer;

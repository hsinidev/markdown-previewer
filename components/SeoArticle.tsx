
import React, { useState } from 'react';

const SeoArticle: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <article 
            className="relative bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl p-6 md:p-10 max-w-4xl mx-auto transition-all duration-500"
            itemScope 
            itemType="https://schema.org/TechArticle"
        >
            <div className={`prose-doodax max-w-none ${!isExpanded ? 'max-h-24 overflow-hidden' : ''}`}>
                <h1 itemProp="headline" className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-6">
                    The Ultimate Guide to Markdown: Mastering the Art of Text-to-HTML
                </h1>

                <p className="lead text-lg text-slate-300" itemProp="description">
                    Markdown is more than just a syntax; it's a universal standard for writers and developers. This comprehensive guide covers everything from basic formatting to advanced SEO strategies using Markdown.
                </p>

                {/* Content expands here */}
                <nav className="my-8 bg-white/5 p-6 rounded-lg border border-white/10">
                    <h2 className="text-xl font-bold text-white mb-4">Table of Contents</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                        <li><a href="#intro">1. What is Markdown?</a></li>
                        <li><a href="#benefits">2. Why Developers Use Doodax</a></li>
                        <li><a href="#basics">3. Core Syntax Mastery</a></li>
                        <li><a href="#advanced">4. Advanced Formatting</a></li>
                        <li><a href="#seo">5. Markdown for SEO</a></li>
                        <li><a href="#faq">6. Frequently Asked Questions</a></li>
                    </ul>
                </nav>

                <section id="intro">
                    <h2>1. What is Markdown?</h2>
                    <p>Markdown is a lightweight markup language created in 2004 by John Gruber. Unlike WYSIWYG editors (like Microsoft Word), Markdown uses simple punctuation characters to format text. It is designed to be easy to read and easy to write.</p>
                    <p>When you write in Doodax, you are writing in plain text. Our engine then interprets these characters—like hashes for headings or asterisks for bold text—and converts them into structured HTML code that browsers can understand.</p>
                </section>

                <section id="benefits">
                    <h2>2. Why Developers and Writers Choose Doodax</h2>
                    <p>In the digital age, speed is currency. Doodax offers a distraction-free environment that maximizes efficiency:</p>
                    <ul>
                        <li><strong>Portability:</strong> Markdown files (.md) can be opened in any text editor on any operating system.</li>
                        <li><strong>Clean Code:</strong> The HTML generated is clean, semantic, and free of the "junk code" often produced by rich text editors.</li>
                        <li><strong>Version Control:</strong> Because it is plain text, Markdown works perfectly with Git, allowing you to track changes line-by-line.</li>
                    </ul>
                </section>

                <section id="basics">
                    <h2>3. Core Syntax Mastery</h2>
                    <p>Mastering the basics allows you to format documents without lifting your fingers from the keyboard.</p>
                    
                    <h3>Headings</h3>
                    <p>Use hashtags to define headings. One hash for H1, two for H2, and so on.</p>
                    <pre><code># This is an H1
## This is an H2
### This is an H3</code></pre>

                    <h3>Emphasis</h3>
                    <p>Add nuance to your text with bold and italics.</p>
                    <pre><code>**Bold Text** for strong emphasis.
*Italic Text* for subtle stress.</code></pre>

                    <h3>Lists</h3>
                    <p>Organize your thoughts with ordered and unordered lists.</p>
                    <pre><code>- Item 1
- Item 2
  - Subitem A

1. First Step
2. Second Step</code></pre>
                </section>

                <section id="advanced">
                    <h2>4. Advanced Formatting</h2>
                    <p>Doodax supports GitHub Flavored Markdown (GFM), giving you superpowers like tables and task lists.</p>
                    
                    <h3>Code Blocks</h3>
                    <p>For developers, Doodax provides syntax highlighting for code snippets.</p>
                    <pre><code>```python
def hello_world():
    print("Hello Doodax!")
```</code></pre>

                    <h3>Blockquotes</h3>
                    <p>Perfect for highlighting advice or citing sources.</p>
                    <blockquote>
                        "The best documentation is the code itself, but Markdown comes a close second."
                    </blockquote>
                </section>

                <section id="seo">
                    <h2>5. Markdown for SEO</h2>
                    <p>Did you know using Markdown can improve your SEO? By naturally enforcing a hierarchy (H1, H2, H3), Markdown ensures your content is structurally sound. Search engines love semantic HTML structure.</p>
                    <ul>
                        <li><strong>H1 Tags:</strong> Use only one per document for your main title.</li>
                        <li><strong>Alt Text:</strong> Markdown makes it easy to add alt text to images `![Alt Text](url)`, which is crucial for accessibility and image search rankings.</li>
                        <li><strong>Internal Linking:</strong> create semantic links easily `[Link Text](url)`.</li>
                    </ul>
                </section>

                <section id="faq" itemScope itemType="https://schema.org/FAQPage">
                    <h2>6. Frequently Asked Questions (FAQ)</h2>
                    <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                        <h3 itemProp="name">Is Doodax free to use?</h3>
                        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                            <p itemProp="text">Yes, Doodax is completely free and open-source. There are no hidden fees or subscriptions.</p>
                        </div>
                    </div>
                    <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                        <h3 itemProp="name">Does Doodax store my data?</h3>
                        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                            <p itemProp="text">No. Doodax operates entirely on the client-side. Your text never leaves your browser, ensuring 100% privacy.</p>
                        </div>
                    </div>
                    <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                        <h3 itemProp="name">Can I export to PDF?</h3>
                        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                            <p itemProp="text">Currently, we support HTML export. For PDF, we recommend printing the page and selecting "Save as PDF" in your browser.</p>
                        </div>
                    </div>
                </section>
                
                <hr className="my-8 border-white/10" />
                <p className="text-center italic text-slate-400">Join thousands of developers using Doodax today.</p>
            </div>

            {/* Gradient Mask for Collapsed State */}
            {!isExpanded && (
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-900 via-slate-900/90 to-transparent flex items-end justify-center pb-4 rounded-b-xl">
                    <button
                        onClick={() => setIsExpanded(true)}
                        className="px-8 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300 ring-2 ring-white/20"
                    >
                        Read Full Article
                    </button>
                </div>
            )}

            {isExpanded && (
                <div className="text-center mt-8">
                    <button
                        onClick={() => setIsExpanded(false)}
                        className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-full transition-colors"
                    >
                        Show Less
                    </button>
                </div>
            )}
        </article>
    );
};

export default SeoArticle;


import React from 'react';
import ThemeLayout from './components/ThemeLayout';
import MarkdownPreviewer from './components/MarkdownPreviewer';
import SeoArticle from './components/SeoArticle';

const App: React.FC = () => {
    return (
        <ThemeLayout>
            <main className="container mx-auto px-4 py-8">
                <MarkdownPreviewer />
                <div id="article" className="mt-16 md:mt-24">
                   <SeoArticle />
                </div>
            </main>
        </ThemeLayout>
    );
};

export default App;

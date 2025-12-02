
import React, { useState, ReactNode } from 'react';
import Modal from './Modal';
import { ModalId } from '../types';

interface ThemeLayoutProps {
    children: ReactNode;
}

const ThemeLayout: React.FC<ThemeLayoutProps> = ({ children }) => {
    const [activeModal, setActiveModal] = useState<ModalId>(ModalId.None);

    const openModal = (modalId: ModalId) => setActiveModal(modalId);
    const closeModal = () => setActiveModal(ModalId.None);

    const navLinks = [
        { id: ModalId.About, label: 'About' },
        { id: ModalId.Contact, label: 'Contact' },
        { id: ModalId.Guide, label: 'Guide' },
        { id: ModalId.Privacy, label: 'Privacy Policy' },
        { id: ModalId.Terms, label: 'Terms of Service' },
        { id: ModalId.DMCA, label: 'DMCA' },
    ];

    return (
        <div className="relative min-h-screen flex flex-col overflow-x-hidden">
            <div className="doodax-bg"></div>
            <div className="stars"></div>

            <header className="bg-slate-900/50 backdrop-blur-md sticky top-0 z-40 border-b border-white/10">
                <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center gap-3">
                        <img src="/favicon.svg" alt="Doodax Logo" className="w-8 h-8 drop-shadow-[0_0_10px_rgba(129,140,248,0.5)]" />
                        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-300 tracking-wide">
                            DOODAX
                        </h1>
                    </div>
                    <nav className="mt-4 md:mt-0">
                        <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
                            {navLinks.map(link => (
                                <li key={link.id}>
                                    <button 
                                        onClick={() => openModal(link.id)} 
                                        className="text-slate-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>

            <div className="relative z-10 flex-grow">{children}</div>

            <footer className="bg-slate-900/80 backdrop-blur-md mt-16 py-8 border-t border-white/10">
                <div className="container mx-auto px-4 text-center">
                    <p className="mb-4 text-slate-300">
                        Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="text-amber-400 font-bold hover:underline hover:text-amber-300">HSINI MOHAMED</a>
                    </p>
                    <div className="flex justify-center items-center gap-6 text-sm text-slate-400">
                        <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">doodax.com</a>
                        <span className="text-slate-600">|</span>
                        <a href="mailto:hsini.web@gmail.com" className="hover:text-white transition-colors">hsini.web@gmail.com</a>
                    </div>
                    <p className="mt-6 text-xs text-slate-600">
                        &copy; {new Date().getFullYear()} Doodax Markdown Previewer. All rights reserved.
                    </p>
                </div>
            </footer>
            
            {/* Extended Modal Content for Compliance and "Big Content" */}
            <Modal isOpen={activeModal === ModalId.About} onClose={closeModal} title="About Doodax">
                <p className="lead text-lg">Doodax is a cutting-edge, browser-based Markdown editing environment designed for modern developers and content creators.</p>
                <h3>Our Mission</h3>
                <p>We believe that writing documentation should be as elegant as the code it describes. Doodax was created to bridge the gap between raw text and visual presentation, offering a seamless, distraction-free environment that renders your ideas instantly.</p>
                <h3>Technology Stack</h3>
                <p>Built with performance and privacy in mind, Doodax leverages React 19, TypeScript, and Tailwind CSS. We utilize a client-side rendering engine (Marked.js) to ensure that your data never leaves your browser. Our "Nebula" UI engine provides a calming, immersive backdrop to keep you in the flow state.</p>
            </Modal>

            <Modal isOpen={activeModal === ModalId.Contact} onClose={closeModal} title="Contact Information">
                <p>We value open communication with our users. Whether you have a feature request, a bug report, or a business inquiry, we are here to help.</p>
                <div className="bg-white/5 p-6 rounded-lg my-4 border border-white/10">
                    <p className="mb-2"><strong>Owner & Lead Developer:</strong> HSINI MOHAMED</p>
                    <p className="mb-2"><strong>Official Website:</strong> <a href="https://doodax.com" target="_blank" className="text-indigo-400">doodax.com</a></p>
                    <p className="mb-2"><strong>Support Email:</strong> <a href="mailto:hsini.web@gmail.com" className="text-indigo-400">hsini.web@gmail.com</a></p>
                    <p><strong>GitHub Profile:</strong> <a href="https://github.com/hsinidev" target="_blank" className="text-indigo-400">@hsinidev</a></p>
                </div>
                <p>We aim to respond to all inquiries within 24-48 hours.</p>
            </Modal>

             <Modal isOpen={activeModal === ModalId.Guide} onClose={closeModal} title="User Guide">
                <h3>Getting Started</h3>
                <p>Doodax features a dual-pane interface. The left pane is your editor, and the right pane is your live preview.</p>
                <ul>
                    <li><strong>Writing:</strong> Simply type standard Markdown syntax in the left editor. The preview updates instantly.</li>
                    <li><strong>Clearing:</strong> Use the "Clear" button to remove all text and start fresh.</li>
                    <li><strong>Exporting:</strong> You can copy the generated HTML to your clipboard or download it as an `.html` file.</li>
                    <li><strong>Statistics:</strong> Monitor your word and character count in the footer of the editor.</li>
                </ul>
                <p>Refer to the comprehensive article at the bottom of the home page for a deep dive into Markdown syntax.</p>
            </Modal>

            <Modal isOpen={activeModal === ModalId.Privacy} onClose={closeModal} title="Privacy Policy">
                <p className="text-sm text-gray-400 mb-4">Last Updated: October 27, 2023</p>
                <h3>1. Introduction</h3>
                <p>Welcome to Doodax. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we handle your information when you use our web application.</p>
                <h3>2. Data Collection</h3>
                <p><strong>We do not collect any personal data.</strong> Doodax is a client-side application. The Markdown text you type is processed entirely within your web browser's memory. It is not sent to, stored on, or processed by any external server owned by us.</p>
                <h3>3. Local Storage</h3>
                <p>We may use your browser's local storage to save your preferences or temporary drafts to improve your experience. This data stays on your device.</p>
                <h3>4. Third-Party Services</h3>
                <p>This site is hosted on a public content delivery network (CDN). While the app logic is client-side, the hosting provider may collect standard server logs (IP addresses, user agents) for security and operational purposes.</p>
                <h3>5. Contact Us</h3>
                <p>If you have questions about this policy, please contact us at hsini.web@gmail.com.</p>
            </Modal>

            <Modal isOpen={activeModal === ModalId.Terms} onClose={closeModal} title="Terms of Service">
                <h3>1. Acceptance of Terms</h3>
                <p>By accessing and using Doodax, you accept and agree to be bound by the terms and provision of this agreement.</p>
                <h3>2. Use License</h3>
                <p>Permission is granted to temporarily use this software for personal, non-commercial transitory viewing and writing. This is the grant of a license, not a transfer of title.</p>
                <h3>3. Disclaimer</h3>
                <p>The materials on Doodax's website are provided on an 'as is' basis. Doodax makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.</p>
                <h3>4. Limitations</h3>
                <p>In no event shall Doodax or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the materials on Doodax's website.</p>
            </Modal>

            <Modal isOpen={activeModal === ModalId.DMCA} onClose={closeModal} title="DMCA Compliance">
                <h3>Copyright Infringement Notification</h3>
                <p>Doodax respects the intellectual property rights of others. Our application is a tool for text processing and does not host user content publicly. However, if you believe that any material accessible on or through this service infringes upon any copyright you own or control, please notify us immediately.</p>
                <h3>Filing a DMCA Notice</h3>
                <p>To be effective, the notification must be a written communication that includes the following:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
                    <li>Identification of the copyrighted work claimed to have been infringed.</li>
                    <li>Information reasonably sufficient to permit us to contact the complaining party, such as an address, telephone number, and, if available, an electronic mail address.</li>
                    <li>A statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
                </ul>
                <p className="mt-4">Please send all notices to: <strong>hsini.web@gmail.com</strong></p>
            </Modal>
        </div>
    );
};

export default ThemeLayout;

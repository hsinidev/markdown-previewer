
import React, { ReactNode } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 transition-opacity duration-300"
            onClick={onClose}
        >
            <div 
                className="bg-gray-800 text-gray-200 rounded-lg shadow-2xl w-11/12 md:w-2/3 lg:w-1/2 max-h-[80vh] overflow-y-auto transform transition-transform duration-300 scale-95"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center p-4 border-b border-gray-700 sticky top-0 bg-gray-800">
                    <h2 className="text-2xl font-bold text-white">{title}</h2>
                    <button 
                        onClick={onClose} 
                        className="text-gray-400 hover:text-white text-2xl"
                    >
                        &times;
                    </button>
                </div>
                <div className="p-6 prose prose-dark max-w-none">
                    {children}
                </div>
                 <div className="flex justify-end p-4 border-t border-gray-700 sticky bottom-0 bg-gray-800">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;

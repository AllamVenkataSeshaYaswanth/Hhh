import React from 'react';
import { MoreIcon } from '../components/icons';

const MorePage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-5rem)] p-4 text-center">
             <div className="p-4 rounded-full bg-gray-200 text-gray-600 mb-4">
                <MoreIcon className="w-12 h-12" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">More Options</h1>
            <p className="text-gray-500 mt-2">This section is under construction.</p>
            <p className="text-gray-500">ఈ విభాగం నిర్మాణంలో ఉంది.</p>
        </div>
    );
};

export default MorePage;
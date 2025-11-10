import React, { useState } from 'react';
import type { Tip } from '../types';
import { SearchIcon, PlayCircleIcon } from '../components/icons';

const mockTips: Tip[] = [
    { id: 1, category: 'Irrigation', categoryTelugu: 'నీటిపారుదల', title: 'Drip Irrigation System Setup', titleTelugu: 'డ్రిప్ ఇరిగేషన్ సిస్టమ్ సెటప్', description: 'Learn how to set up an efficient drip irrigation system for your crops. This method can save up to 50% water compared to traditional flooding methods.', imageUrl: 'https://picsum.photos/seed/drip/400/200', views: 1354 },
    { id: 2, category: 'Conservation', categoryTelugu: 'పరిరక్షణ', title: 'Water Conservation Techniques', titleTelugu: 'నీటి సంరక్షణ పద్ధతులు', description: 'Discover effective water conservation methods for sustainable farming. These techniques help preserve water resources while maintaining crop productivity.', imageUrl: 'https://picsum.photos/seed/conserve/400/200', views: 897 },
    { id: 3, category: 'Crop-Specific', categoryTelugu: 'పంట-నిర్దిష్ట', title: 'Rice Crop Water Management', titleTelugu: 'వరి పంట నీటి యాజమాన్యం', description: 'Specialized water management techniques for rice cultivation. Learn about alternate wetting and drying methods to reduce water consumption.', imageUrl: 'https://picsum.photos/seed/rice/400/200', views: 1747 },
    { id: 4, category: 'Seasonal', categoryTelugu: 'సీజనల్', title: 'Monsoon Water Harvesting', titleTelugu: 'వానాకాలంలో నీటి నిల్వ', description: 'Techniques for harvesting and storing rainwater during the monsoon season for later use in dry periods.', imageUrl: 'https://picsum.photos/seed/monsoon/400/200', views: 652 },
    { id: 5, category: 'Soil Care', categoryTelugu: 'నేల సంరక్షణ', title: 'Improving Soil Moisture Retention', titleTelugu: 'నేలలో తేమను నిలుపుకోవడం', description: 'Learn how to improve your soil\'s ability to hold water by adding organic matter and using mulch.', imageUrl: 'https://picsum.photos/seed/soil/400/200', views: 981 },
];

const TipCard: React.FC<{ tip: Tip }> = ({ tip }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            {tip.imageUrl && <img src={tip.imageUrl} alt={tip.title} className="w-full h-32 object-cover" />}
            <div className="p-4 flex flex-col flex-grow">
                <span className="text-xs font-bold text-emerald-700">{tip.category} / {tip.categoryTelugu}</span>
                <h3 className="font-bold mt-1">{tip.title}</h3>
                <h4 className="font-semibold text-gray-600">{tip.titleTelugu}</h4>
                <p className="text-xs text-gray-500 mt-2 flex-grow">{tip.description}</p>
                <div className="mt-4 flex items-center justify-between">
                    <button className="flex items-center space-x-2 text-emerald-600 font-semibold hover:text-emerald-800 transition-colors">
                        <PlayCircleIcon className="w-8 h-8"/>
                        <span className="text-sm">Audio Guide</span>
                    </button>
                    <span className="text-xs text-gray-400">{tip.views.toLocaleString()} views</span>
                </div>
            </div>
        </div>
    );
};

const TipsPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('All Tips');
    const filters = ['All Tips', 'Irrigation', 'Crop-Specific', 'Seasonal', 'Conservation', 'Soil Care'];

    const filteredTips = activeFilter === 'All Tips' 
        ? mockTips 
        : mockTips.filter(tip => tip.category === activeFilter);

    return (
        <div className="p-4">
            <header className="flex items-center mb-4">
                <img src="https://picsum.photos/seed/logo/40/40" alt="JalSathi Logo" className="w-10 h-10 rounded-full" />
                <div className="ml-3">
                    <h1 className="text-xl font-bold">JalSathi Tips</h1>
                    <p className="text-sm text-gray-500">Water Management / నీటి యాజమాన్యం</p>
                </div>
            </header>

            <div className="relative mb-4">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="text" placeholder="Search water management tips..." className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" />
            </div>

            <div className="mb-4">
                <div className="flex space-x-2 overflow-x-auto pb-2 -mx-4 px-4">
                    {filters.map(filter => (
                        <button 
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 py-2 text-sm font-semibold rounded-full whitespace-nowrap transition-colors ${
                                activeFilter === filter 
                                ? 'bg-emerald-600 text-white' 
                                : 'bg-white text-gray-700 border border-gray-200'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredTips.map(tip => (
                    <TipCard key={tip.id} tip={tip} />
                ))}
            </div>
        </div>
    );
};

export default TipsPage;
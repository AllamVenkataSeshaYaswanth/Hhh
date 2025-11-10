import React from 'react';
import { AudioLibraryIcon } from '../components/icons';

const AudioLibraryPage: React.FC = () => {
    const usedMB = 30.4;
    const totalMB = 500.0;
    const usedPercentage = (usedMB / totalMB) * 100;

    return (
        <div className="p-4">
            <header className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-amber-100 text-amber-600">
                    <AudioLibraryIcon className="w-8 h-8" />
                </div>
                <div className="ml-4">
                    <h1 className="text-2xl font-bold">Audio Library</h1>
                    <p className="text-lg text-gray-600">ఆడియో లైబ్రరీ</p>
                </div>
            </header>
            
            <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <h2 className="font-bold">Filters / ఫిల్టర్లు</h2>
                    <input type="text" placeholder="Search audio content..." className="mt-2 w-full p-2 border border-gray-300 rounded-md" />
                    <p className="text-xs text-gray-500 mt-2">Showing 5 of 5 audio files.</p>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <h2 className="font-bold">Storage / నిల్వ</h2>
                    <div className="mt-3">
                        <div className="flex justify-between text-xs font-semibold text-gray-600">
                            <span>Audio Storage</span>
                            <span>{usedMB} MB / {totalMB} MB</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                            <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: `${usedPercentage}%` }}></div>
                        </div>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                        <div>
                            <p className="text-xl font-bold">5</p>
                            <p className="text-xs text-gray-500">Downloaded</p>
                        </div>
                        <div>
                            <p className="text-xl font-bold">{totalMB - usedMB} MB</p>
                            <p className="text-xs text-gray-500">Available</p>
                        </div>
                        <div>
                            <p className="text-xl font-bold">{Math.round(usedPercentage)}%</p>
                            <p className="text-xs text-gray-500">Used</p>
                        </div>
                    </div>
                </div>

                <div className="text-center py-8 text-gray-500">
                    <p>Audio content list coming soon...</p>
                </div>
            </div>
        </div>
    );
};

export default AudioLibraryPage;
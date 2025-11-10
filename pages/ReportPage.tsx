import React, { useState } from 'react';
import { ReportProblemIcon } from '../components/icons';

const ReportPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('new');

    return (
        <div className="p-4">
            <header className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-orange-100 text-orange-600">
                    <ReportProblemIcon className="w-8 h-8" />
                </div>
                <div className="ml-4">
                    <h1 className="text-2xl font-bold">Problem Reporting</h1>
                    <p className="text-lg text-gray-600">సమస్య నివేదన</p>
                </div>
            </header>

            <div className="grid grid-cols-3 gap-2 p-1 bg-gray-200 rounded-lg mb-6">
                <button onClick={() => setActiveTab('new')} className={`px-4 py-2 text-sm font-semibold rounded-md ${activeTab === 'new' ? 'bg-white shadow' : 'text-gray-600'}`}>
                    New Report
                </button>
                <button onClick={() => setActiveTab('history')} className={`px-4 py-2 text-sm font-semibold rounded-md ${activeTab === 'history' ? 'bg-white shadow' : 'text-gray-600'}`}>
                    History (0)
                </button>
                <button onClick={() => setActiveTab('queue')} className={`px-4 py-2 text-sm font-semibold rounded-md ${activeTab === 'queue' ? 'bg-white shadow' : 'text-gray-600'}`}>
                    Queue (0)
                </button>
            </div>

            {activeTab === 'new' && (
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-lg font-bold mb-1">Submit New Problem Report</h2>
                    <p className="text-xs text-gray-500 mb-4">Fill out the form below to report a water management issue. Include photos and location details for faster resolution.</p>
                    <form className="space-y-4">
                        <div>
                            <label className="text-sm font-semibold text-gray-700">Problem Title <span className="text-red-500">*</span></label>
                            <input type="text" placeholder="Brief description of the issue" className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500" />
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-700">Problem Title (Telugu)</label>
                            <input type="text" placeholder="సమస్య యొక్క సంక్షిప్త వివరణ" className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500" />
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-700">Description</label>
                            <textarea placeholder="Provide more details about the problem" rows={4} className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"></textarea>
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-700">Upload Photo</label>
                            <input type="file" className="mt-1 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100" />
                        </div>
                         <button type="submit" className="w-full bg-emerald-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors">
                            Submit Report
                        </button>
                    </form>
                </div>
            )}
             {activeTab !== 'new' && (
                <div className="text-center py-12 text-gray-500">
                    <p>No items to display in this section yet.</p>
                </div>
            )}
        </div>
    );
};

export default ReportPage;
import React from 'react';
import { SchemesIcon } from '../components/icons';

const StatCard: React.FC<{ value: string; label: string; labelTelugu: string }> = ({ value, label, labelTelugu }) => (
    <div className="bg-white p-3 rounded-lg text-center border border-gray-100">
        <p className="text-2xl font-bold text-emerald-600">{value}</p>
        <p className="text-sm font-semibold text-gray-700">{label}</p>
        <p className="text-xs text-gray-500">{labelTelugu}</p>
    </div>
);

const SchemesPage: React.FC = () => {
    return (
        <div className="p-4">
            <header className="flex items-center mb-4">
                 <div className="p-3 rounded-full bg-emerald-100 text-emerald-600">
                    <SchemesIcon className="w-8 h-8" />
                 </div>
                <div className="ml-4">
                    <h1 className="text-2xl font-bold">Government Schemes</h1>
                    <p className="text-lg text-gray-600">ప్రభుత్వ పథకాలు</p>
                </div>
            </header>
            
            <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 mb-6">
                <p className="text-sm text-gray-600">
                    Discover agricultural support programs and financial assistance available for Telugu farmers.
                </p>
                <p className="text-sm text-gray-500 mt-1">
                    తెలుగు రైతుల కోసం అందుబాటులో ఉన్న వ్యవసాయ సహాయక కార్యక్రమాలు మరియు ఆర్థిక సహాయాన్ని కనుగొనండి.
                </p>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <StatCard value="24" label="Total Schemes" labelTelugu="మొత్తం పథకాలు" />
                    <StatCard value="18" label="Active" labelTelugu="క్రియాశీలం" />
                    <StatCard value="₹50L" label="Total Benefits" labelTelugu="మొత్తం ప్రయోజనాలు" />
                    <StatCard value="2.5K" label="Beneficiaries" labelTelugu="లబ్ధిదారులు" />
                </div>
            </div>

            <div className="mb-4">
                <h2 className="font-bold text-lg">Filter Schemes / పథకాలను ఫిల్టర్ చేయండి</h2>
            </div>
            <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm border text-center text-gray-500">
                    <p>Scheme list coming soon...</p>
                    <p>పథకాల జాబితా త్వరలో వస్తుంది...</p>
                </div>
                 <div className="p-4 bg-white rounded-lg shadow-sm border text-center text-gray-500">
                    <p>Scheme list coming soon...</p>
                    <p>పథకాల జాబితా త్వరలో వస్తుంది...</p>
                </div>
            </div>

             <div className="fixed bottom-24 right-4 bg-emerald-600 text-white p-4 rounded-lg shadow-lg animate-pulse">
                <p className="font-bold text-sm">Schemes Updated!</p>
                <p className="text-xs">Latest government schemes have been loaded.</p>
            </div>
        </div>
    );
};

export default SchemesPage;
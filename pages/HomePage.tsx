import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TipsIcon, SchemesIcon, ReportProblemIcon, AudioLibraryIcon, ChevronRightIcon,
  WeatherAlertIcon, SetReminderIcon, EmergencyHelpIcon, DownloadTipsIcon, SunIcon
} from '../components/icons';

const Header: React.FC = () => (
  <div className="p-4 sm:p-6">
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Welcome to JalSathi</h1>
        <p className="text-sm text-gray-500">స్వాగతం జల్సతి కి - మీ నీటిపారుదల సహాయకుడు</p>
      </div>
      <div className="text-right">
        <p className="font-semibold text-sm">Saturday, 1 November</p>
        <p className="text-xs text-gray-500">శనివారం, 1 నవంబర్</p>
      </div>
    </div>
  </div>
);

const WeatherWidget: React.FC = () => (
  <div className="mx-4 sm:mx-6 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-xs font-semibold text-orange-500">WEATHER</p>
        <p className="text-lg font-bold text-gray-800">Hyderabad</p>
        <p className="text-xs text-gray-500">హైదరాబాద్</p>
      </div>
      <div className="flex items-start space-x-2">
         <SunIcon className="w-8 h-8 text-yellow-500 mt-1" />
         <div>
            <p className="text-4xl font-bold text-orange-500">28°C</p>
            <p className="text-sm text-gray-600 -mt-1">Partly Cloudy</p>
         </div>
      </div>
    </div>
    <div className="mt-4 flex justify-between text-sm text-center">
      <div>
        <p className="font-semibold">31%</p>
        <p className="text-xs text-gray-500">Rain Chance</p>
      </div>
      <div>
        <p className="font-semibold">49%</p>
        <p className="text-xs text-gray-500">Humidity</p>
      </div>
      <div>
        <p className="font-semibold">12 km/h</p>
        <p className="text-xs text-gray-500">Wind</p>
      </div>
    </div>
  </div>
);

const QuickActions: React.FC = () => {
    const actions = [
        { label: "Weather Alert", labelTelugu: "వాతావరణ హెచ్చరిక", icon: <WeatherAlertIcon className="w-6 h-6 text-emerald-600" />, onClick: () => alert("No weather alerts for your area today.\n\nఈ రోజు మీ ప్రాంతంలో వాతావరణ హెచ్చరికలు లేవు.") },
        { label: "Set Reminder", labelTelugu: "రిమైండర్ సెట్", icon: <SetReminderIcon className="w-6 h-6 text-emerald-600" />, onClick: () => alert("Irrigation reminder set for 8 AM tomorrow.\n\nరేపు ఉదయం 8 గంటలకు నీటిపారుదల రిమైండర్ సెట్ చేయబడింది.") },
        { label: "Emergency Help", labelTelugu: "అత్యవసర సహాయం", icon: <EmergencyHelpIcon className="w-6 h-6 text-emerald-600" />, onClick: () => alert("Agricultural Helpline: 1800-180-1551\n\nవ్యవసాయ హెల్ప్‌లైన్: 1800-180-1551") },
        { label: "Download Tips", labelTelugu: "చిట్కాలను డౌన్లోడ్", icon: <DownloadTipsIcon className="w-6 h-6 text-emerald-600" />, onClick: () => alert("Latest tips downloaded for offline access.\n\nఆఫ్‌లైన్ యాక్సెస్ కోసం తాజా చిట్కాలు డౌన్‌లోడ్ చేయబడ్డాయి.") },
    ];

    return (
        <div className="p-4 sm:p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Quick Actions</h2>
                <h2 className="text-lg font-bold text-gray-500">త్వరిత చర్యలు</h2>
            </div>
            <div className="grid grid-cols-4 gap-3 sm:gap-4">
                {actions.map(action => (
                    <button key={action.label} onClick={action.onClick} className="flex flex-col items-center justify-center p-3 bg-white rounded-xl shadow-sm border border-gray-100 hover:bg-emerald-50 transition-colors text-center">
                        {action.icon}
                        <span className="text-xs font-semibold mt-2 text-gray-700">{action.label}</span>
                        <span className="text-xs text-gray-500">{action.labelTelugu}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};


const FeatureCards: React.FC = () => {
    const features = [
        { to: "/tips", title: "Water Management Tips", titleTelugu: "నీటి యాజమాన్య చిట్కాలు", description: "Learn irrigation techniques and water conservation methods.", icon: <TipsIcon className="w-7 h-7" />, color: "text-emerald-600", tag: "10+ Tips" },
        { to: "/schemes", title: "Government Schemes", titleTelugu: "ప్రభుత్వ పథకాలు", description: "Explore agricultural subsidies and support programs.", icon: <SchemesIcon className="w-7 h-7" />, color: "text-blue-600", tag: "5+ Schemes" },
        { to: "/report", title: "Report Problem", titleTelugu: "సమస్యను నివేదించండి", description: "Report water-related issues in your field.", icon: <ReportProblemIcon className="w-7 h-7" />, color: "text-orange-500", tag: "Quick Report" },
        { to: "/audio-library", title: "Audio Library", titleTelugu: "ఆడియో లైబ్రరీ", description: "Listen to agricultural guidance in Telugu.", icon: <AudioLibraryIcon className="w-7 h-7" />, color: "text-amber-500", tag: "5+ Audio" },
    ];

    return (
        <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map(feature => (
                <Link to={feature.to} key={feature.title} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start">
                           <div className={`p-2 rounded-full ${feature.color} bg-opacity-10 ${feature.color.replace('text-', 'bg-')}`}>{feature.icon}</div>
                           <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                        </div>
                        <h3 className="text-md font-bold mt-3">{feature.title}</h3>
                        <h4 className="text-md font-semibold text-gray-600">{feature.titleTelugu}</h4>
                        <p className="text-xs text-gray-500 mt-1">{feature.description}</p>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                       <span className={`text-xs font-semibold px-2 py-1 rounded-full ${feature.color} bg-opacity-10 ${feature.color.replace('text-', 'bg-')}`}>{feature.tag}</span>
                       <span className="text-xs font-semibold text-gray-400">Tap to explore ></span>
                    </div>
                </Link>
            ))}
        </div>
    );
};

const PwaInfoFooter: React.FC = () => (
    <div className="text-center p-6 mt-4 border-t border-gray-200">
        <h3 className="font-bold text-gray-800">JalSathi PWA</h3>
        <p className="text-xs text-gray-500 mt-2 max-w-md mx-auto">
            Designed for Telugu farmers with offline capabilities, audio guidance, and weather-aware irrigation suggestions. Works without internet connection using cached content.
        </p>
         <div className="mt-4 flex justify-center space-x-4">
            <div className="text-center">
                <span className="text-xs font-bold text-emerald-600">Online</span>
                <p className="text-xs text-gray-500">ఆన్లైన్</p>
            </div>
            <div className="text-center">
                <span className="text-xs font-bold text-emerald-600">PWA Ready</span>
                <p className="text-xs text-gray-500">PWA సిద్ధంగా ఉంది</p>
            </div>
            <div className="text-center">
                <span className="text-xs font-bold text-emerald-600">Audio Enabled</span>
                <p className="text-xs text-gray-500">ఆడియో ప్రారంభించబడింది</p>
            </div>
        </div>
    </div>
);

const HomePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Header />
      <WeatherWidget />
      <QuickActions />
      <FeatureCards />
      <PwaInfoFooter />
    </div>
  );
};

export default HomePage;
import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, TipsIcon, SchemesIcon, ReportIcon, MoreIcon } from './icons';

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  labelTelugu: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label, labelTelugu }) => {
  const activeClass = "text-emerald-600";
  const inactiveClass = "text-gray-500";

  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => `flex flex-col items-center justify-center space-y-1 ${isActive ? activeClass : inactiveClass}`}
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
      <span className="text-xs font-medium">{labelTelugu}</span>
    </NavLink>
  );
};

const BottomNav: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-50">
      <nav className="flex justify-around items-center h-20 px-2">
        <NavItem to="/" icon={<HomeIcon className="w-6 h-6" />} label="Home" labelTelugu="హోమ్" />
        <NavItem to="/tips" icon={<TipsIcon className="w-6 h-6" />} label="Tips" labelTelugu="చిట్కాలు" />
        <NavItem to="/schemes" icon={<SchemesIcon className="w-6 h-6" />} label="Schemes" labelTelugu="పథకాలు" />
        <NavItem to="/report" icon={<ReportIcon className="w-6 h-6" />} label="Report" labelTelugu="నివేదిక" />
        <NavItem to="/more" icon={<MoreIcon className="w-6 h-6" />} label="More" labelTelugu="మరిన్ని" />
      </nav>
    </footer>
  );
};

export default BottomNav;
import { FaCog, FaHome } from 'react-icons/fa';
import SidebarIcon from './SidebarIcon';
import SidebarProps from '@interfaces/SidebarProps';

export default function Sidebar({currentView, clickCallback}: SidebarProps) {
    return (
        <div className="sidebar-container">
            <SidebarIcon icon={<FaHome size="28" />} target='front' currentView={currentView} clickCallback={clickCallback} />
            <SidebarIcon icon={<FaCog size="28" />} target='settings' currentView={currentView} clickCallback={clickCallback} />
        </div>
    )
}

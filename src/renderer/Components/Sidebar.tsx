import { FaCog } from 'react-icons/fa';
import { BsArrowLeft } from 'react-icons/bs';
import SidebarIcon from './SidebarIcon';
import SidebarProps from '@interfaces/SidebarProps';

export default function Sidebar({currentView, clickCallback}: SidebarProps) {
    return (
        <div className="sidebar-container">
            {
                currentView == 'front' ?
                <SidebarIcon icon={<FaCog size="28" />} target='settings' currentView={currentView} clickCallback={clickCallback} /> :
                <SidebarIcon icon={<BsArrowLeft size="28" />} target='front' currentView={currentView} clickCallback={clickCallback} />
            }
        </div>
    )
}

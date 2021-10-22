import { FaFire } from 'react-icons/fa'

export default function Sidebar() {
    return (
        <div className="sidebar-container">
            <SidebarIcon icon={<FaFire size="28" />} tooltip="Ta-da 🎉" />
        </div>
    )
}

interface SidebarIconProps {
    icon: React.ReactElement;
    tooltip?: string;
}

function SidebarIcon({icon, tooltip = 'Tooltip'}: SidebarIconProps) {
    return (
        <button className='sidebar-icon group'>
            {icon}

            <span className='sidebar-tooltip group-hover:scale-100'>
                {tooltip}
            </span>
        </button>
    )
}

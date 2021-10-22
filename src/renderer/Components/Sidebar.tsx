import { FaFire } from 'react-icons/fa'
import React from 'react'

interface SidebarProps {
    clickState: boolean;
    clickCallback: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({clickState, clickCallback}: SidebarProps) {
    return (
        <div className="sidebar-container">
            <SidebarIcon icon={<FaFire size="28" />} tooltip="Ta-da 🎉" clickState={clickState} clickCallback={clickCallback} />
        </div>
    )
}

interface SidebarIconProps {
    icon: React.ReactElement;
    clickState: boolean;
    clickCallback: React.Dispatch<React.SetStateAction<boolean>>;
    tooltip?: string;
}

function SidebarIcon({icon, clickState, clickCallback, tooltip = 'Tooltip'}: SidebarIconProps) {
    return (
        <button className='sidebar-icon group'onClick={() => clickCallback(!clickState)}>
            {icon}

            <span className='sidebar-tooltip group-hover:scale-100'>
                {tooltip}
            </span>
        </button>
    )
}

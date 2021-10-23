import SidebarIconProps from '@interfaces/SidebarIconProps';

function SidebarIcon({icon, target, currentView, clickCallback}: SidebarIconProps) {
    return (
        <button className={'sidebar-icon group'.concat(currentView == target ? ' sidebar-icon-active' : '')} onClick={() => clickCallback(target)}>
            {icon}
        </button>
    )
}

export default SidebarIcon;
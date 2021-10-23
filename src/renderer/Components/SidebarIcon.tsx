import SidebarIconProps from '@interfaces/SidebarIconProps';

function SidebarIcon({icon, target, currentView, clickCallback}: SidebarIconProps) {
    return (
        <div className={'sidebar-icon group'.concat(currentView == target ? ' sidebar-icon-active' : '')} onClick={() => clickCallback(target)}>
            {icon}
        </div>
    )
}

export default SidebarIcon;
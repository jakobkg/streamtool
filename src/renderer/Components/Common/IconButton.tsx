import IconButtonProps from '@interfaces/IconButtonProps';

function IconButton({icon, target, currentView, clickCallback}: IconButtonProps) {
    return (
        <div className={'icon-button group'.concat(currentView == target ? ' sidebar-icon-active' : '')} onClick={() => clickCallback(target)}>
            {icon}
        </div>
    )
}

export default IconButton;
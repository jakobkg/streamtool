import IconButtonProps from '@interfaces/IconButtonProps';

function IconButton({icon, target, currentView, clickCallback}: IconButtonProps) {
    return (
        <div className={'icon-button group'.concat(currentView == target ? ' icon-button-active' : '')} onClick={() => clickCallback(target)}>
            {icon}
        </div>
    )
}

export default IconButton;
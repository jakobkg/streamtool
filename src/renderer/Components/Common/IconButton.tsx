interface IconButtonProps {
    icon: React.ReactElement;
    currentView: string;
    clickCallback: React.Dispatch<React.SetStateAction<string>>;
    target: string;
    tooltip?: string;
}

function IconButton({icon, target, currentView, clickCallback, tooltip}: IconButtonProps) {

    const TooltipElement = ({tooltip}: {tooltip?: string | undefined}) => {
        if (tooltip) {
            return (
                <span className='icon-button-tooltip group-hover:scale-100'>
                    {tooltip}
                </span>
            )
        } else {
            return <></>
        }
    }

    return (
        <div className={'icon-button group'.concat(currentView == target ? ' icon-button-active' : '')} onClick={() => clickCallback(target)}>
            {icon}
            <TooltipElement tooltip={tooltip} />
        </div>
    )
}

export default IconButton;
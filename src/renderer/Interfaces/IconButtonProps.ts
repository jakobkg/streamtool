export default interface IconButtonProps {
    icon: React.ReactElement;
    currentView: string;
    clickCallback: React.Dispatch<React.SetStateAction<string>>;
    target: string;
    tooltip?: string;
}

import { BsWindowSidebar } from "react-icons/bs";
import { SiObsstudio } from 'react-icons/si';
import { IconButton } from "../Common/IconButton";

interface SidebarProps {
    page: string;
    setPageCallback: React.Dispatch<React.SetStateAction<string>>;
}

export function Sidebar({ page, setPageCallback }: SidebarProps): JSX.Element {
    return (
        <div className="sidebar-container">
            <IconButton icon={<BsWindowSidebar size='28' />} currentView={page} target='ui' clickCallback={setPageCallback} tooltip='Interface' />
            <IconButton icon={<SiObsstudio size='28' />} currentView={page} target='obs' clickCallback={setPageCallback} tooltip='OBS' />
        </div>
    );
}
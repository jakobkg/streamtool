import { BsWindowSidebar } from "react-icons/bs";
import { SiObsstudio } from 'react-icons/si'
import IconButton from "../Common/IconButton";

interface SidebarProps {
    page: string;
    setPageCallback: React.Dispatch<React.SetStateAction<string>>;
}

const Sidebar = ({page, setPageCallback}: SidebarProps) => {
    return (
        <div className="sidebar-container">
            <IconButton icon={<BsWindowSidebar size='28' />} currentView={page} target='ui' clickCallback={setPageCallback} />
            <IconButton icon={<SiObsstudio size='28' />} currentView={page} target='obs' clickCallback={setPageCallback} />
        </div>
    );
};

export default Sidebar;
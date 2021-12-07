import { appState } from "@/renderer/App";

import { BsArrowLeft, BsWindowSidebar } from "react-icons/bs";
import { SiObsstudio } from "react-icons/si";
import { IconButton } from "../Common/IconButton";

export function Sidebar(): JSX.Element {
    return (
        <div className="sidebar-container">
            <IconButton icon={<BsArrowLeft size="28" />} currentView={appState.view} target="scoreboard" clickCallback={appState.setView} />
            <IconButton icon={<BsWindowSidebar size="28" />} currentView={appState.settingsPage} target="ui" clickCallback={appState.setSettingsPage} tooltip="Interface" />
            <IconButton icon={<SiObsstudio size="28" />} currentView={appState.settingsPage} target="obs" clickCallback={appState.setSettingsPage} tooltip="OBS" />
        </div>
    );
}
import { appState } from "@/renderer/App";
import { AppConfig } from "@interfaces/AppConfig";
import { OBSSettingsPage } from "./OBSSettingsPage";
import { Sidebar } from "./Sidebar";
import { UISettingsPage } from "./UISettingsPage";

interface SettingsViewProps {
    appConfig: AppConfig;
}

export function SettingsView({ appConfig }: SettingsViewProps): JSX.Element {
    switch (appState.settingsPage) {
        case "ui":
            return (
                <div className="appview-container">
                    <UISettingsPage config={appConfig} />
                    <Sidebar />
                </div>
            );
    
        case "obs":
            return (
                <div className="appview-container overflow-y-scroll">
                    <OBSSettingsPage config={appConfig} />
                    <Sidebar />
                </div>
            );

        default:
            return <></>;
    }
}
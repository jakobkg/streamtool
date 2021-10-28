import { settingsState } from "@/renderer/App";
import { AppConfig } from "@interfaces/AppConfig";
import { DynamicSettingsPage } from "./DynamicSettingsPage";
import { Sidebar } from "./Sidebar";

interface SettingsViewProps {
    appConfig: AppConfig;
}

export function SettingsView({ appConfig }: SettingsViewProps): JSX.Element {
    return (
        <div className="appview-container">
            <DynamicSettingsPage page={settingsState.page} config={appConfig} />
            <Sidebar page={settingsState.page} setPageCallback={settingsState.setPage} />
        </div>
    );
}
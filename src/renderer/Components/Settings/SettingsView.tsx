import React from "react";
import AppConfig from '@interfaces/AppConfig';
import DynamicSettingsPage from "./DynamicSettingsPage";
import Sidebar from './Sidebar';

interface SettingsViewProps {
    appConfig: AppConfig;
}

const SettingsView = ({appConfig}: SettingsViewProps) => {
    const [page, setPage] = React.useState('obs');

    return (
        <div className='appview-container'>
            <DynamicSettingsPage page={page} config={appConfig} />
            <Sidebar page={page} setPageCallback={setPage} />
        </div>
    )
};

export default SettingsView;
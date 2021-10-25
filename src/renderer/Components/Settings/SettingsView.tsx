import React from "react";
import AppState from '@interfaces/AppState';
import DynamicSettingsPage from "./DynamicSettingsPage";
import Sidebar from './Sidebar';

interface SettingsViewProps {
    appConfig: AppState;
}

const SettingsView = ({appConfig}: SettingsViewProps) => {
    const [page, setPage] = React.useState('ui');

    return (
        <div className='appview-container'>
            <Sidebar page={page} setPageCallback={setPage} />
            <DynamicSettingsPage page={page} config={appConfig} />
        </div>
    )
};

export default SettingsView;
import React from "react";
import AppState from '@interfaces/AppState';
import BooleanSetting from './BooleanSetting';

interface SettingsViewProps {
    appState: AppState;
}

const SettingsView = ({appState}: SettingsViewProps) => {
    return (
        <div className='appview-container'>
            <BooleanSetting name='Dark mode' value={appState.darkmode} setValueCallback={appState.setDarkmode} />
        </div>
    )
};

export default SettingsView;
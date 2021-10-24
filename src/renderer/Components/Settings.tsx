import React from "react";
import Toggle from './Toggle';

interface SettingsProps {
    state: boolean;
    setStateCallback: React.Dispatch<React.SetStateAction<boolean>>;
}

const Settings = ({state, setStateCallback}: SettingsProps) => {
    return (
        <div className='appview-container text-4xl font-bold'>
            Settings
            <div className='flex flex-row gap-5 text-2xl'>
                Dark mode
                <Toggle state={state} setStateCallback={setStateCallback} />
            </div>
        </div>
    )
};

export default Settings;
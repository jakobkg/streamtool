import React from "react";
import Toggle from '../Common/Toggle';

interface BooleanSettingProps {
    name: string;
    value: boolean;
    setValueCallback: React.Dispatch<React.SetStateAction<boolean>>;
}

const BooleanSetting = ({name, value, setValueCallback}: BooleanSettingProps) => {
    return (
        <div className={'settings-entry'} >
            {name}:
            <Toggle value={value} setValueCallback={setValueCallback} />
        </div>
    )
}

export default BooleanSetting;
import { Toggle } from '../Common/Toggle';

interface BooleanSettingProps {
    name: string;
    value: boolean;
    setValueCallback: React.Dispatch<React.SetStateAction<boolean>>;
}

export function BooleanSetting({ name, value, setValueCallback }: BooleanSettingProps): JSX.Element {
    return (
        <div className={'settings-entry'} >
            {name}:
            <Toggle value={value} setValueCallback={setValueCallback} />
        </div>
    );
}
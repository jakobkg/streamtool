interface PathSettingProps {
    name: string;
    value: string;
    setValueCallback: React.Dispatch<React.SetStateAction<string>>;
}

export function PathSetting({name, value, setValueCallback}: PathSettingProps): JSX.Element {
    return (
        <div className={'settings-entry'} >
            {name}: <div className='font-normal'>{value.length == 0 ? 'None' : value}</div>
            <div className='button' onClick={async () => {
                    const result = await window.electron.openDirSelectDialog();
                    if (result.length > 0) {
                        setValueCallback(result[0]);
                    }
                }}>Select directory</div>
        </div>
    );
}
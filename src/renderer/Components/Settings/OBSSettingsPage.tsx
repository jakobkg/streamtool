import AppState from "@interfaces/AppState";

interface OBSSettingsPageProps {
    config: AppState;
}

const OBSSettingsPage = ({ config }: OBSSettingsPageProps) => {
    return (
        <div className='settings-page'>
            <h1>OBS</h1>
            <hr />
            <div className='w-full grid grid-cols-3 grid-rows-2 gap-4 pt-3'>
            </div>
        </div>
    )
}

export default OBSSettingsPage;
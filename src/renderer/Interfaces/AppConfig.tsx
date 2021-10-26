export default interface AppConfig {
    ui: {
        darkmode: boolean;
        setDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
    };
    obs: {
        outputDir: string;
        setOutputDir: React.Dispatch<React.SetStateAction<string>>
    }
}
export default interface AppConfig {
    ui: {
        darkmode: boolean;
        setDarkmode: (value: boolean) => void;
    };
    obs: {
        outputDir: string;
        setOutputDir: (value: string) => void;
    }
}
export interface AppConfig {
    ui: {
        darkmode: boolean;
        setDarkmode: (value: boolean) => void;
    };
    obs: {
        outputDir: string;
        setOutputDir: (value: string) => void;
        liveUpdate: boolean;
        setLiveUpdate: (value: boolean) => void;
    }
}
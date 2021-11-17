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
        websocket: {
            address: string;
            setAddress: (value: string) => void;
            port: string;
            setPort: (value: string) => void;
            password: string;
            setPassword: (value: string) => void;
            scenes: string[];
            setScenes: (value: string[]) => void;
        }
    }
}
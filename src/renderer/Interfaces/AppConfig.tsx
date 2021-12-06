export interface AppConfig {
    ui: {
        darkmode: boolean;
        setDarkmode: (value: boolean) => void;
    };
    obs: {
        outputDir: string;
        setOutputDir: (value: string) => void;
        legacyMode: boolean;
        setLegacyMode: (value: boolean) => void;
        websocket: {
            address: string;
            setAddress: (value: string) => void;
            port: string;
            setPort: (value: string) => void;
            password: string;
            setPassword: (value: string) => void;
            scenes: string[];
            setScenes: (value: string[]) => void;
            sourceNames: {
                p1Tag: string;
                p2Tag: string;

                p1Team: string;
                p2Team: string;

                p1Score: string;
                p2Score: string;

                round: string;
            }
        }
    }
}
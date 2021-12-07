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
            scenelist: string[];
            setScenelist: (value: string[]) => void;
            sourceNames: {
                p1Tag: string;
                setP1Tag: (value: string) => void;

                p2Tag: string;
                setP2Tag: (value: string) => void;

                p1Team: string;
                setP1Team: (value: string) => void;

                p2Team: string;
                setP2Team: (value: string) => void;

                p1Score: string;
                setP1Score: (value: string) => void;

                p2Score: string;
                setP2Score: (value: string) => void;

                round: string;
                setRound: (value: string) => void;
            }
        }
    }
}
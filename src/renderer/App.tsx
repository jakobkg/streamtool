import React, { useEffect, useState } from "react";

import { configCallbackBuilder } from "./Functions/configCallbackBuilder";

import { MatchState } from "@interfaces/MatchState";
import { AppConfig } from "@interfaces/AppConfig";
import { ScoreboardView } from "./Components/Scoreboard/ScoreboardView";
import { SettingsView } from "./Components/Settings/SettingsView";
import { ButtonModule } from "./Components/Common/ButtonModule";

export let appConfig: AppConfig;
export let matchState: MatchState;
export let appState: {
    settingsPage: string,
    setSettingsPage: React.Dispatch<React.SetStateAction<string>>,
    view: string,
    setView: React.Dispatch<React.SetStateAction<string>>,
};

export function App(): JSX.Element {
    const [darkmode, setDarkmode] = useState(true);
    
    const [outputDir, setOutputDir] = useState("");

    const [legacyMode, setLegacyMode] = useState(false);

    const [WSAddress, setWSAddress] = useState("localhost");
    const [WSPort, setWSPort] = useState("4444");
    const [WSPassword, setWSPassword] = useState("");

    const [scenelist, setScenelist] = useState([]);

    const [p1TagSource, setP1TagSource] = useState("");
    const [p1TeamSource, setP1TeamSource] = useState("");
    const [p1ScoreSource, setP1ScoreSource] = useState("");

    const [p2TagSource, setP2TagSource] = useState("");
    const [p2TeamSource, setP2TeamSource] = useState("");
    const [p2ScoreSource, setP2ScoreSource] = useState("");

    const [roundSource, setRoundSource] = useState("");

    useEffect(() => {
        window.store.get("ui.darkmode", true).then((value: boolean) => {
            setDarkmode(value);
        }).catch(() => { return; });
    }, []);

    useEffect(() => {
        window.electron.getHomeDir().then((homedir)=> {
            window.store.get("obs.outputDir", homedir.concat("/scoreboard")).then((value: string) => {
            setOutputDir(value);
            }).catch(() => { return; });
        }).catch(() => {
            alert("Unable to find home directory, please set this in the settings.");
        });
    });

    useEffect(() => {
        window.store.get("obs.liveUpdate").then((value: boolean) => {
            setLegacyMode(value);
        }).catch(() => { return; });
    }, []);

    appConfig = {
        ui: {
            darkmode: darkmode,
            setDarkmode: configCallbackBuilder(setDarkmode, "ui.darkmode"),
        },
        obs: {
            outputDir: outputDir,
            setOutputDir: configCallbackBuilder(setOutputDir, "obs.outputDir"),

            legacyMode: legacyMode,
            setLegacyMode: configCallbackBuilder(setLegacyMode, "obs.liveUpdate"),

            websocket: {
                address: WSAddress,
                setAddress: configCallbackBuilder(setWSAddress, "obs.websocket.address"),
                port: WSPort,
                setPort: configCallbackBuilder(setWSPort, "obs.websocket.port"),
                password: WSPassword,
                setPassword: configCallbackBuilder(setWSPassword, "obs.websocket.password"),

                scenelist: scenelist,
                setScenelist: configCallbackBuilder(setScenelist, "obs.websocket.scenes"),

                sourceNames: {
                    p1Tag: p1TagSource,
                    setP1Tag: configCallbackBuilder(setP1TagSource, "obs.websocket.sourceName.p1Tag"),

                    p2Tag: p2TagSource,
                    setP2Tag: configCallbackBuilder(setP1TagSource, "obs.websocket.sourceName.p2Tag"),

                    p1Team: p1TeamSource,
                    setP1Team: configCallbackBuilder(setP1TagSource, "obs.websocket.sourceName.p1Team"),

                    p2Team: p2TeamSource,
                    setP2Team: configCallbackBuilder(setP1TagSource, "obs.websocket.sourceName.p2Team"),

                    p1Score: p1ScoreSource,
                    setP1Score: configCallbackBuilder(setP1TagSource, "obs.websocket.sourceName.p1Score"),

                    p2Score: p2ScoreSource,
                    setP2Score: configCallbackBuilder(setP1TagSource, "obs.websocket.sourceName.p2Score"),

                    round: roundSource,
                    setRound: configCallbackBuilder(setP1TagSource, "obs.websocket.sourceName.round"),
                },
            }
        }
    };

    const [view, setView] = useState("scoreboard");
    
    const [p1Team, setP1Team] = useState("");
    const [p1Tag, setP1Tag] = useState("");
    const [p1Score, setP1Score] = useState(0);

    const [p2Team, setP2Team] = useState("");
    const [p2Tag, setP2Tag] = useState("");
    const [p2Score, setP2Score] = useState(0);

    const [matchLength, setMatchLength] = useState(3);
    const [round, setRound] = useState("");

    matchState = {
        teams: [p1Team, p2Team],
        setTeams: [setP1Team, setP2Team],
        tags: [p1Tag, p2Tag],
        setTags: [setP1Tag, setP2Tag],
        scores: [p1Score, p2Score],
        setScores: [setP1Score, setP2Score],
        matchLength: matchLength,
        setMatchLength: setMatchLength,
        round: round,
        setRound: setRound,
    };

    const [settingsPage, setSettingsPage] = useState("ui");

    appState = {
        settingsPage: settingsPage,
        setSettingsPage: setSettingsPage,
        view: view,
        setView: setView
    };

    switch (view) {
        case "scoreboard":
            return (
                <div className={"app".concat(appConfig.ui.darkmode ? " dark" : "")}>
                    <ScoreboardView matchState={matchState} appConfig={appConfig} />
                    <ButtonModule currentView={view} clickCallback={setView} />
                </div>
            )
            
        case "settings":
            return (
                <div className={"app".concat(appConfig.ui.darkmode ? " dark" : "")}>
                    <SettingsView appConfig={appConfig} />
                </div>
            )
    
        default:
            return <></>
    }
}

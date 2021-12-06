import React, { useEffect, useState } from "react";

import { configCallbackBuilder } from "./Functions/configCallbackBuilder";

import { AppView } from "./Components/Common/AppView";
import { ButtonModule } from "./Components/Common/ButtonModule";
import { MatchState } from "@interfaces/MatchState";
import { AppConfig } from "@interfaces/AppConfig";

export let appConfig: AppConfig;
export let matchState: MatchState;
export let settingsState: {
  page: string,
  setPage: React.Dispatch<React.SetStateAction<string>>,
};

export function App(): JSX.Element {
  const [darkmode, setDarkmode] = useState(true);
  
  const [outputDir, setOutputDir] = useState("");

  const [legacyMode, setLegacyMode] = useState(false);

  const [WSAddress, setWSAddress] = useState("localhost");

  const [WSPort, setWSPort] = useState("4444");

  const [WSPassword, setWSPassword] = useState("");

  const [scenes, setScenes] = useState([]);

  useEffect(() => {
    window.store.get("ui.darkmode").then((value: boolean) => {
      setDarkmode(value);
    }).catch(() => {return;});
  }, []);

  useEffect(() => {
    window.electron.getHomeDir().then((homedir)=> {
      window.store.get("obs.outputDir", homedir.concat("/scoreboard")).then((value: string) => {
      setOutputDir(value);
      }).catch(() => {return;});
    }).catch(() => {
      alert("Unable to find home directory, please set this in the settings.");
    });
  });

  useEffect(() => {
    window.store.get("obs.liveUpdate").then((value: boolean) => {
      setLegacyMode(value);
    }).catch(() => {return;});
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
        scenes: scenes,
        setScenes: configCallbackBuilder(setScenes, "obs.websocket.scenes"),
        sourceNames: {
          p1Tag: "",
          p2Tag: "",

          p1Team: "",
          p2Team: "",

          p1Score: "",
          p2Score: "",

          round: "",
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

  const [page, setPage] = useState("ui");

  settingsState = { page: page, setPage: setPage };

  return (
    <div className={"app".concat(appConfig.ui.darkmode ? " dark" : "")}>
      <AppView view={view} matchState={matchState} appConfig={appConfig} />
      <ButtonModule currentView={view} clickCallback={setView} />
    </div>
  );
}

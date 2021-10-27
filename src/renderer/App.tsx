import { useEffect, useState } from "react";

import { configCallbackBuilder } from "./Builders/configCallbackBuilder";
import { stateCallbackBuilder } from "./Builders/stateCallbackBuilder";

import { AppView } from "./Components/Common/AppView";
import { ButtonModule } from "./Components/Common/ButtonModule";
import { MatchState } from "@interfaces/MatchState";
import { AppConfig } from "@interfaces/AppConfig";

export default function App(): JSX.Element {
  const [darkmode, setDarkmode] = useState(true);
  
  const [outputDir, setOutputDir] = useState("");

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

  const appConfig: AppConfig = {
    ui: {
      darkmode: darkmode,
      setDarkmode: configCallbackBuilder(setDarkmode, "ui.darkmode"),
    },
    obs: {
      outputDir: outputDir,
      setOutputDir: configCallbackBuilder(setOutputDir, "obs.outputDir"),
    }
  };

  const [view, setView] = useState("scoreboard");
  
  const [p1Team, setP1Team] = useState("");
  const setP1TeamCallback = stateCallbackBuilder(setP1Team, appConfig.obs.outputDir.concat("/team1.txt"));
  const [p1Tag, setP1Tag] = useState("");
  const setP1TagCallback = stateCallbackBuilder(setP1Tag, appConfig.obs.outputDir.concat("/player1.txt"));
  const [p1Score, setP1Score] = useState(0);
  const setP1ScoreCallback = stateCallbackBuilder(setP1Score, appConfig.obs.outputDir.concat("/score1.txt"));

  const [p2Team, setP2Team] = useState("");
  const setP2TeamCallback = stateCallbackBuilder(setP2Team, appConfig.obs.outputDir.concat("/team2.txt"));
  const [p2Tag, setP2Tag] = useState("");
  const setP2TagCallback = stateCallbackBuilder(setP2Tag, appConfig.obs.outputDir.concat("/player2.txt"));
  const [p2Score, setP2Score] = useState(0);
  const setP2ScoreCallback = stateCallbackBuilder(setP2Score, appConfig.obs.outputDir.concat("/score2.txt"));

  const [matchLength, setMatchLength] = useState(3);
  const setMatchLengthCallback = stateCallbackBuilder(setMatchLength, appConfig.obs.outputDir.concat("/bestof.txt"));
  const [round, setRound] = useState("");
  const setRoundCallback = stateCallbackBuilder(setRound, appConfig.obs.outputDir.concat("/round.txt"));

  const matchState: MatchState = {
    teams: [p1Team, p2Team],
    setTeams: [setP1TeamCallback, setP2TeamCallback],
    tags: [p1Tag, p2Tag],
    setTags: [setP1TagCallback, setP2TagCallback],
    scores: [p1Score, p2Score],
    setScores: [setP1ScoreCallback, setP2ScoreCallback],
    matchLength: matchLength,
    setMatchLength: setMatchLengthCallback,
    round: round,
    setRound: setRoundCallback,
  };

  return (
    <div className={"app".concat(appConfig.ui.darkmode ? " dark" : "")}>
      <AppView view={view} matchState={matchState} appConfig={appConfig} />
      <ButtonModule currentView={view} clickCallback={setView} />
    </div>
  );
}

import { Scoreboard } from './Scoreboard';
import { Textfield } from '../Common/Textfield';
import { MatchState } from '@interfaces/MatchState';

interface ScoreboardViewProps {
    matchState: MatchState;
}

export function ScoreboardView({matchState}: ScoreboardViewProps): JSX.Element {
    return (
        <div className='appview-container'>
            <Textfield description='Round' className='w-48 absolute top-1/5 left-1/2 transform -translate-x-1/2 text-center'
                       data={matchState.round} setterCallback={matchState.setRound} />

            <Textfield description='P1 team' className='w-28 absolute bottom-1/2'
                       data={matchState.teams[0]} setterCallback={matchState.setTeams[0]} />

            <Textfield description='P1 tag' className='w-64 absolute bottom-1/2 left-36'
                       data={matchState.tags[0]} setterCallback={matchState.setTags[0]} />

            <Scoreboard scores={matchState.scores} setScoresCallbacks={matchState.setScores}
                        matchLength={matchState.matchLength} setMatchLengthCallback={matchState.setMatchLength} />

            <Textfield description='P2 team' className='w-28 absolute bottom-1/2 right-72'
                       data={matchState.teams[1]} setterCallback={matchState.setTeams[1]} />

            <Textfield description='P2 tag' className='w-64 absolute bottom-1/2 right-6'
                       data={matchState.tags[1]} setterCallback={matchState.setTags[1]} />
        </div>
    );
}
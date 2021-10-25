import Textfield from './Textfield';
import MatchState from '@interfaces/MatchState';
import Scoreboard from './Scoreboard';

interface ScoreboardViewProps {
    state: MatchState;
}

const ScoreboardView = ({state}: ScoreboardViewProps) => {
    return (
        <div className='appview-container'>
            <Textfield description='Round' className='w-48 absolute top-1/5 left-1/2 transform -translate-x-1/2 text-center'
                       data={state.round} setterCallback={state.setRound} />

            <Textfield description='P1 team' className='w-28 absolute bottom-1/2'
                       data={state.teams[0]} setterCallback={state.setTeams[0]} />

            <Textfield description='P1 tag' className='w-64 absolute bottom-1/2 left-36'
                       data={state.tags[0]} setterCallback={state.setTags[0]} />

            <Scoreboard scores={state.scores} setScoresCallbacks={state.setScores}
                        matchLength={state.matchLength} setMatchLengthCallback={state.setMatchLength} />

            <Textfield description='P2 team' className='w-28 absolute bottom-1/2 right-72'
                       data={state.teams[1]} setterCallback={state.setTeams[1]} />

            <Textfield description='P2 tag' className='w-64 absolute bottom-1/2 right-6'
                       data={state.tags[1]} setterCallback={state.setTags[1]} />
        </div>
    )
};

export default ScoreboardView;
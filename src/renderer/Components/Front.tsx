import Textfield from './Textfield';
import SetState from '@interfaces/SetState';
import Scoreboard from './Scoreboard';

interface FrontProps {
    state: SetState;
}

const Front = ({state}: FrontProps) => {
    return (
        <div className='mainview-container'>
            <Textfield description='P1 team' className='w-28 absolute bottom-1/2'
            data={state.teams[0]} setterCallback={state.setTeams[0]} />

            <Textfield description='P1 tag' className='w-64 absolute bottom-1/2 left-36'
            data={state.tags[0]} setterCallback={state.setTags[0]} />

            <Textfield description='P2 team' className='w-28 absolute bottom-1/2 right-72'
            data={state.teams[1]} setterCallback={state.setTeams[1]} />

            <Textfield description='P2 tag' className='w-64 absolute bottom-1/2 right-6'
            data={state.tags[1]} setterCallback={state.setTags[1]} />

            <Scoreboard scores={state.scores} setScoresCallbacks={state.setScores}
                        matchLength={state.matchLength} setMatchLengthCallback={state.setMatchLength} />
        </div>
    )
};

export default Front;
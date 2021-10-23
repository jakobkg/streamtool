import Textfield from './Textfield';
import PlayerState from '@interfaces/PlayerState';

interface FrontProps {
    state: PlayerState;
}

const Front = ({state}: FrontProps) => {
    return (
        <div className='mainview-container'>
            <Textfield description='P1 sponsor' className='w-28 absolute bottom-1/2'
            data={state.teams[0]} setterCallback={state.setTeams[0]} />

            <Textfield description='P1 tag' className='w-64 absolute bottom-1/2 left-36'
            data={state.tags[0]} setterCallback={state.setTags[0]} />

            <Textfield description='P2 sponsor' className='w-28 absolute bottom-1/2 right-72'
            data={state.teams[1]} setterCallback={state.setTeams[1]} />

            <Textfield description='P2 tag' className='w-64 absolute bottom-1/2 right-6'
            data={state.tags[1]} setterCallback={state.setTags[1]} />

            <div className='font-mono text-8xl absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>{state.scores[0]}-{state.scores[1]}</div>
            
            <button className="absolute origin-center bottom-1/3 left-1/2 transform -translate-x-1/2 p-2 bg-gray-800 text-sm font-bold rounded-md"
            onClick={() => {
                state.setScores.forEach(setScore => {
                    setScore(0);
                });
            }}>0-0</button>
        </div>
    )
};

export default Front;
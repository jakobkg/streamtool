interface MainViewProps {
    text: string;
}

const MainView = ({ text }: MainViewProps) => {
    return (
        <div className='mainview-container'>
            {text}
        </div>
    )
};

export default MainView;
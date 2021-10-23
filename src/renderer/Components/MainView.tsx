import Front from './Front';
import Settings from './Settings';

interface MainViewProps {
    view: string;
}

const components: {[name: string]: JSX.Element} = {
    'front': <Front />,
    'settings': <Settings />
}

const MainView = ({ view }: MainViewProps) => {
    return components[view];
};

export default MainView;
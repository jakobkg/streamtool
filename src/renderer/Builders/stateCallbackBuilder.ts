export function stateCallbackBuilder<T>(setState: React.Dispatch<React.SetStateAction<T>>, key: string): (value: T) => void {
    return (value) => {
        setState(value);
        void window.electron.saveFile(key, String(value));
    }
}
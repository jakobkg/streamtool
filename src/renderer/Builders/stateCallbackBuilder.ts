export function stateCallbackBuilder<T>(setState: React.Dispatch<React.SetStateAction<T>>, key: string): (value: T) => void {
    return (value) => {
        setState(value);
        window.electron.saveFile(key, String(value));
    }
}
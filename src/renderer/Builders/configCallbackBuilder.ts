export function configCallbackBuilder<T>(setState: React.Dispatch<React.SetStateAction<T>>, key: string): (value: T) => void {
    return (value: T) => {
        setState(value);
        window.store.set(key, value);
    }
}
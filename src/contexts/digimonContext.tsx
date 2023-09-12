import { createContext, ReactNode, useState } from "react";

export type ContextProps = {
    num: number;
    setNum: React.Dispatch<React.SetStateAction<number>>;
}

export type ProviderType = {
    children: ReactNode;
}


export const Context = createContext<ContextProps>({} as ContextProps)


export function Provider({ children }: ProviderType) {
    const [num, setNum] = useState(0)

    return (
        <Context.Provider value={{
            num,
            setNum
        }}>{children}</Context.Provider>
    )
}

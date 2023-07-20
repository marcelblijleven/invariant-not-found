"use client"

import { useRouter } from "next/navigation";
import { ReactNode, createContext, useContext } from "react";

interface IContext {
    signOut: () => void;
}

export type ProviderProps = {
    children: ReactNode;
}

const Context = createContext<IContext>({
    signOut: () => { }
});

export default function MyProvider({ children }: ProviderProps) {
    const router = useRouter(); // router from next/navigation

    const signOut = () => {
        // Simplified router call
        console.log("Signing out");
        router.refresh();
    }

    return (
        <Context.Provider value={{ signOut }}>
            {children}
        </Context.Provider>
    )
}
import React from "react";
import { createContext, useState , useContext} from "react";


interface ThemeContextType {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

interface ThemeContextProviderProps {
    children:React.ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


export const ThemeProvider:React.FC<ThemeContextProviderProps> = ({ children }) => {
    const [ theme, setTheme ] = useState<string>('dark')
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return context;
}
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark"

interface ThemeContextType {
    theme : Theme
    toggleTheme: ()=> void
}

const ThemeContextType = createContext<ThemeContextType| undefined>(undefined)

export function ThemeProvider({children}:{children: ReactNode}) {
    const [theme, setTheme] = useState<Theme>("light")

    useEffect(()=>{
        // Check saved theme or system preference

        const savedTheme = localStorage.getItem("theme") as Theme | null
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)"). matches

        const initialTheme = savedTheme || (prefersDark ? "dark" : "light")
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTheme(initialTheme)
        if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme: Theme = theme === "light" ? "dark" : "dark"; 
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };
    return (
        <ThemeContextType.Provider value = {{theme, toggleTheme}}>
            {children}

        </ThemeContextType.Provider>
    )
}


// eslint-disable-next-line react-refresh/only-export-components
export function useTheme(): ThemeContextType{
    const context = useContext(ThemeContextType)
    if(!context){
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context
}
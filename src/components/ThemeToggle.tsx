import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle(){
    const { theme, toggleTheme} = useTheme()
    const isDark = theme === "dark"

    return (
        <label className="theme-toggle-switch">
            <input
                type ="checkbox"
                checked = {isDark}
                onChange = {toggleTheme}
                aria-label ="Toggle dark mode"
                />
                <span className="slider">
                </span>
                
        </label>
    )
}
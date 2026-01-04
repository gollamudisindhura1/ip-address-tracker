import { useState } from "react";
import { isValidSearch } from "../utils/validation";

interface Props {
    onSearch: (value: string) => void
}

export default function SearchBar({ onSearch}: Props) {
    const [value, setValue] = useState ("")

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault()
        if(!isValidSearch(value)) return
        onSearch(value)
        setValue("")
    }

    return(
        <form className="search-bar" onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Search for any IP address or domain"
                value = {value}
                onChange={(e) => setValue(e.target.value)} />
                        
        <button type="submit">›</button>
                
        </form>
    )
}
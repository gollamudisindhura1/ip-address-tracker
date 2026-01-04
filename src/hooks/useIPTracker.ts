import { useEffect, useState } from "react";
import { type IPData }from "../types/ip";


const API_KEY = "at_9RLl4ljxD1Tgx8aIJe7IH0PB6tti7";

const API_URL = "https://geo.ipify.org/api/v2/country,city";

export function useIPTracker() {
    const [data, setData] = useState<IPData | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    const fetchIPData = async (query?: string) =>{
        try {
            setLoading(true)
            setError("")

            const url = query
            ? `${API_URL}?apiKey=${API_KEY}&ipAddress=${query}`
        : `${API_URL}?apiKey=${API_KEY}`;

        const response = await fetch (url)
        if ( !response.ok) throw new Error()
            const result = await response.json()
        setData(result)

        }catch {
            setError("Please enter a valid IP address or domain.");
    } finally {
      setLoading(false);

        }
    }

    useEffect(()=>{
        fetchIPData()  // load user IP on first render

    }, [])

    return {data, loading, error, fetchIPData}
}

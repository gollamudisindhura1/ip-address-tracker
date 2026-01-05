/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { type IPData }from "../types/ip";


const API_KEY = "at_9RLl4ljxD1Tgx8aIJe7IH0PB6tti7";

const API_URL = "https://geo.ipify.org/api/v2/country,city";


export function useIPTracker() {
    const [data, setData] = useState<IPData | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    const fetchIPData = async (query?: string) => {
  try {
    setLoading(true);
    setError("");

    let url = `${API_URL}?apiKey=${API_KEY}`;

    if (query && query.trim()) {
      const trimmed = query.trim();

      // Simple check: if it has dots and looks like IP (numbers), use ipAddress
      if (/^\d{1,3}(\.\d{1,3}){3}$/.test(trimmed) || trimmed.includes(':')) { // IPv4 or IPv6
        url += `&ipAddress=${encodeURIComponent(trimmed)}`;
      } else {
        // Assume domain otherwise
        url += `&domain=${encodeURIComponent(trimmed)}`;
      }
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Invalid input or API error");
    }

    const result: IPData = await response.json();
    setData(result);
  } catch (err) {
    setError("Please enter a valid IP address or domain(e.g. facebook.com");
  } finally {
    setLoading(false);
  }
};


    useEffect(()=>{
        fetchIPData()  // load user IP on first render

    }, [])


    return {data, loading, error, fetchIPData}
}

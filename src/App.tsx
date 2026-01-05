import Header from './components/Header'
import SearchBar from './components/SearchBar'
import InfoCard from './components/InfoCard'
import MapView from './components/MapView'
import Loader from './components/Loader'
import ErrorMessage from './components/ErrorMessage'
import { useIPTracker } from './hooks/useIPTracker'
import './App.css'
import ThemeToggle from './components/ThemeToggle'

function App() {

  const {data, loading, error, fetchIPData} = useIPTracker()
  

  return (
    <>
    <Header/>
    <ThemeToggle/>
    <SearchBar onSearch={fetchIPData} />
    {loading && <Loader/>}
    {error && <ErrorMessage message={error} />}

      {data && !loading && (
        <>
          <InfoCard data={data} />
          <MapView
            lat={data.location.lat}
            lng={data.location.lng}
          />
        </>
      )}
      
    </>
  )
}


export default App

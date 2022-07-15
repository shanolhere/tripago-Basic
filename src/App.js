import React, {useState} from 'react'
import TripList from './components/TripList'
import './App.css';

const App = () => {
  const [showTrips, setShowTrips] = useState(true);
  return (
    <>
    <div className='showNhide'>
       <button onClick={() => setShowTrips(false)}>Hide Trips</button>
    </div>
    {showTrips && <TripList/>}
    </>
  )
}

export default App

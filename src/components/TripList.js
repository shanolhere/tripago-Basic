import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import './TripList.css'

export default function TripList() {
  const [url, setUrl] = useState('http://localhost:3000/trips')
  const { data: trips, isPending, error } = useFetch(url, {type:'GET'})
  

  return (
    <div className="tripslist">
      <h2>Trip List</h2>
      {isPending &&  <div style={{color:"red"}}>Loading..</div>}
      {error &&  <div style={{color:"red"}}>{error}</div>}
      <ul>
        {trips && trips.map(trip => (
          <li key={trip.id}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>
      <div className="btns">
        <button onClick={() => setUrl('http://localhost:3000/trips?loc=European')}>
          European Trips
        </button>
        <button onClick={() => setUrl('http://localhost:3000/trips?loc=Asian')}>
          Asian Trips
        </button>
        <button onClick={() => setUrl('http://localhost:3000/trips')}>
          All Trips
        </button>
      </div>
    </div>
  )
}

// export default TripList;
//here, using useState hook -- 
    //reruns the component so as a result fetch calls trigerring continuoulsy.
    //So using useEffect hook with an argument.
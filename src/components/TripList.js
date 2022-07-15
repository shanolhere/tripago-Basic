import { useState, useEffect, useCallback} from 'react'
import './TripList.css'

export default function TripList() {
  const [trips, setTrips] = useState([])
  //useEffect dependency array
  const [url, setUrl] = useState('http://localhost:3000/trips')
  
  console.log(trips)

//   useEffect(() => {
//     fetch(url)
//       .then(response => response.json())
//       .then(json => setTrips(json))
//   }, [url])

//If u want to use a function then what?? useCallback()

  const fetchTrips = useCallback(async () => {
     const res = await fetch(url);
     const data = await res.json();
     setTrips(data)
  }, [url])

  useEffect(()=> {
    fetchTrips();
  }, [fetchTrips])

  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      <ul>
        {trips.map(trip => (
          <li key={trip.id}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>
      <button onClick={() => setUrl('http://localhost:3000/trips?loc=European')}>European trips</button>
      <button onClick={() => setUrl('http://localhost:3000/trips?loc=Asian')}>Asian trips</button>
    </div>
  )
}

// export default TripList;
//here, using useState hook -- 
    //reruns the component so as a result fetch calls trigerring continuoulsy.
    //So using useEffect hook with an argument.
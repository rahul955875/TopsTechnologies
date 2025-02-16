import { useState } from "react";

import "./App.css";

function App() {
  const bookingReq = [
    { system: "Vip", seats: 5 },
    { system: "Economy", seats: 10 },
    { system: "Genrale", seats: 5 },
    {system: 'specialKota', seats : 50}
  ];
  const [Ticket, setTicket] = useState(1)
  const [bookingSystem, setBookingsystem] = useState(bookingReq);
  const handleTrack = (e)=>{
    const element = e.target
    if(Ticket >5 ){
      alert('You can only book upto 5 seats')
      return
    }
    setTicket(prev => prev + 1)
    element.style.backgroundColor = 'red'

    
  }
  return (
    <>
      {bookingSystem.map((Bookingsystem,mainIndex) => (
        <div key={Bookingsystem.system}>
          <h1>
            {Bookingsystem.system} seats : {Bookingsystem.seats}
          </h1>
          {Array.from({ length: Bookingsystem.seats }).map((seats, i) => (
            <button onClick={handleTrack} key={i} id={crypto.randomUUID()}>seat : {i + 1}</button>
          ))}
        </div>
      ))}
    </>
  );
}

export default App;

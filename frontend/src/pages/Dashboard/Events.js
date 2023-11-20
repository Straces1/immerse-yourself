import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Events = ({className}) => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        const fetchEvents = async () => {
        const response = await axios.get('http://localhost:3003/api/dashboard/events-list')
        setEvents(response.data)
    }
    fetchEvents()
  }, [])
    return (
      <section className={className}>

        <div className="left">
          <h2>Events</h2>
          <div className="events">
            {events && events.map((event, index) => {
              return (
                  <div key={event._id} className="item">
                      <h3>{event.title}</h3>
                      <p className="date">{event.day}</p>
                      <p className="desc">{event.desc}</p>
                      <div className="buttons">
                          <button>Edit</button>
                          <button>Delete</button>
                      </div>
                  </div>
                  
              )
            })}
          </div>
        </div>

        <div className="right">
            <h2>Add a new event</h2>
                <form>
                    
                    <input type="text" name="title" id="title" placeholder='Title'/>
                    
                    <input type="text" name="day" id="day" placeholder='Date and time'/>
                    
                    <textarea name="desc" id="desc" cols="30" rows="10" placeholder='Description'></textarea>
                    <button type="submit">Submit</button>
                </form>
        </div>

      </section>
    )
  }

export default Events

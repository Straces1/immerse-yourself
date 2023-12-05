import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useAuthContext } from '../../../hooks/useAuthContext'

import ConfirmWindow from '../../../Components/ConfirmWindow/ConfirmWindow.styled'

const Events = ({className}) => {
    const [events, setEvents] = useState([])
    const [eventData, setEventData] = useState({
      title: '',
      snippet: '',
      desc: '',
      date: '',
      picture: null,

    })
    const {user} = useAuthContext()
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [eventToDelete, setEventToDelete] = useState(null)
    const [unabled, setUnabled] = useState(null)

    // load events from DB
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:3003/api/dashboard/events-list')
        setEvents(response.data)
      } catch (error) {
        console.log('Error fetching events', error)
      }
      
    }
    // initial fetch
    useEffect(() => {
        
      fetchEvents()
      if(user.role === 'admin'){setUnabled(false)}
      if(user.role ==='test-admin'){setUnabled(true)}
  }, [user])

  // form logic
  //handle file input change
  const handleInputChange = (e) => {
    const { name, value, files } = e.target
    setEventData({
      ...eventData,
      [name]: files ? files[0] : value
    })
  }
  // submit function
  const handleSubmit = async (e) => {
    e.preventDefault()
    // FormData is a built-in JavaScript object that provides a way to easily construct a set of key/value pairs representing 
    // form fields and their values. It is commonly used to create and send multipart/form-data requests, which is the format 
    // used when uploading files through a form.

    // This object will be used to append the key-value pairs representing the data you want to send in the request
    const postData = new FormData()
    postData.append('title', eventData.title)
    postData.append('desc', eventData.desc)
    postData.append('snippet', eventData.snippet)
    postData.append('date', eventData.date)
    postData.append('picture', eventData.picture)

    try {
      await axios.post('http://localhost:3003/api/dashboard/events', postData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      alert('Event created successfully!')
      fetchEvents()
      setEventData({title: '', desc: '', snippet: '', date: '', picture: null})
    } catch (error) {
      console.log(error)
      alert('Error creating event')
    }
  }

  // deletion logic

  //deletion modal
  const handleDeleteClick = (classs) => {
    setEventToDelete(classs);
    setShowDeleteModal(true)
  }

  const handleDeleteConfirm = async () => {
    // delete class from database
        const response = await axios.delete('http://localhost:3003/api/dashboard/events/' + eventToDelete._id, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        if (response.status === 200) {
            console.log(response.data.message)
        }
        setEvents((prevEvents) => {
            return prevEvents.filter((item) => item._id !== eventToDelete._id
            )
        })
        setShowDeleteModal(false)
  }
  const handleModalClose = () => {
    setShowDeleteModal(false)
  }
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
                          <button disabled={unabled} title="Only admin can edit classes">Edit</button>
                          <button disabled={unabled} title="Only admin can delete classes" onClick={() => handleDeleteClick(event)}>Delete</button>
                      </div>
                  </div>
                  
              )
            })}
            {showDeleteModal ? <ConfirmWindow 
                                        onClose={handleModalClose}
                                        onDelete={handleDeleteConfirm}
                                        content={`Are you sure you want to delete ${eventToDelete.title}`}
                                            /> : null}
          </div>
        </div>

        <div className="right">
            <h2>Add a new event</h2>
                <form onSubmit={handleSubmit}>
                    
                    <input 
                      type="text" 
                      name="title" id="title" 
                      placeholder='Title'
                      value={eventData.title}
                      onChange={handleInputChange}
                    />

                    <input 
                      type='text' 
                      name='snippet'
                      placeholder='Snippet'
                      value={eventData.snippet}
                      onChange={handleInputChange}
                    />

                    <textarea 
                      name="desc" 
                      cols="30" rows="10" 
                      placeholder='Description'
                      value={eventData.desc}
                      onChange={handleInputChange}
                    ></textarea>

                    <input 
                      type="datetime-local" 
                      name="date" 
                      placeholder='Date and time'
                      value={eventData.date}
                      onChange={handleInputChange}
                    />

                    <input 
                      type='file'
                      name='picture'
                      onChange={handleInputChange}
                    />
                    
                    
                    <button type="submit">Submit</button>
                </form>
        </div>

      </section>
    )
  }

export default Events

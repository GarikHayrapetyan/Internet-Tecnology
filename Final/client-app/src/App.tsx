import React, { useState, useEffect, Fragment } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import { IEvent } from './app/Event';
import { NavBar } from './features/navbar/NavBar';
import { EventDashboard } from './features/Events/dashboard/EventDashboard';
import agent from './api/agent';


function App() {
  const [eventList,setEventList] = useState<IEvent[]>([])
  const [selectedEvent,setSelectedEvent] = useState<IEvent | null>(null)
  const [editMode,setEditMode] = useState(false);

  const handleSelectedEvent=(id: string)=>{
    setSelectedEvent(eventList.filter(e=>e.id===id)[0]);        
  }

  const handleOpenCreateForm=()=>{
    setEditMode(true);
    setSelectedEvent(null);
  }

  const handleCreateEvent=(event:IEvent)=>{
    setEventList([...eventList,event]);
    agent.Events.create(event);
    setSelectedEvent(null);
    setEditMode(false);
  }

  const handleEditEvent=(event:IEvent)=>{
    setEventList([...eventList.filter(e=>e.id !== event.id),event]);
    setEditMode(false);
  }

  const handleDeleteEvent=(id:string)=>{
    setEventList([...eventList.filter(e=>e.id!==id)]);
    agent.Events.delete(id);
  }

  useEffect(() => {
    agent.Events.list()
    .then(response=>{
      let events:IEvent[] = [];
      response.forEach(event=>{
        if (event.eventdate) {
          event.eventdate = event.eventdate.split('.')[0];
          events.push(event)
        }
      
      })
      setEventList(events);
      console.log(response);      
    })
  }, [])
 
  return (
    <Fragment>
      <NavBar openCreateForm={handleOpenCreateForm}/>
      <Container style={{ marginTop: "7em" }}>
        <EventDashboard
          events={eventList}
          selectEvent={handleSelectedEvent}
          selectedEvent={selectedEvent}
          editMode={editMode}
          setEditMode={setEditMode}
          setSelectedEvent={setSelectedEvent}
          createEvent={handleCreateEvent}
          editEvent={handleEditEvent}
          deleteEvent={handleDeleteEvent}
        />
      </Container>
    </Fragment>
  );
}

export default App;

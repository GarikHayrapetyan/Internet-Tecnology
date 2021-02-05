import React from 'react'
import { Grid } from 'semantic-ui-react'
import { IEvent } from '../../../app/Event'
import {EventList} from '../dashboard/EventList'
import { EventDetail } from '../details/EventDetail'
import { EventForm } from '../form/EventForm'

interface IProps
{
    events:IEvent[];
    selectEvent:(id:string)=>void;
    selectedEvent:IEvent | null;
    editMode:boolean;
    setEditMode:(editMode:boolean)=>void;
    setSelectedEvent:(event:IEvent|null)=>void;
    createEvent:(event:IEvent)=>void;
    editEvent:(event:IEvent)=>void;
    deleteEvent:(id:string)=>void;
}

export const EventDashboard: React.FC<IProps> = ({
  events,
  selectEvent,
  selectedEvent,
  editMode,
  setEditMode,
  setSelectedEvent,
  createEvent,
  editEvent,
  deleteEvent
}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} selectEvent={selectEvent} deleteEvent={deleteEvent}/>
      </Grid.Column>
      <Grid.Column width={6}>
        {selectedEvent && !editMode && (
          <EventDetail
            event={selectedEvent}
            setEditMode={setEditMode}
            setSelectedEvent={setSelectedEvent}
          />
        )}
        {editMode && (
          <EventForm
            key={(selectedEvent && selectedEvent.id) || 0}
            setEditMode={setEditMode}
            selectedEvent={selectedEvent}
            createEvent={createEvent}
            editEvent={editEvent}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

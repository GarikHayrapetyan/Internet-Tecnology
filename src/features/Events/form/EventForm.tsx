import React, { ChangeEvent, useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { IEvent } from '../../../app/Event'

interface IProps{
    setEditMode: (e:boolean) => void;
    selectedEvent:IEvent | null;
    createEvent:(event:IEvent)=>void;
    editEvent:(event:IEvent)=>void;
}
export const EventForm: React.FC<IProps> = ({
  setEditMode,
  selectedEvent,
  createEvent,
  editEvent,
}) => {
  const initalForm = () => {
    if (selectedEvent) {
      return selectedEvent;
    } else {
      return {
        id: "",
        title: "",
        description: "",
        eventdate: "",
        category: "",
        city: "",
        address: "",
      };
    }
  };

  const [event, setEvent] = useState<IEvent>(initalForm);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setEvent({ ...event, [name]: value });
  };

  const handleSubmit=()=>{
      if (event.id.length===0) {
          createEvent(event);
      } else {
          editEvent(event);
      }
  }

  return (
    <Segment clearing>
      {console.log("Form:" + selectedEvent?.title)}
      <Form onSubmit={handleSubmit}>
        <Form.Input
          onChange={handleInputChange}
          name="title"
          placeholder="Title"
          value={event.title}
        />
        <Form.TextArea
          onChange={handleInputChange}
          rows={2}
          name="description"
          placeholder="Description"
          value={event.description}
        />
        <Form.Input
          onChange={handleInputChange}
          type="datetime-local"
          name="date"
          placeholder="Date"
          value={event.eventdate}
        />
        <Form.Input
          onChange={handleInputChange}
          name="category"
          placeholder="Category"
          value={event.category}
        />
        <Form.Input
          onChange={handleInputChange}
          name="city"
          placeholder="City"
          value={event.city}
        />
        <Form.Input
          onChange={handleInputChange}
          name="address"
          placeholder="Address"
          value={event.address}
        />
        <Button positive floated="right" type="submit" content="Submit" />
        <Button
          floated="right"
          content="Cancel"
          onClick={() => setEditMode(false)}
        />
      </Form>
    </Segment>
  );
};

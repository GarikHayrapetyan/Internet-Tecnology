import React from 'react'
import { Button, Item, Label, Segment } from 'semantic-ui-react'
import { IEvent } from '../../../app/Event';

interface IProps{
    events:IEvent[];
    selectEvent:(id:string)=>void;
    deleteEvent:(id:string)=>void;
   
}
export const EventList: React.FC<IProps> = ({
  events,
  selectEvent,
  deleteEvent,
}) => {
  return (
    <Segment>
      <Item.Group divided>
        {events.map((event) => (
          <Item key={event.id}>
            <Item.Content>
              <Item.Header as="a">{event.title}</Item.Header>
              <Item.Meta>{event.eventdate}</Item.Meta>
              <Item.Description>
                <div>{event.city}</div>
                <div>{event.address}</div>
              </Item.Description>
              <Item.Extra>
                <Button
                  onClick={() => selectEvent(event.id)}
                  floated="right"
                  content="View"
                  color="blue"
                />
                <Button
                  onClick={() => deleteEvent(event.id)}
                  floated="right"
                  content="Delete"
                  color="red"
                />
                <Label basic content={event.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

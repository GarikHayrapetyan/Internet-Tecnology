import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react';
import { IEvent } from '../../../app/Event';

interface IProps{
    event:IEvent;
    setEditMode:(editMode:boolean)=>void;
    setSelectedEvent:(event:IEvent|null)=>void;
}

export const EventDetail:React.FC<IProps> = ({event,setEditMode,setSelectedEvent}) => {
    console.log("From Deatail:"+event.title);
    
  return (
    <Card fluid>
      <Image src="/assets/placeholder.png" wrapped ui={false} />
      <Card.Content>
        <Card.Header>{event.title}</Card.Header>
        <Card.Meta>
          <span className="date">{event.eventdate}</span>
        </Card.Meta>
        <Card.Description>{event.category}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button
            basic
            onClick={() => setEditMode(true)}
            color="blue"
            content="Edit"
          />
          <Button
            basic
            onClick={() => setSelectedEvent(null)}
            color="grey"
            content="Cancel"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
}

import React from 'react';
import { Card, CardItem, Body, Text, Right, Left, Button } from 'native-base';

// Functional component
const ToDoNote = props => {
  // Syntax: select "note" and "deleteNote" from props
  const { note, deleteNote } = props;
  return (
    <Card>
      <CardItem header>
        <Text>{note.title}</Text>
      </CardItem>
      <CardItem>
        <Body>
          <Text>{note.body}</Text>
        </Body>
      </CardItem>
      <CardItem footer bordered>
        <Left></Left>
        <Body></Body>
        <Right>
          {/* The button just passes the touch event onto parent component via prop */}
          <Button small onPress={() => deleteNote(note._id)}>
            <Text>Delete</Text>
          </Button>
        </Right>
      </CardItem>
    </Card>
  );
};

export default ToDoNote;

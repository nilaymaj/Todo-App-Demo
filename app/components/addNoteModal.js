import React from 'react';
import { Modal } from 'react-native';
import { Input, Textarea, Button, Text, Content } from 'native-base';

// This is a functional component
// Can't use state = {...} like in class components
const AddNoteModal = props => {
  // Use setState to emulate state in functional components
  // const [property, setProperty] = React.useState(<default value of property>)
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');

  return (
    <Modal // provided by React-Native
      animationType="slide"
      transparent={false}
      visible={props.active}
      onRequestClose={() => props.switch()}
    >
      <Content>
        <Input
          name="Title"
          placeholder="Enter title..."
          onChange={e => setTitle(e.nativeEvent.text)}
        />
        <Textarea
          rowSpan={5}
          bordered
          name="Body"
          placeholder="Enter note body..."
          onChange={e => setBody(e.nativeEvent.text)}
        />
        <Button onPress={() => props.addNote(title, body)}>
          <Text>Add Note</Text>
        </Button>
      </Content>
    </Modal>
  );
};

export default AddNoteModal;

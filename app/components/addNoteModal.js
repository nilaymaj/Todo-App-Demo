import React, { Component } from 'react';
import { Modal, View } from 'react-native';
import { Content, Input, Textarea } from 'native-base';

const AddNoteModal = props => {
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={this.state.modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}
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

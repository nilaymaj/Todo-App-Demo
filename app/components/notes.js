import React, { Component } from 'react';
import { Fab, Icon } from 'native-base';
import ToDoNote from './note';
import axios from 'axios';
import AddNoteModal from './addNoteModal';

class TodoNotes extends Component {
  state = { notes: [], modalOpen: false };
  componentDidMount() {
    // Fetch all the notes, when
    // the components loads
    this.fetchNotes();
  }

  // Switch the status of modal (open <-> close)
  switchModal = () => {
    // Use setState to update the state of component
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  // Fetch notes from backend and update state
  fetchNotes = () => {
    axios // Library for sending API requests
      .get('http://172.17.72.104:8000/view')
      .then(res => {
        this.setState({ notes: res.data });
      })
      .catch(err => console.log(err));
  };

  // Send delete request to backend, then refetch
  deleteNote = id => {
    console.log(id);
    axios({
      method: 'POST',
      url: 'http://172.17.72.104:8000/delete',
      data: { id: id }
    })
      .then(() => this.fetchNotes()) // Fetch the new notes when delete request is successful
      .catch(err => console.log(err)); // If error thrown, log the error
  };

  // Send new note request to backend, the refetch
  addNote = (title, body) => {
    console.log(title);
    console.log(body);
    axios
      .post('http://172.17.72.104:8000/add', { title: title, body: body })
      .then(res => {
        this.fetchNotes();
        this.setState({ modalOpen: false });
      })
      .catch(err => console.log(err));
  };

  // The main render method
  render() {
    return (
      // Ghost tag coz we can't return sibling components
      <React.Fragment>
        {this.state.notes.map(note => (
          // A <ToDoNote> component for every note
          <ToDoNote
            note={note}
            key={note._id} // Unique, required while listing components
            deleteNote={this.deleteNote}
          ></ToDoNote>
        ))}
        <Fab // Button for opening <AddNoteModal>
          style={{ backgroundColor: '#5067FF' }}
          onPress={() => this.switchModal()}
        >
          <Icon name="add" />
        </Fab>
        <AddNoteModal
          active={this.state.modalOpen}
          switch={this.switchModal}
          addNote={this.addNote}
        ></AddNoteModal>
      </React.Fragment>
    );
  }
}

export default TodoNotes;

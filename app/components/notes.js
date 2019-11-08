import React, { Component } from 'react';
import Note from './note';
import { Fab } from 'native-base';
import axios from 'axios';
import AddNoteModal from './addNoteModal';

class Notes extends Component {
  state = { notes: [], modalOpen: false };

  componentDidMount() {
    // fetch
    this.fetchNotes();
  }

  switchModal() {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  addNote = (title, body) => {
    axios({
      method: 'POST',
      url: 'http://172.17.72.104:8000/add',
      data: { title: title, body: body }
    })
      .then(() => {
        this.fetchNotes();
        this.setState({ modalOpen: false });
      })
      .catch(err => console.log(err));
  };

  deleteNote = id => {
    // delete
    console.log(id);
    axios({
      method: 'POST',
      url: 'http://172.17.72.104:8000/delete',
      data: { id: id }
    })
      .then(() => {
        this.fetchNotes();
      })
      .catch(err => console.log(err));
  };

  fetchNotes = () => {
    axios
      .get('http://172.17.72.104:8000/view')
      .then(res => {
        this.setState({ notes: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <React.Fragment>
        {this.state.notes.map(note => (
          <Note note={note} deleteNote={this.deleteNote} key={note._id}></Note>
        ))}
        <Fab
          style={{ backgroundColor: '#5067FF' }}
          onPress={() => this.switchModal()}
        >
          <Icon name="add" />
        </Fab>
        <AddNoteModal addNote={this.addNote}></AddNoteModal>
      </React.Fragment>
    );
  }
}

export default Notes;

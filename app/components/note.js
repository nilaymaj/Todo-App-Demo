import React, { Component } from 'react';

class Note extends Component {
  // state = {  }
  render() {
    return (
      <Card>
        <CardItem header>
          <Text>{props.note.title}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{props.note.body}</Text>
          </Body>
        </CardItem>
        <CardItem footer>
          <Button
            onPress={() => {
              this.props.deleteNote(this.props.note._id);
            }}
          >
            <Text>Delete</Text>
          </Button>
        </CardItem>
      </Card>
    );
  }
}

export default Note;

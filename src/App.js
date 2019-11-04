import React, { Component } from 'react';
import ConversationsList from './components/conversationsList';

class App extends Component {
  render() {
    const conversationsList = Object.values(this.state.conversations).sort((a, b) => new Date(b.last_message.created_at) - new Date(a.last_message.created_at));
    return (
      <ConversationsList conversations={conversationsList} />
    );
  }

  state = {
    conversations: []
  };

  componentDidMount() {
    fetch('https://sec.meetkaruna.com/api/v1/conversations')
      .then(res => res.json())
      .then((data) => {
        this.setState({ conversations: data.data })
      })
      .catch(console.log)
  }
}

export default App;

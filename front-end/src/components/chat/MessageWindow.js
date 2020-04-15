import React, { Component } from 'react';
import { ChatFeed, Message } from 'react-chat-ui'
import { connect } from 'react-redux';
import { fetchMessages, addMessages } from '../../actions';
import { Input, Button } from 'react-chat-elements'
import 'react-chat-elements/dist/main.css';

class MessageWindow extends Component {
  state = {
    newMessage: {}
  };

  typeMessage = (e) => {
    const name = 'Yash T';
    this.setState({
      newMessage: {
        text: e.target.value,
        sender: name
      }
    })
  }

  componentDidMount() {
      //const chatId = '5e8a6db66238b2459ec46295'
   
  };

  sendMessage = (e) => {
    e.preventDefault()
    //const chatId = '5e8a6db66238b2459ec46295'
    this.props.addMessages(this.props.chatId, this.state.newMessage)    
  }
  render() {

    return (<div>

      <ChatFeed
        messages={this.props.messages} // Boolean: list of message objects
        showSenderName // show the name of the user who sent the message
        // JSON: Custom bubble styles
        bubbleStyles={
          {
            text: {
              fontSize: 15
            },
            chatbubble: {
              borderRadius: 10,
              padding: 10
            }
          }
        }
      />
      <Input
        placeholder="Type here..."
        multiline={true}
        onChange={this.typeMessage}
        value={this.state.newMessage.text}
        autofocus={true}    
        rightButtons={
          <Button color='white' backgroundColor='black' text='Send' onClick={this.sendMessage} />
        } />

    </div>)
  }
}

const mapStateToProps = (state) => {
    console.log(state.conversation);
    const name = 'Yash T'
    let list = []
    if(state.conversation.messages) {
        list = state.conversation.messages.map((message) => {
            if(message.sender === name) {
                return new Message({
                    id: 0,
                    message: message.text,
                    senderName: message.sender
                  })
            } 
    
            return new Message({
                id: 1,
                message: message.text,
                senderName: message.sender
              })
        })
    }
    
    return {
        messages: list
    }
}

export default connect(mapStateToProps, { fetchMessages, addMessages })(MessageWindow);
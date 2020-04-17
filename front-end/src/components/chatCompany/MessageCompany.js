import React from 'react'
import CompanyHeader from '../CompanyHeader';
import MessageWindow from './MessageWindow';
import 'react-chat-elements/dist/main.css';
import { ChatList } from 'react-chat-elements'
import { connect } from 'react-redux';
import { fetchChats, fetchMessages } from '../../actions'

class MessageCompany extends React.Component {
    state = {chatId: ''}

    componentDidMount() {
        const companyId = '5e99811101ef526dbc11dd51'
        this.props.fetchChats(companyId);
    }

    onClickHandler = (e) => {
        console.log(e);
        this.setState({chatId: e.id});
        this.props.fetchMessages(e.id)
        
    }

    render() {
        return (
            <div>
                <div style={{marginBottom: '20px'}}>
                <CompanyHeader />
                </div>
                <div>
                    <div style={{float: 'left', width: '25%', marginRight: '40px'}}>
                      <ChatList className='chat-list' dataSource={this.props.chats} onClick={this.onClickHandler}/>
                    </div>
                    <div style={{float: 'left', width: '50%'}}>
                        <MessageWindow chatId={this.state.chatId} />
                    </div>
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    const companyId = '5e99811101ef526dbc11dd51'
    const list = state.chats.map((item) => {
        if(item.users[0].userId != companyId) {
          return {title: item.users[0].name, subtitle: item.messages[item.messages.length-1].text, id: item._id} 
        } else {
          return {title: item.users[1].name, subtitle: item.messages[item.messages.length-1].text, id: item._id} 
        }
      })
    return {
        chats: list
    }
}

export default connect(mapStateToProps, { fetchChats, fetchMessages })(MessageCompany);

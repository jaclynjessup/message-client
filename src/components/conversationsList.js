import React from 'react';
import Moment from 'react-moment';

const ConversationsList = ({conversations}) => {
    return (
        <div>
          <center><h1>Conversations</h1></center>
          {conversations.map((conversation) => (
              <div class="convo-list">
                <div class="convo-extras">
                  {conversation.unread ? <span class="unread">{conversation.unread}</span> : ""}
                  <span class="initial">{conversation.name.charAt(0).toUpperCase()}</span>
                </div>
                <div class="convo-body">
                  <h5 class="name">{conversation.name}</h5>
                  <h6 class="last-message">{conversation.last_message.body}</h6>
                  <p class="date"><Moment format="MMM DD, YY h:mm a">{conversation.last_message.created_at}</Moment></p>
                </div>
              </div>
          ))}
        </div>
    )
};

export default ConversationsList
import {ChatEngine} from 'react-chat-engine';

import  ChatFeed  from './components/ChatFeed';
import "./App.css";

const App =  () =>{
    return (
        <ChatEngine
            height="100vh"
            projectID = "0415f7f2-cb7a-4095-bf8c-06daa11bc5d0"
            userName = "AnupRawat"
            userSecret = "Pass123!"
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
            />
    )
}

export default App;
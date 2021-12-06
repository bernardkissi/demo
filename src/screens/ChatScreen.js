import react from 'react'
import Header from '../components/header/header'
import ChatItem from '../components/chat/chat'
import './chatscreen.css'

const ChatScreen = ({messages}) => {
	const headerName = "Someone"

	return(
		<main className="chat_ui">
			<Header name={headerName}/>
			{messages.map((message) => <ChatItem message={message} />)}
		</main>
	)
}

export default ChatScreen
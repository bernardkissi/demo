import ChatScreen from './screens/ChatScreen'


const App = () => {
  const messages= [
    {"name": "mohammed", "message":"hey are you in school"},
    {"name": "mo1", "message":"cant make it"},
    {"name": "mo2", "message":"see you tomorrow"},
    {"name": "mo3", "message":"hey am not feeeling well"},
  ]

  return (
      <div>
        <ChatScreen messages={messages}/>
      </div>
    )
}

export default App;

import React from 'react'
import Background from '../components/Background'
import Sidebar from '../components/Sidebar'
import SearchBar from '../components/SearchBar'
import ChatWindow from '../components/ChatWindow'

const ChatPage = () => {
  return (
    <div>
        <SearchBar/>
        <ChatWindow/>
        <Sidebar/>
        <Background/>
    </div>
  )
}

export default ChatPage
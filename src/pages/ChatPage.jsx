import React from 'react'
import Background from '../components/Background'
import Sidebar from '../components/Sidebar'
import SearchBar from '../components/SearchBar'
import ChatWindow from '../components/ChatWindow'

const ChatPage = () => {
  return (
    <div className='relative min-h-screen'>
        <SearchBar/>
        <ChatWindow/>
        <Sidebar/>
        <Background/>
    </div>
  )
}

export default ChatPage
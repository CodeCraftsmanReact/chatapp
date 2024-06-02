import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import Avatar from './Avatar'
import { getInitials } from '../utilities'

// data for UI/UX testing
const list = [
    {
        from: 'Shannon Matusek-Steele',
        dateTime: '5/3',
        reaction: 'laugh',
        reactionToMessage: 'Thanks! I added the domain to your list of allowed senders.'
    },
    {
        from: 'Shannon Matusek-Steele',
        dateTime: '5/3',
        reaction: 'laugh',
        reactionToMessage: 'Thanks! I added the domain to your list of allowed senders.'
    }
]

const Sidebar = () => {
    const [isExtended, setIsExtended] = useState(false);
    const toggleSidebar = () => {
        setIsExtended(!isExtended);
    }
  return (
    <>
       <div className='fixed left-4 top-0 w-16 h-screen text-3xl py-4 text-white'>
        <button onClick={()=> toggleSidebar()} className='bg-white/60 border border-solid border-white mb-4  flex flex-col items-center w-[64px]'>
            <Icon icon="mdi:bell-outline" />
            <div className='text-xs'>Activity</div>
        </button>
        <button className='bg-white/60 border border-solid border-white mb-4  flex flex-col items-center w-[64px]'>
            <Icon icon="mdi:chat-processing-outline" />
            <div className='text-xs'>Chat</div>
        </button>
        <button className='bg-white/60 border border-solid border-white mb-4  flex flex-col items-center w-[64px]'>
            <Icon icon="fluent:people-team-16-regular" />
            <div className='text-xs'>Teams</div>
        </button>
    </div>
    {/* extended sidebar */}
    <div className={`fixed left-[80px] top-0 p-4 ml-2 bg-blue-500 h-screen text-white ${isExtended ? "w-fit" : "w-0 hidden"}`}>
    <Icon className='absolute right-0 top-4' icon={"material-symbols:left-panel-close"} onClick={()=> toggleSidebar()}/>
        <div className='flex flex-col gap-4'>
        {list.map((item) => (
            <SelectedList listItem={item}/>
        ))}
        </div>
        
    </div>
    </>
 
  )
}

// list data structure
// [{ from: string, reaction?: string, reactionTo?: string}]

const SelectedList = ({slected, listItem}) => {
    return(
        <div className='relative flex items-center gap-2 p-2 border border-solid border-white rounded bg-black/20'>
          
           <Avatar initials={getInitials(listItem.from)}/>
           <div>{listItem.from}</div>
        </div>
    )
}

export default Sidebar
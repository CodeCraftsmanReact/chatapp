import React, {useState} from 'react'
import headshot from '../assets/headshot.png'
const ChatWindow = () => {
  return (
    <div className='w-[80%] pb-20 relative mt-4 mx-auto bg-white/50 border border-white border-solid rounded p-8'>
        <ChatBubbleIn />
        <ChatBubbleOut/>
        <div className='absolute bottom-0 left-0 right-0'>
            <ChatInput/>
        </div>
    </div>
  )
}

const ChatInput = () => {
    return(
        
<form class="mx-auto">   
    <label for="default-search" class="mb-2 text-sm font-medium  sr-only  text-white">Send</label>
    <div class="relative">
       
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm  border   bg-gray-700/80  border-gray-600  placeholder-gray-400  text-white  focus:ring-blue-500  focus:border-blue-500" placeholder="Type a message" required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5  focus:ring-4 focus:outline-none font-medium  text-sm px-4 py-2  bg-blue-600  hover:bg-blue-700  focus:ring-blue-800">Send</button>
    </div>
</form>

    )
}

const ChatBubbleIn = () => {
    const [showOptions, setShowOptions] = useState();

    return(
        
<div class="flex items-start gap-2.5 mb-4">
   <img class="w-8 h-8 rounded-full" src={headshot} alt="Joe Kertz"/>
   <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 rounded-e-xl rounded-es-xl bg-gray-700/80">
      <div class="flex items-center space-x-2 rtl:space-x-reverse">
         <span class="text-sm font-semibold   text-white">Bonnie Green</span>
         <span class="text-sm font-normal   text-gray-400">11:46</span>
      </div>
      <p class="text-sm font-normal py-2.5   text-white">That's awesome. I think our users will really appreciate the improvements.</p>
      <span class="text-sm font-normal   text-gray-400">Delivered</span>
   </div>
   <button onClick={() => setShowOptions(!showOptions)} id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" data-dropdown-placement="bottom-start" class="inline-flex self-center items-center p-2 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none text-white bg-gray-900/70 hover:bg-gray-800 focus:ring-gray-600" type="button">
      <svg class="w-4 h-4  text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
         <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
      </svg>
   </button>
   <div id="dropdownDots" class={`z-10 ${ showOptions ? null : "hidden"}  divide-y  rounded-lg shadow w-40  bg-gray-700  divide-gray-600`}>
      <ul class="py-2 text-sm text-gray-700  text-gray-200" aria-labelledby="dropdownMenuIconButton">
         <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100  hover:bg-gray-600  hover:text-white">Reply</a>
         </li>
         <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100  hover:bg-gray-600  hover:text-white">Forward</a>
         </li>
         <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100  hover:bg-gray-600  hover:text-white">Copy</a>
         </li>
         <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100  hover:bg-gray-600  hover:text-white">Report</a>
         </li>
         <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100  hover:bg-gray-600  hover:text-white">Delete</a>
         </li>
      </ul>
   </div>
</div>

    )
}

const ChatBubbleOut = () => {
    return(
        
<div class="flex items-start justify-end gap-2.5 mb-4">
  
   <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 rounded-s-xl rounded-es-xl bg-gray-700/80">
      <div class="flex items-center space-x-2 rtl:space-x-reverse">
         <span class="text-sm font-semibold   text-white">Bonnie Green</span>
         <span class="text-sm font-normal   text-gray-400">11:46</span>
      </div>
      <p class="text-sm font-normal py-2.5   text-white">That's awesome. I think our users will really appreciate the improvements.</p>
      <span class="text-sm font-normal   text-gray-400">Delivered</span>
   </div>
   <img class="w-8 h-8 mt-auto rounded-full" src={headshot} alt="Joe Kertz"/>

</div>

    )
}

export default ChatWindow
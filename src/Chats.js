import React from 'react'
import './Chats.css'
import Chat from './Chat'

function Chats() {
    return <div className="chats">
            <Chat
                name="Kaley"
                message="Yo what's up!"
                timestamp="40 seconds ago"
                profilePic="https://s.abcnews.com/images/Entertainment/GTY-Kaley-Cuoco-MEM-161117_4x3t_992.jpg"
            />
            <Chat
                name="Emma"
                message="Hey!"
                timestamp="35 minutes ago"
                profilePic="https://www.comingsoon.net/assets/uploads/2020/12/emmastone-1280x720.jpg"
            />
            <Chat
                name="Addison"
                message="Have you seen my latest..."
                timestamp="20 seconds ago"
                profilePic="https://media.wonderlandmagazine.com/uploads/2021/03/IMG_2527.jpg"
            />
            <Chat
                name="Emilia"
                message="You should see my dragons!"
                timestamp="42 minutes ago"
                profilePic="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/emiliaclarke-square-1552083436.png"
            />
        </div>
    
}

export default Chats

import React, { useState } from 'react'
import "./ChatScreen.css"
import Avatar from "@material-ui/core/Avatar"

function ChatScreen() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name: "Addison",
            image: "https://media.wonderlandmagazine.com/uploads/2021/03/IMG_2527.jpg",
            message: "Whats up?"
        },
        {
            name: "Addison",
            image: "https://media.wonderlandmagazine.com/uploads/2021/03/IMG_2527.jpg",
            message: "Hows it going?"
        },
        {
            message: "Why hello there!"
        },
    ])
   
    const handleSend = e => {
        e.preventDefault()

        setMessages([...messages, {message: input }])
        setInput('')


    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">You matched with Addison on 5/12/21</p>
            {messages.map ((message) => (
                message.name ? (
                <div className="chatScreen__message">
                    <Avatar
                        className="chatScreen__image"
                        alt={message.message}
                        src={message.image}
                    />
                    <p className="chatScreen__text">{message.message}</p>
                </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            ))}
            
                <form className="chatScreen__input">
                    <input 
                        value ={input} 
                        onChange= {e => setInput(e.target.value)}
                        className="chatScreen__inputField" 
                        type="text" 
                        placeholder="Type a message..."/>
                    <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
                </form>
            
        </div>
    )
}

export default ChatScreen

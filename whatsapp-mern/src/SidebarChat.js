import { Avatar } from '@material-ui/core'
import React from 'react'
import "./SidebarChat.css"

export default function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div class="sidebarChat_info">
                <h2>Room name</h2>
                <p>Poslednja poruka</p>
            </div>
        </div>
    )
}

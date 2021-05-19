import React from 'react'
import "./Sidebar.css"
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import { Avatar, IconButton } from '@material-ui/core'
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from "./SidebarChat"


export default function Sidebar() {
    return (
        <div className="sidebar">
            
            <div className="sidebar_header">
                <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu8u8goQ1jJyZKzjGi0P7KPV1B0BUn4EqTsXu7_Yhw=s83-c-mo"/>
                <div className="sidebar_headerRight">
                    <IconButton >
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton >
                        <ChatIcon />
                    </IconButton>
                    <IconButton >
                        <MoreVertIcon />
                    </IconButton>
                    
                    
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search or start new chat" />
                </div>
            </div>

            <div className="sidebar_chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                
            </div>

        </div>
    )
}

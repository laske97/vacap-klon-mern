import { Avatar, IconButton } from '@material-ui/core'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import MoreVert from '@material-ui/icons/MoreVert'
import AttachFile from '@material-ui/icons/AttachFile'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import React from 'react'
import "./Chat.css"

export default function Chat() {
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
                <div className="chat_headerInfo">
                    <h3>Room name</h3>
                    <p>poslednji put vidjen...</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                    
                </div>
            </div>

            <div className="chat_body">
                <p className="chat_message">
                    <span className="chat_name">Laske</span>
                         Ovo je poruka
                    <span className="chat_timestamp">{new Date().toUTCString() }</span>
                </p>
                <p className="chat_message chat_reciever">
                    <span className="chat_name">Laske</span>
                         Ovo je poruka
                    <span className="chat_timestamp">{new Date().toUTCString() }</span>
                </p>
                
            </div>
            <div className="chat_footer">
                <InsertEmoticonIcon />
                <form>
                    <input type="text" placeholder="Unesi poruku" />
                    <button type="submit">Posalji poruku</button>
                </form>
                <MicIcon />
            </div>


        </div>
    )
}

import React, { useState } from 'react'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { Avatar } from '@material-ui/core';
import { useStateValue } from '../StateProvider';
import db from '../../config/firebase';
import firebase from 'firebase';

import './MessageSender.css';

function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [imageUrl, setimageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            image: imageUrl,
        });
        
        setInput("");
        setimageUrl("");
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
            <form>
                <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={`What´s on your mind? ${user.displayName}`} 
                    className="messageSender__input"
                /> 
                <input 
                    type="text" 
                    value={imageUrl}
                    onChange={(e) => setimageUrl(e.target.value)}
                    placeholder="Image URL (Optional)" 
                /> 

                <button onClick={handleSubmit} type="submit">
                    Hidden submit
                </button>
            </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: "red" }}/>
                    <h3>Live video</h3>
                </div>

                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: "green" }}/>
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: "orange" }}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender;
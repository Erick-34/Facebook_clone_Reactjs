import React, { useState, useEffect } from 'react';
import StoryReel from '../StoryReel/StoryReel';
import MessageSender from '../MessageSender/MessageSender';
import Post from '../Post/Post';
import db from "../../config/firebase";

import './Feed.css'

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts')
        .orderBy("timestamp", "desc")
        .onSnapshot(snapshot => {
            setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
            console.log(posts)
        })
    }, [])

    return (
       <div className="feed">
           <StoryReel />
           <MessageSender />

           {posts.map((post) => (
               <Post 
                key={post.id}
                profilePic={post.data.profilePic}
                message={post.data.message}
                timestamp={post.data.timestamp}
                username={post.data.username}
                image={post.data.image}
               />
           ))
           }
       </div>
    );
}

export default Feed;

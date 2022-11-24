import React from 'react'
import { Avatar } from '@mui/material'
import './Post.css'
import InputOption from './InputOption'
import { ThumbUpAltOutlined, ChatOutlined, ShareOutlined, SendOutlined } from '@mui/icons-material'

function Post({name, description, message, photoUrl}) {

  return (
    <div className="post">
        <div className="post__header">
            <Avatar />
            <div className='post__info'> 
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className="post__body">
          <p>{message}</p>
        </div>

        <div className="post__buttons">
          <InputOption Icon={ThumbUpAltOutlined} title="like" color="gray" />
          <InputOption Icon={ChatOutlined} title="Comment" color="gray" />
          <InputOption Icon={ShareOutlined} title="Share" color="gray" />
          <InputOption Icon={SendOutlined} title="Send" color="gray" />
        </div>
    </div>
  )
}

export default Post
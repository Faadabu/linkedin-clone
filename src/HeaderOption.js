import React from 'react'
import './HeaderOption.css'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import { Avatar } from '@mui/material'

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser)

  return (
    <div onClick={onClick} className="headerOption">
        {Icon && <Icon className="headerOption__icon"/>}
        {avatar && (<Avatar className="headerOption__icon" src={user?.photoUrl} alt={title}/>)}
        <h3 className="HeaderOption__title">{title}</h3>
    </div>
  )
}

export default HeaderOption
import React from 'react'
import './Header.css';
import logo from './tinder-logo.png';
import { Person } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
  return (
    <div className='header'>
        <IconButton>
            <Person fontSize='large' className='header_icon'/>
        </IconButton>

        <img
          className='header_logo'
          src={logo}
          alt=''
        />
        
        <IconButton>
           <ForumIcon fontSize='large' className='header_icon'/>
        </IconButton>
    </div>
  )
}

export default Header

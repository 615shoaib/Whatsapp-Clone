
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Menu ,MenuItem,styled} from '@mui/material';
import { useState } from 'react';

const HeaderMenu = ({setOpenDrawer}) => {
    const [open,setOpen]=useState(null)

    const handleClose=()=>{
        setOpen(null)
    }
    const handleClick=(e)=>{
        setOpen(e.currentTarget)
    }
    const MenuOption=styled(MenuItem)`
        font-size:14px;
        padding:15px 60px 5px 24px;
        color:#4A4A4A;
    `
    return (
        <>
            <MoreVertIcon onClick={handleClick} />

            <Menu
                id="basic-menu"
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorE1={null}
               anchorOrigin={{
                vertical:"bottom",
                horizontal:"center"
               }}
               transformOrigin={{
                vertical:"top",
                horizontal:"right"
               }}
            >
                <MenuOption onClick={handleClose} >Profile</MenuOption>
                <MenuOption onClick={handleClose}>Archived</MenuOption>
                <MenuOption onClick={handleClose}>Starred message</MenuOption>
                <MenuOption onClick={()=>{handleClose(); setOpenDrawer(true); }}>Setting</MenuOption>
                <MenuOption onClick={handleClose}>Log out</MenuOption>
            </Menu>
        </>
    )
}

export default HeaderMenu;
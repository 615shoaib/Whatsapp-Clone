import { useContext, useState } from "react"

import { Box,styled } from "@mui/material"
import {Chat as MessageIcon } from "@mui/icons-material"



import { Accountcontext } from "../../../Context/Appprovider"

// Components 
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import InfoDrawer from "../../Drawer/InfoDrawer";
const Component=styled(Box)`
    height:44px;
    background:#ededed;
    padding:8px 16px;
    display:flex;
    align-item:center;
`   
    const Images=styled('img')`
    height:40px;
    width:40px;
    border-radius:50%;
    cursor:pointer;
    `
    const Wrapper=styled(Box)`
    margin-left:auto;
    color:#000;
    & > *{
        margin-left:2px;
        padding:8px;
    }
    
    & :first-child{
        font-size:22px;
        margin-right:8px;
        margin-top:3px;
    }
`
const Header=()=>{
    const {account}=useContext(Accountcontext)
    const [openDrawer,setOpenDrawer]=useState(false)

    const toggleDrawer=()=>{
        setOpenDrawer(true)
    }
    return(
        <>
        <Component>
            <Images title="profile" src={account.picture} alt="dp" onClick={()=>toggleDrawer()} />
            <Wrapper>
                <MessageIcon titleAccess="Chat" />
                <HeaderMenu setOpenDrawer={setOpenDrawer} /> 
            </Wrapper>
        </Component>
        <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
        </>
    )
}

export default Header
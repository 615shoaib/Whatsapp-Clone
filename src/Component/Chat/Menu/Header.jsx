import { useContext } from "react"

import { Accountcontext } from "../../../Context/Appprovider"
import { Box,styled } from "@mui/material"
import {Chat as MessageIcon } from "@mui/icons-material"
import MoreVertIcon from '@mui/icons-material/MoreVert';


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
    return(
        <>
        <Component>
            <Images title="profile" src={account.picture} alt="dp" />
            <Wrapper>
                <MessageIcon titleAccess="Chat" />
                <MoreVertIcon titleAccess="More option" /> 
            </Wrapper>
        </Component>
        </>
    )
}

export default Header
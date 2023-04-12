import { useContext } from 'react';
import {AppBar ,Box,Toolbar,styled} from '@mui/material';
import { Accountcontext } from '../Context/Appprovider';

// components
import Message from './Messanger/message';
import ChatDialog from './Chat/chatDialog';
const Login=()=>{
    const Header=styled(AppBar)`
    height:125px;
    background-color:#128C7E;
    box-shadow:none;
    `

    const LoginHeader=styled(AppBar)`
    height:220px;
    background-color:#128C7E;
    box-shadow:none;
    `
    const Main=styled(Box)`
   height:100vh;
    background-color:#DCDCDC;
    `
    // account value
    const {account}=useContext(Accountcontext)
    return (
        <>
        <Main>
            {
                account ? 
                <>
                <Header>
            <Toolbar>
            </Toolbar>
                 </Header>
                <ChatDialog />
                </>
                :
            <>
        <LoginHeader>
            <Toolbar>
            </Toolbar>
        </LoginHeader>
        <Message />
       
    </>
    } 
    </Main>
        
        </>
    )

}

export default Login
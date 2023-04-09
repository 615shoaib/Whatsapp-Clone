import {AppBar ,Box,Toolbar,Typography,styled} from '@mui/material';
import Image from '../Images/Main.png';
import Message from './Messanger/message';

const Login=()=>{
    const Container=styled(AppBar)`
    height:220px;
    background-color:#128C7E;
    box-shadow:none;
    `
    const Main=styled(Box)`
   height:100vh;
    background-color:#DCDCDC;
    `
    const Images =styled('img')`
    height:50%;
    position: absolute
    top:-10px;
    `
    return (
        <>
        <Main>
        <Container>
            <Toolbar>
                <Images src={Image} alt="Whatsapp" />
                <Typography variant="subtitle1">Web Whatsapp</Typography>
            </Toolbar>
        </Container>
        </Main>
        <Message />
        </>
    )

}

export default Login
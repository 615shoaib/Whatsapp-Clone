import {  useContext } from "react";
import { Box, Dialog, Input, List, ListItem, Typography, styled} from "@mui/material"
import Logo from "/Whatsaap Clone/client/src/Images/qrcode.png"
import { Accountcontext } from "../../Context/Appprovider";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SettingsInputSvideoIcon from '@mui/icons-material/SettingsInputSvideo';
import {GoogleLogin} from '@react-oauth/google' 
import jwt_decode from 'jwt-decode'
const dialogStyled = {
    height: '96%',
    marginTop: '12%',
    width: "60%",
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: "none",
    overFlow: "hidden",
    background:"#fff",
}

const Flex = styled(Box)`
    display:flex;
    `
const Images = styled('img')`
        width:330px;
        height:260px;
        margin-top:30px;
`
const Tab = styled(Typography)`
   font-size:26px;
   padding:20px;
   margin-top:22px;
   color:#000cc99;
   margin-left:10px;
   
   `
const App = styled(List)`
   & li{
    margin-left:40px;
    padding:13px;
    line-height:28px;
   }
   `
const Item = styled('a')`
   text-decoration:none;
   margin-left:50px;
   `
const All = styled(Box)`
   display:flex;
   margin-left:auto;
   margin-right:100px;
   margin-top:-20px;
   `
const Checkbox = styled(Input)`
   background:transparant;
   color:#000;
   cursor: pointer;
   margin-right:5px;
   box-shadow:none;
   `

   

const Message = () => {

    const { setAccount }=useContext(Accountcontext)
    const OnLoginSuccess=(req)=>{
       const decoded=jwt_decode(req.credential);
      setAccount(decoded);
   }

   const OnLoginError=(req)=>{
    console.log("Error is google outh",req)
   }

    return (
        <>
            <Dialog open={true} PaperProps={{ sx: dialogStyled }} hideBackdrop={true}>

                <Flex>
                    <Box>
                        <Tab>To Use Whatsapp on your computer : </Tab>
                        <App>
                            <ListItem>1. open Whatsapp on your phone</ListItem>
                            <ListItem>  2. Tap  Menu  <MoreVertIcon />  or settings  <b> <SettingsInputSvideoIcon /> </b>  and select Whatsapp web </ListItem>
                            <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                        </App>
                    </Box>
                    <Box style={{position:"relative"}} >
                        <Images src={Logo} alt="qrcode" />
                        <Box style={{ position: "absolute" ,top:"50%",transform: "translateX(28%)"}}>
                            <GoogleLogin
                            onSuccess={OnLoginSuccess}
                            onError={OnLoginError}
                            />
                        </Box>
                    </Box>


                </Flex>
                <Box>
                    <Item href="https:www.whatsapp.com/help">Need help to get started ?</Item>
                </Box>
                <All>
                <Checkbox type="checkbox"/>
                    <Typography>Keep the singed in</Typography>
                </All>

            </Dialog>
        </>
    )
}

export default Message

import { Box, Dialog, styled } from "@mui/material"


// components
import Menu from "./Menu/menu"
import EmptyChat from "./Emptychat/Emptychat"


   const styleddialog ={
        height:"95%",
        boxShadow:"none",
        width:"100%",
        margin:"20px",
        borderRadius:"0",
        maxWidth:"100%;",
        maxHeight:"100%",
        overFlow:"hidden",
    }
    const Component=styled(Box)`
    display:flex;
    `
    const LeftComponent=styled(Box)`
    min-width:450px;
    color:#fff;
    `
    const RightComponent=styled(Box)`
    width:73%;
    min-width:300px;
    height:100%;
    border-left:1px solid #9c9797b9;
    max-height:100%;
    color:#000;
    `
const ChatDialog=()=>{
 
    return(
        <>
        <Dialog open={true} PaperProps={{sx : styleddialog}} hideBackdrop={true} maxWidth={"md"} >
            <Component>
                <LeftComponent>
                    <Menu />
                </LeftComponent>
                <RightComponent>
                    <EmptyChat />
                </RightComponent>
            </Component>
        </Dialog>
        </>
    )
}

export default ChatDialog
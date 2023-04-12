import { Box, Dialog, styled } from "@mui/material"


// components
import Menu from "./Menu/menu"
import EmptyChat from "./Emptychat/Emptychat"


   const styleddialog ={
        height:"100%",
        margin:"0px",
        boxShadow:"none",
        width:"100%",
        borderRadius:"0",
        maxWidth:"100%;",
        maxHeight:"100%",
        overFlow: "hidden",
    }
    const Component=styled(Box)`
    display:flex;
    `
    const LeftComponent=styled(Box)`
    width:450px;
    `
    const RightComponent=styled(Box)`
    width:73%;
    min-width:300px;
     max-height:100%;
     border:1px solid #ededed;
    `
const ChatDialog=()=>{
 
    return(
        <>
        <Dialog open={true} PaperProps={{sx : styleddialog}} hideBackdrop={true} maxWidth={"md"} style={{overflow:"hidden"}}>
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
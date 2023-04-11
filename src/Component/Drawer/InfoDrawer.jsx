import { ArrowBack } from "@mui/icons-material";
import { Box, Drawer, Typography, styled } from "@mui/material";

// Components
import Profile from "./profile";

const Header=styled(Box)`
    background:#008069;
    color:#fff;
    height:107px;
    display:flex;
   & > svg , & > p {
    margin-top:auto;
    padding:15px;
    font-weight:600px;
   }
`
   const Text=styled(Typography)`
   font-size:18px;
   `
   const Component=styled(Box)`
   background:#ededed;
   height:95%;
   `

const InfoDrawer = ({open , setOpen}) => {
    const hanleClose=()=>{
        setOpen(false);
    }
    const styleddrawer={
        left:20,
        top:17,
        height:"95%",
        width:"33%",
        boxShadow:"none", 
        transition:"all 2s liner"
    }
    return (
        <> 
            <Drawer
            hideBackdrop={false}
            PaperProps={{sx :styleddrawer}}
                open={open}
                onClose={hanleClose}
                style={{zIndex:99999}}
            >
            <Header>
                <ArrowBack onClick={()=>setOpen(false)} />
                <Text>Profile</Text>
            </Header>
            <Component>
                <Profile />
            </Component>
            </Drawer>
            
        </>
    )
}

export default InfoDrawer;
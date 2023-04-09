import { Box, Dialog, List, ListItem, Typography, styled } from "@mui/material"
import Logo from "/Whatsaap Clone/client/src/Images/qrcode.png"
import {Facebook} from '@mui/icons-material'

const dialogStyled = {
    height: '96%',
    marginTop: '12%',
    width: "60%",
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: "none",
    overFlow: "hidden",
}

const Flex = styled(Box)`
    display:flex;
    `
    const Images = styled('img')`
        width:300px;
        height:300px;
`
   const Tab=styled(Typography)`
   
   `

const Message = () => {

    
    return (
        <>
            <Dialog open={true} PaperProps={{ sx: dialogStyled }}  >

                <Flex>
                    <Box>
                        <Typography>To Use Whatsapp on your computer : </Typography>
                        <List>
                            <ListItem>1. opne Whatsapp on your phone</ListItem>
                            <ListItem>2. Tap  Menu <Facebook /> or settings and select Whatsapp web </ListItem>
                            <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                        </List>
                    </Box>
                    <Box>
                        <Images src={Logo} alt="qrcode" />
                    </Box>
                </Flex>
            </Dialog>

        </>
    )
}

export default Message

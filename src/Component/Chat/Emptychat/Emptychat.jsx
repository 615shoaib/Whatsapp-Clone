
import { Box,Divider,Typography,styled} from "@mui/material"
import EmptyChatPic from '../../../Images/empty chat.jpg';
import LockIcon from '@mui/icons-material/Lock';

const Component=styled(Box)`
    background-color:#f8f9fa;
    padding:30px 0;
    text-align:center;
    height:100%;
`
const Container=styled(Box)`
    padding:0 200px;
    `
const Images=styled('img')`
    width:400px;
    margin-top:100px;
`
const Title=styled(Typography)`
    font-size:32px;
    margin:25px 0 10px 0;
    font-family:inherit;
    font-weight:300;
    color:#41525d;
    `
    const SubTitle=styled(Typography)`
    font-size:14px;
    color:#667781;
    font-weight:400;
    font-family:inherit;
    `
    const StyledDivider=styled(Divider)`
    margin:40px 0;
    opacity:0.4;
    `
    const Bottom=styled(Box)`
    width:100%;
    height:10px;
    background-color:#00a884;
    margin-top:55px;
    `
const EmptyChat=()=>{
    return(
        <>
       <Component>
        <Container>
            <Images src={EmptyChatPic} alt="empty images" />
            <Title>Whatsapp web</Title>
            <SubTitle>How to send and receive message without keeing your phone online.</SubTitle>
            <SubTitle>How to send and receive message without keeing your phone online.</SubTitle>
            <StyledDivider />
            <SubTitle> <LockIcon />  End to end encrypted</SubTitle>
        </Container>
        <Bottom>

        </Bottom>
       </Component> 
      
        </>
    )
}

export default EmptyChat
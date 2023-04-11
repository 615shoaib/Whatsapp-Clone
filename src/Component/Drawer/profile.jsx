import { useContext } from "react"
import { Box ,Typography,styled } from "@mui/material"

// Components
import {Accountcontext} from "../../Context/Appprovider"

    //styling Components 
    const ImageContainer=styled(Box)`
    display:flex;
    justify-content:center;
    `
    const Images=styled('img')`
    width:200px;
    height:200px;
    border-radius:50%;
    padding:25px 0;
    `
    const BoxWrapper=styled(Box)`
    background:#fff;
    padding :12px 30px 2px;
    box-shadow:0 1px 3px rgba(0,0,0,0.08);
    & : first-child{
        font-size:13px;
        color:#009686;
        font-weight:200;
    }
    & :last-child{
        margin:14px 0;
        color:#4A4A4A;
    }
    `
    const DescriptionWrapper=styled(Box)`
    padding:15px 20px 28px 13px;
    & >p{
        font-size:13px;
        color:#8696a0;
    }
    `

const Profile=()=>{
    const {account}=useContext(Accountcontext)
    return(
        <>
        <ImageContainer>
            <Images src={account.picture} alt="dp" />
        </ImageContainer>
        <BoxWrapper>
            <Typography>Your name</Typography>
            <Typography>{account.name}</Typography>
        </BoxWrapper>
        <DescriptionWrapper>
            <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos animi sit neque incidunt.</Typography>
            
        </DescriptionWrapper>
        <BoxWrapper>
            <Typography>About</Typography>
            <Typography>حضرت علی علیہ السلام</Typography>
        </BoxWrapper>
        </>
    )
}

export default Profile
import { Box, InputBase,styled } from "@mui/material"
import {Search as SearchIcon} from '@mui/icons-material'

    const Components=styled(Box)`
    background:#fff;
    height:45px;
    border-bottom:2px solid #F2F2F2;
    display:flex;
    align-items:center;
    `
    const Wrapper=styled(Box)`
    background:#f0f2f5;
    position:"relative";
    margin:0 13px;
    width:100%;
    border-radius:10px;
    `
    const Icon=styled(Box)`
    position:absolute;
    height:100%;
    padding:6px 10px;
    color:#919191;
    `

    const InputField=styled(InputBase)`
    width:100%;
    padding:16px;
    padding-left:65px;
    height:15px;
    font-size:14px;
    `
const Search=()=>{
    return(
        <>
        <Components>
            <Wrapper>
            <Icon>
                <SearchIcon fontsize="small" />
            </Icon>
            
                <InputField placeholder="Search or start new chat" />
            </Wrapper>
        </Components>
        </>
    )
}

export default Search
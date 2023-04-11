import { Box, InputBase,styled } from "@mui/material"
import {Search as SearchIcon} from '@mui/icons-material'

    const Components=styled(Box)`
    background:#fff;
    height:45px;
    border-bottom:2px solid #F2F2F2;
    `
    const Wrapper=styled(Box)`
    `
    const Icon=styled(Box)`
    position:absolute;
    `

    const InputField=styled(InputBase)`
    
    `
const Search=()=>{
    return(
        <>
        <Components>
            <Icon>
                <SearchIcon />
            </Icon>
            <Box>
                <InputField placeholder="Search or start new chat" />
            </Box>
        </Components>
        </>
    )
}

export default Search
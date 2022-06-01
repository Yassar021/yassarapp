import { Box, Text } from "@chakra-ui/react"

const Footer = () => {
    return(
        <Box height='58px' backgroundColor='#000' display='flex'>
            <Text fontSize={{base:'12px',md:'14px'}} fontWeight='500' color='#fff' m='auto'>Ahmad Muyassar © 2022. All Rights Reserved.</Text>
        </Box>
    )
}

export default Footer
import { Box, Button, Flex, Image, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react"

const Hero = () => {
    return(
        <SimpleGrid columns={{base:1,md:2}} spacing={20}>
            <Box pt='30px' pl={{base:'4px',md:'35px',lg:'34px',xl:'200px'}} width={{base:'240px',md:'364px',xl:'550px','2xl':'100%'}} ml={{base:'20px'}}>
                <Flex justifyContent='space-between' direction={{base:'column',md:'row'}}>
                    <Stack direction='row'>
                        <svg width="20" height={{base:"8",md:"20"}} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H5.153C5.38971 2.00011 5.6187 2.08418 5.79924 2.23726C5.97979 2.39034 6.10018 2.6025 6.139 2.836L6.879 7.271C6.91436 7.48222 6.88097 7.69921 6.78376 7.89003C6.68655 8.08085 6.53065 8.23543 6.339 8.331L4.791 9.104C5.34611 10.4797 6.17283 11.7293 7.22178 12.7782C8.27072 13.8272 9.52035 14.6539 10.896 15.209L11.67 13.661C11.7655 13.4695 11.9199 13.3138 12.1106 13.2166C12.3012 13.1194 12.5179 13.0859 12.729 13.121L17.164 13.861C17.3975 13.8998 17.6097 14.0202 17.7627 14.2008C17.9158 14.3813 17.9999 14.6103 18 14.847V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H15C7.82 18 2 12.18 2 5V3Z" fill="#291854"/>
                        </svg>
                        <Text fontFamily='Roboto' fontSize={{base:'12px',md:'12px'}}>(+62)895 8035 76407</Text>
                    </Stack>
                    <Stack direction='row'>
                        <svg width="20" height={{base:"8",md:"20"}} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.243 5.75699C13.4419 4.95642 12.4307 4.39891 11.3261 4.14891C10.2215 3.89891 9.06872 3.96664 8.00101 4.34426C6.9333 4.72188 5.99427 5.39398 5.29248 6.28285C4.59068 7.17171 4.15478 8.24105 4.03518 9.36724C3.91557 10.4934 4.11714 11.6305 4.61658 12.6469C5.11603 13.6634 5.89295 14.5177 6.85752 15.1112C7.8221 15.7046 8.93494 16.013 10.0674 16.0005C11.1998 15.9881 12.3057 15.6555 13.257 15.041C13.3671 14.9655 13.4913 14.9128 13.6221 14.886C13.7529 14.8593 13.8877 14.859 14.0187 14.8852C14.1496 14.9114 14.274 14.9635 14.3844 15.0386C14.4949 15.1136 14.5892 15.21 14.6618 15.3221C14.7344 15.4341 14.7838 15.5596 14.8071 15.6911C14.8304 15.8225 14.8272 15.9574 14.7976 16.0876C14.768 16.2178 14.7126 16.3407 14.6347 16.4492C14.5568 16.5576 14.4579 16.6494 14.344 16.719C12.8507 17.6846 11.0783 18.1252 9.30666 17.971C7.53506 17.8169 5.86531 17.0769 4.5612 15.8679C3.25709 14.659 2.39296 13.05 2.10533 11.2951C1.81771 9.54021 2.12298 7.73952 2.97292 6.1775C3.82286 4.61548 5.16902 3.38117 6.79872 2.66957C8.42843 1.95797 10.2488 1.80965 11.9722 2.24804C13.6956 2.68643 15.2238 3.68654 16.3154 5.09036C17.407 6.49419 17.9997 8.22171 18 10C18.0002 10.5572 17.8452 11.1035 17.5523 11.5776C17.2595 12.0516 16.8404 12.4348 16.3421 12.6841C15.8437 12.9333 15.2858 13.0389 14.7308 12.9889C14.1759 12.9389 13.6458 12.7353 13.2 12.401C12.6301 13.1608 11.8085 13.6931 10.8821 13.9025C9.95577 14.112 8.9851 13.985 8.14379 13.5442C7.30249 13.1035 6.64546 12.3778 6.29026 11.4969C5.93506 10.6161 5.90488 9.63762 6.20511 8.73656C6.50533 7.8355 7.11638 7.07067 7.92892 6.57891C8.74146 6.08716 9.70246 5.90057 10.64 6.05253C11.5775 6.20448 12.4304 6.68508 13.046 7.40831C13.6616 8.13155 13.9998 9.05024 14 10C14 10.2652 14.1054 10.5196 14.2929 10.7071C14.4804 10.8946 14.7348 11 15 11C15.2652 11 15.5196 10.8946 15.7071 10.7071C15.8946 10.5196 16 10.2652 16 10C16 8.463 15.414 6.93 14.243 5.75699ZM12 10C12 9.46956 11.7893 8.96086 11.4142 8.58578C11.0391 8.21071 10.5304 8 10 8C9.46956 8 8.96086 8.21071 8.58578 8.58578C8.21071 8.96086 8 9.46956 8 10C8 10.5304 8.21071 11.0391 8.58578 11.4142C8.96086 11.7893 9.46956 12 10 12C10.5304 12 11.0391 11.7893 11.4142 11.4142C11.7893 11.0391 12 10.5304 12 10Z" fill="black"/>
                        </svg>
                        <Text fontFamily='Roboto' fontSize={{base:'12px',md:'12px'}}>yassar.tkj114@gmail.com</Text>
                    </Stack>
                </Flex>
                <Text mt='52px' fontFamily='Inter' fontSize='16px' fontWeight='500' color='#291854'>Hi, I’m Yassar</Text>
                <Box backgroundImage='/bg-hero.png' backgroundSize={{base:'86px',md:'216px'}} backgroundRepeat='no-repeat' backgroundPosition='bottom left'>
                    <Text fontSize={{base:'32px',md:'48px'}} fontWeight='700' fontFamily='League Spartan' color='#190D37'>
                            Freelance Front-end Developer & UI/UX Designer
                    </Text>
                </Box>
                <Text color='#331E6A' mt='30px' mb='20px' fontSize={{base:'14px',md:'18px'}} fontFamily='Poppins'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                     Vivamus turpis ligula, pellentesque a elit in, convallis laoreet metus. Sed aliquet lacinia dictum. In pharetra nunc nisi, ac aliquet est pretium non. </Text>
                <Link href="https://wa.me/62895803576407">
                    <Button
                        size='md'
                        height='44px'
                        width={{base:'120px',md:'138px'}}
                        border='2px solid #2F2F2F'
                        color='#fff'
                        backgroundColor= '#2F2F2F'
                        _hover={{ bg: '#2F2F2F' }}
                        _active={{
                            bg: '#2F2F2F',
                            transform: 'scale(0.98)',
                        }}
                        >
                            Contact Me
                    </Button>
                </Link>
            </Box>
            <Box display={{base:'none', md: 'grid'}} backgroundImage={{base:'yjr.jpg',md:'/yjr.jpg'}} backgroundSize={{base:'cover'}} mt={{base:'10px',md:'0px','2xl':'0px'}} h={{base:'200px',md:'auto','2xl':'660px'}} backgroundRepeat='no-repeat' backgroundPosition='center' borderRadius={{base:'0px',md:'0px 0px 0px 200px' }}position='relative' />
        </SimpleGrid>
    )
}

export default Hero
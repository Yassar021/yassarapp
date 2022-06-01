import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react"

const Project = () => {
    return(
        <>
            <Box  px={{sm:'80px',md:'140px'}} textAlign='center' p={{base:'4px'}}>
                <Text fontWeight='600' fontSize='12px' color='#2858FF' fontFamily='Poppins'>My Project</Text>
                <Text my='8px' fontFamily='League Spartan' fontWeight='700' fontSize={{base:'26px',md:'36px'}}>You can check out a few of my projects below.</Text>
                <Text fontFamily='Poppins' fontSize={{base:'14px',md:'18px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus turpis ligula, pellentesque a elit in, convallis laoreet metus. Sed aliquet lacinia dictum. In pharetra nunc nisi, ac aliquet est pretium non.</Text>
            </Box>

            <Box px={{base:'10px',md:'36px',lg:'76px',xl:'240px','2xl':'380px'}} pt='48px' pb='98px'>
                <Flex direction={{base:"column", md:"row"}}>
                    <Image src="/project1.png" width={{base:'100%',md:'160px',lg:'160px'}} alt="" />
                    <Stack ml='20px'>
                        <Text fontFamily='Poppins' fontWeight='700' fontSize='18px' color='#291854' mt={{base:'20px'}}>Project Name</Text>
                        <Text fontFamily='Inter' fontSize='14px' color='#55206D'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus turpis ligula, pellentesque a elit in, convallis laoreet metus. Sed aliquet lacinia dictum. In pharetra nunc nisi, ac aliquet est pretium non. Fusce fringilla, sem sit amet egestas sagittis, lorem nisi aliquam metus, vitae porta ligula enim in nisl. 
                            Quisque at erat semper, scelerisque tortor id, pretium tellus. </Text>
                        
                        <Stack direction='row' alignItems='center'>
                            <Text fontFamily='inter' fontSize='14px' fontWeight='500'>Project Link</Text>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.20509 3.70507C7.33636 3.57384 7.51437 3.50012 7.69999 3.50012C7.8856 3.50012 8.06362 3.57384 8.19489 3.70507L10.9949 6.50507C11.1261 6.63634 11.1998 6.81436 11.1998 6.99997C11.1998 7.18559 11.1261 7.3636 10.9949 7.49487L8.19489 10.2949C8.06287 10.4224 7.88605 10.4929 7.70251 10.4913C7.51897 10.4897 7.3434 10.4161 7.21361 10.2863C7.08383 10.1566 7.01021 9.98099 7.00862 9.79745C7.00702 9.61392 7.07758 9.43709 7.20509 9.30507L8.81019 7.69997H3.49999C3.31434 7.69997 3.13629 7.62622 3.00501 7.49495C2.87374 7.36367 2.79999 7.18562 2.79999 6.99997C2.79999 6.81432 2.87374 6.63627 3.00501 6.505C3.13629 6.37372 3.31434 6.29997 3.49999 6.29997H8.81019L7.20509 4.69487C7.07386 4.5636 7.00014 4.38559 7.00014 4.19997C7.00014 4.01436 7.07386 3.83634 7.20509 3.70507Z" fill="#6A87A3"/>
                            </svg>
                        </Stack>
                    </Stack>
                </Flex>

                <Flex my='40px'  direction={{base:"column", md:"row"}}>
                    <Image src="/project2.png" width={{base:'100%',md:'160px',lg:'160px'}} alt="" />
                    <Stack ml='20px'>
                        <Text fontFamily='Poppins' fontWeight='700' fontSize='18px' color='#291854' mt={{base:'20px'}}>Project Name</Text>
                        <Text fontFamily='Inter' fontSize='14px' color='#55206D'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus turpis ligula, pellentesque a elit in, convallis laoreet metus. Sed aliquet lacinia dictum. In pharetra nunc nisi, ac aliquet est pretium non. Fusce fringilla, sem sit amet egestas sagittis, lorem nisi aliquam metus, vitae porta ligula enim in nisl. 
                            Quisque at erat semper, scelerisque tortor id, pretium tellus. </Text>
                        
                        <Stack direction='row' alignItems='center'>
                            <Text fontFamily='inter' fontSize='14px' fontWeight='500'>Project Link</Text>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.20509 3.70507C7.33636 3.57384 7.51437 3.50012 7.69999 3.50012C7.8856 3.50012 8.06362 3.57384 8.19489 3.70507L10.9949 6.50507C11.1261 6.63634 11.1998 6.81436 11.1998 6.99997C11.1998 7.18559 11.1261 7.3636 10.9949 7.49487L8.19489 10.2949C8.06287 10.4224 7.88605 10.4929 7.70251 10.4913C7.51897 10.4897 7.3434 10.4161 7.21361 10.2863C7.08383 10.1566 7.01021 9.98099 7.00862 9.79745C7.00702 9.61392 7.07758 9.43709 7.20509 9.30507L8.81019 7.69997H3.49999C3.31434 7.69997 3.13629 7.62622 3.00501 7.49495C2.87374 7.36367 2.79999 7.18562 2.79999 6.99997C2.79999 6.81432 2.87374 6.63627 3.00501 6.505C3.13629 6.37372 3.31434 6.29997 3.49999 6.29997H8.81019L7.20509 4.69487C7.07386 4.5636 7.00014 4.38559 7.00014 4.19997C7.00014 4.01436 7.07386 3.83634 7.20509 3.70507Z" fill="#6A87A3"/>
                            </svg>
                        </Stack>
                    </Stack>
                </Flex>

                <Flex  direction={{base:"column", md:"row"}}>
                    <Image src="/project3.png" width={{base:'100%',md:'160px',lg:'160px'}} alt="" />
                    <Stack ml='20px'>
                        <Text fontFamily='Poppins' fontWeight='700' fontSize='18px' color='#291854' mt={{base:'20px'}}>Project Name</Text>
                        <Text fontFamily='Inter' fontSize='14px' color='#55206D'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus turpis ligula, pellentesque a elit in, convallis laoreet metus. Sed aliquet lacinia dictum. In pharetra nunc nisi, ac aliquet est pretium non. Fusce fringilla, sem sit amet egestas sagittis, lorem nisi aliquam metus, vitae porta ligula enim in nisl. 
                            Quisque at erat semper, scelerisque tortor id, pretium tellus. </Text>
                        
                        <Stack direction='row' alignItems='center'>
                            <Text fontFamily='inter' fontSize='14px' fontWeight='500'>Project Link</Text>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.20509 3.70507C7.33636 3.57384 7.51437 3.50012 7.69999 3.50012C7.8856 3.50012 8.06362 3.57384 8.19489 3.70507L10.9949 6.50507C11.1261 6.63634 11.1998 6.81436 11.1998 6.99997C11.1998 7.18559 11.1261 7.3636 10.9949 7.49487L8.19489 10.2949C8.06287 10.4224 7.88605 10.4929 7.70251 10.4913C7.51897 10.4897 7.3434 10.4161 7.21361 10.2863C7.08383 10.1566 7.01021 9.98099 7.00862 9.79745C7.00702 9.61392 7.07758 9.43709 7.20509 9.30507L8.81019 7.69997H3.49999C3.31434 7.69997 3.13629 7.62622 3.00501 7.49495C2.87374 7.36367 2.79999 7.18562 2.79999 6.99997C2.79999 6.81432 2.87374 6.63627 3.00501 6.505C3.13629 6.37372 3.31434 6.29997 3.49999 6.29997H8.81019L7.20509 4.69487C7.07386 4.5636 7.00014 4.38559 7.00014 4.19997C7.00014 4.01436 7.07386 3.83634 7.20509 3.70507Z" fill="#6A87A3"/>
                            </svg>
                        </Stack>
                    </Stack>
                </Flex>
            </Box>
        </>
    )
}

export default Project
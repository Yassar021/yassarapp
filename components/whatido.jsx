import { Box, SimpleGrid, Text } from "@chakra-ui/react"

const Whatido = () => {
    return(
        <>
            <Box  pt='96px' px={{sm:'80px',md:'140px','2xl':'280px'}} mt={{base:'20px'}} p={{base:'4px'}} textAlign='center'>
                <Text fontWeight='600' fontSize='12px' color='#2858FF' fontFamily='Poppins'>What I Do</Text>
                <Text my='8px' fontFamily='League Spartan' fontWeight='700' fontSize={{base:'26px',md:'36px'}}>With 2+ years of Developer and Designer experience</Text>
                {/* <Text fontFamily='Poppins' fontSize={{base:'14px',md:'18px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus turpis ligula, pellentesque a elit in, convallis laoreet metus. Sed aliquet lacinia dictum. In pharetra nunc nisi, ac aliquet est pretium non.</Text> */}
            </Box>

            <Box px={{sm:'24px',md:'36px',lg:'76px',xl:'180px','2xl':'380px'}} pt='30px' textAlign='center' pb='95px' backgroundImage='/bg-what.png' backgroundSize={{md:'750px',lg:'998px'}} backgroundRepeat='no-repeat' backgroundPosition='center'>
                <SimpleGrid columns={{sm:1,md:3}} spacing={{md:'20px'}} mt='48px'>
                    <Box boxShadow='lg' width={{lg:'280px',xl:'320px'}} backgroundColor='white' borderRadius='10px' p='20px' border='2px black'>
                        <Text fontFamily='Poppins' fontWeight='600' fontSize='18px'>Web Designer</Text>
                        <Text mt='8px' fontSize='16px' fontFamily='Inter'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus turpis ligula, pellentesque a elit in, convallis laoreet metus. Sed aliquet lacinia dictum. In pharetra nunc nisi, ac aliquet est pretium non. 
                            Fusce fringilla, sem sit amet egestas sagittis, lorem nisi aliquam metus, vitae porta ligula enim in nisl.<br/><br/> Framewrok : <b>Materialize, Tailwind, Bootstrap</b></Text>
                    </Box>
                    <Box boxShadow='lg' width={{lg:'280px',xl:'320px'}} my={{base:'20px', md:'0px', lg:'0px', '2xl':'0'}} backgroundColor='white' borderRadius='10px' p='20px'>
                        <Text fontFamily='Poppins' fontWeight='600' fontSize='18px'>Front-end Development</Text>
                        <Text mt='8px' fontSize='16px' fontFamily='Inter'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus turpis ligula, pellentesque a elit in, convallis laoreet metus. Sed aliquet lacinia dictum. In pharetra nunc nisi, ac aliquet est pretium non. 
                            Fusce fringilla, sem sit amet egestas sagittis, lorem nisi aliquam metus, vitae porta ligula enim in nisl. <br/><br/> Tech Stack : <b>Next JS, Redux, Node JS</b></Text>
                    </Box>
                    <Box boxShadow='lg' width={{lg:'280px',xl:'320px'}} backgroundColor='white' borderRadius='10px' p='20px'>
                        <Text fontFamily='Poppins' fontWeight='600' fontSize='18px'>UI/UX Design</Text>
                        <Text mt='8px' fontSize='16px' fontFamily='Inter'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus turpis ligula, pellentesque a elit in, convallis laoreet metus. Sed aliquet lacinia dictum. In pharetra nunc nisi, ac aliquet est pretium non. 
                            Fusce fringilla, sem sit amet egestas sagittis, lorem nisi aliquam metus, vitae porta ligula enim in nisl.<br/><br/> Tools : <b>Adobe XD, Figma, Maze</b></Text>
                    </Box>
                </SimpleGrid>
            </Box>
        </>
        
    )
}

export default Whatido
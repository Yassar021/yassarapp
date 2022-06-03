import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text } from "@chakra-ui/react"

const Question = () => {
    return(
        <>
            <Box px={{sm:'80px',md:'140px','2xl':'280px'}} textAlign='center' p={{base:'4px'}}>
                <Text fontWeight='600' fontSize='12px' color='#2858FF' fontFamily='Poppins'>Question</Text>
                <Text my='8px' fontFamily='League Spartan' fontWeight='700' fontSize={{base:'26px',md:'36px'}}>I answered your frequently asked questions.</Text>
                <Text fontFamily='Poppins' fontSize={{base:'14px',md:'18px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus turpis ligula, pellentesque a elit in, convallis laoreet metus. Sed aliquet lacinia dictum. In pharetra nunc nisi, ac aliquet est pretium non.</Text>
            </Box>

            <Box px={{sm:'40px',md:'76px',xl:'220px','2xl':'380px'}} mt='48px' pb='96px'>
                <Accordion>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left' fontFamily='Poppins' fontWeight='500' fontSize='16px' color='#55206D'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} fontFamily='Inter' fontSize='14px' color='#6A87A3'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left' fontFamily='Poppins' fontWeight='500' fontSize='16px' color='#55206D'>
                                Vivamus turpis ligula, pellentesque a elit in, convallis laoreet metus. 
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} fontFamily='Inter' fontSize='14px' color='#6A87A3'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left' fontFamily='Poppins' fontWeight='500' fontSize='16px' color='#55206D'>
                                    Vestibulum a dui id mi fermentum pretium.
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} fontFamily='Inter' fontSize='14px' color='#6A87A3'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left' fontFamily='Poppins' fontWeight='500' fontSize='16px' color='#55206D'>
                                    Donec molestie nec purus sed ultricies.
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} fontFamily='Inter' fontSize='14px' color='#6A87A3'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
        </>
    )
}

export default Question
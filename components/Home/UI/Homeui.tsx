import React from 'react'
import Head from 'next/head'
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    
} from '@chakra-ui/react'


const HomeComponent = () => {
    return (
            
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 10, md: 20 }}
                    mt={{base:100}}>
                    <Heading
                        fontWeight={800}
                        fontSize={{ base: '4xl', sm: '8xl', md: '6xl' }}
                        lineHeight={'120%'}>
                        Welcome&nbsp;
                        <Text as={'span'} color={'green.400'}>
                            to my blog.
                        </Text>
                    </Heading>
                    <Text color={'gray.500'}>
                      Hi, I am Aditya and I am passionate about web development .
                    </Text>
                    <Stack
                        direction={'column'}
                        spacing={3}
                        align={'center'}
                        alignSelf={'center'}
                        position={'relative'}>
                        <Button
                            colorScheme={'green'}
                            bg={'green.400'}
                            rounded={'full'}
                            px={6}
                            _hover={{
                                bg: 'green.500',
                            }}>
                            Read Blogs
                        </Button>
                        <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
                            Contact me
                        </Button>

                    </Stack>
                </Stack>
         
     


    )
}

export default HomeComponent

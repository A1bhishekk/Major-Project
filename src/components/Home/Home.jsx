import { Box, Button, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import './Home.css'
import vg from '../../assets/images/bg.jpg'
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import introVideo from '../../assets/videos/intro.mp4';

const Home = () => {
    return (
        <section className="home">
            <div className="container">
                <Stack
                    direction={['column', 'row']}
                    height="100vh"
                    justifyContent={['center', 'space-between']}
                    alignItems="center"
                    spacing={['0', '56']}
                >
                    <VStack width={"full"} alignItems={['center', 'flex-end']}>
                        <Heading children="LEARN FROM THE EXPERTS" size={'2xl'} />
                        <Text children="Find Valuable Courses and Tutorials from the best in the industry" color={"pink.400"}/>
                        <Text children="At Reasonable Price" alignSelf={['flex-start', 'flex-end']}color={"pink.400"}/>
                        <Link to="/courses">
                            <Button size={'lg'} colorScheme="teal" mt={6}>Explore Now</Button>
                        </Link>
                    </VStack>

                    <Image boxSize={'md'} src={vg} objectFit={['contain','contain']} />
                </Stack> 
                
            </div>
            
            <Box padding={'8'} bg="blackAlpha.800">
                <Heading
                    textAlign={'center'}
                    fontFamily="body"
                    color={'yellow.400'}
                    children="OUR BRANDS"
                />
                <HStack
                    className="brandsBanner"
                    justifyContent={'space-evenly'}
                    marginTop="4"
                >
                    <CgGoogle />
                    <CgYoutube />
                    <SiCoursera />
                    <SiUdemy />
                    <DiAws />
                </HStack>
            </Box>

            <div className="container2">
                <video
                    controls
                    controlsList="nodownload nofullscreen noremoteplayback"
                    disablePictureInPicture
                    disableRemotePlayback
                    src={introVideo}
                ></video>
            </div>

           
        </section>
    )
}

export default Home
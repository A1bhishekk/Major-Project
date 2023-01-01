import {
    Button,
    Container,
    Heading,
    HStack,
    Image,
    Input,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react';
import bg from '../../assets/images/bg.jpg';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Course = ({
    views,
    title,
    imageSrc,
    id,
    addToPlaylistHandler,
    creator,
    description,
    lectureCount,
    loading,
}) => {
    return (
        <VStack className="course" alignItems={['center', 'flex-start']}>
            <Image src={imageSrc} boxSize="60" objectFit={'contain'} />
            <Heading
                textAlign={['center', 'left']}
                maxW="200px"
                size={'sm'}
                fontFamily={'sans-serif'}
                noOfLines={3}
                children={title}
                color={'palegreen'}
            />
            <Text noOfLines={2} children={description} />

            <HStack>
                <Text
                    fontWeight={'bold'}
                    textTransform="uppercase"
                    children={'Creator'}
                />

                <Text
                    fontFamily={'body'}
                    textTransform="uppercase"
                    children={creator}
                />
            </HStack>

            <Heading
                textAlign={'center'}
                size="xs"
                children={`Lectures - ${lectureCount}`}
                textTransform="uppercase"
            />

            <Heading
                size="xs"
                children={`Views - ${views}`}
                textTransform="uppercase"
            />

            <Stack direction={['column', 'row']} alignItems="center">
                <Link to={`/course/${id}`}>
                    <Button colorScheme={'teal'}>Watch Now</Button>
                </Link>
                <Button
                    isLoading={loading}
                    variant={'ghost'}
                    colorScheme={'teal'}
                    onClick={() => addToPlaylistHandler(id)}
                >
                    Add to playlist
                </Button>
            </Stack>
        </VStack>
    );
};

const Courses = () => {
    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('');
    console.log(category)

    const addToPlaylistHandler = () => {
        console.log('Added to playlist');
    }

    const categories = [
        "Web Development", "Artificial Inteligence ", "Data Science", "Game Development",
        "App Development", "Data Structures & Algorithms", "Machine Learning", "Ethical Hacking",
    ]
    return (
        <Container minH={"90vh"} paddingY={"8"} maxW="container.lg">
            <Heading children="All Courses" m={'8'} />

            <Input
                placeholder="Search for a course"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                type="text"
                focusBorderColor='teal.400'
            />

            <HStack
                overflowX={'auto'}
                paddingY={'8'}
                css={{ "&::-webkit-scrollbar": { display: "none" } }}
            >
                {
                    categories.map((category, index) => (
                        <Button key={index} onClick={() => setCategory(category)} minW="60">
                            <Text children={category} />
                        </Button>
                    ))
                }
            </HStack>


            <Stack
                direction={['column', 'row']}
                flexWrap="wrap"
                justifyContent={['flex-start', 'space-evenly']}
                alignItems={['center', 'flex-start']}
            >

            <Course
            title={'Web Development'}
            imageSrc={bg}
            id={'1'}
            creator={'Technical Abhi'}
            description={'Mern Stack Development'}
            lectureCount={10}
            views={100}
            addToPlaylistHandler={addToPlaylistHandler}
            />

            <Course
            title={'Web Development'}
            imageSrc={bg}
            id={'1'}
            creator={'Monika Raj'}
            description={'Data Science'}
            lectureCount={10}
            views={100}
            addToPlaylistHandler={addToPlaylistHandler}
            />

            <Course
            title={'Web Development'}
            imageSrc={bg}
            id={'1'}
            creator={'Abhishek Kumar'}
            description={'Web Scraping with Python'}
            lectureCount={10}
            views={100}
            addToPlaylistHandler={addToPlaylistHandler}
            />

            

            </Stack>

        </Container>
    )
}

export default Courses
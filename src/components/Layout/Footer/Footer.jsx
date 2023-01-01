import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  TiSocialLinkedinCircular,
  TiSocialInstagramCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';
const Footer = () => {
  return (
    <Box padding={'4'} bg="blackAlpha.900" minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading children="All Rights Reserved" color={'white'} />
          <Heading
            fontFamily={'body'}
            size="sm"
            children="@Technical Abhi"
            color={'teal.400'}
          />
        </VStack>

        <HStack
          spacing={['2', '10']}
          justifyContent="center"
          color={'white'}
          fontSize="50"
        >
          <a href="https://www.linkedin.com/in/abhishek-kumar-4986b2152/" target={'blank'} className='linkedin'>
            <TiSocialLinkedinCircular />
          </a>
          <a href="https://www.instagram.com/techabhi_webdev/?hl=en" target={'blank'} className='instagram'>
            <TiSocialInstagramCircular />
          </a>
          <a href="https://github.com/A1bhishekk" target={'blank'}  className='github'>
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;

import React from 'react';
import { Container, Box, Image, Text } from '@chakra-ui/react';
import RocketLaunch from '../assets/images/RocketLaunch.svg';
import Mockup from '../assets/images/Mockup.svg';

export default function HeroSection() {
  return (
    <Box bg="#F8D57E">
      <Container
        as="section"
        p={{ base: '60px 30px 0px 30px', lg: '120px 55px 0px 55px' }}
      >
        <Box
          display="flex"
          flexDirection={{ base: 'column', lg: 'row' }}
          textAlign="center"
          gap={{ base: '60px', lg: '100px' }}
        >
          <Box
            display="flex"
            gap="40px"
            flex={{ lg: '1 1 620px' }}
            flexDirection="column"
          >
            <Box textAlign={{ lg: 'initial' }}>
              <Text
                as="h2"
                fontSize={{ base: '38px', lg: '67px' }}
                lineHeight="1.3"
                fontWeight="700"
                letterSpacing={{ base: '-0.02em', lg: '-0.025em' }}
                marginBottom="20px"
                p={{ base: '0px 12px', lg: '0' }}
              >
                Create Engaging Landing Pages
              </Text>
              <Text
                as="p"
                fontSize={{ base: '16px', lg: '21px' }}
                lineHeight="1.5"
                fontWeight="400"
              >
                Build beautiful landing pages in record time with Anima’s
                Landing Page UI kit for Figma. No code required!
              </Text>
            </Box>
            <Box
              display="flex"
              gap="18px"
              flexDirection={{ base: 'column', lg: 'row' }}
              margin={{ base: '0 auto', lg: 'initial' }}
              p={{ lg: '0 0 90px 0' }}
            >
              <Box as="a" href="#" className="btn primary_button">
                <Box maxWidth="20px" ratio="1">
                  <Image src={RocketLaunch} alt="RocketLaunch" />
                </Box>
                <Text
                  as="span"
                  fontSize="16px"
                  lineHeight="1.5"
                  fontWeight="600"
                >
                  Get Started
                </Text>
              </Box>
              <Box as="a" href="#" className="btn secondary_button">
                <Text
                  as="span"
                  fontSize="16px"
                  lineHeight="1.5"
                  fontWeight="600"
                >
                  How it works
                </Text>
              </Box>
            </Box>
          </Box>

          <Box ratio="1" margin="0 auto" flex={{ lg: '1 1 450px' }}>
            <Image src={Mockup} alt="Mockup" w="100%" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

import React from 'react';
import { Container, Box, Grid, Image, Text } from '@chakra-ui/react';
import Visuals from '../assets/images/Visuals.svg';
import FlyingSaucer from '../assets/images/FlyingSaucer.svg';
import MagicWand from '../assets/images/MagicWand.svg';
import BoundingBox from '../assets/images/BoundingBox.svg';
import Package from '../assets/images/Package.svg';

export default function Feature() {
  return (
    <Box bg="#F8F9FF">
      <Container
        as="section"
        p={{ base: '60px 30px 60px 30px', lg: '120px 55px 120px 55px' }}
      >
        <Box
          display="flex"
          flexDirection={{ base: 'column', lg: 'row' }}
          textAlign="center"
          gap={{ base: '60px', lg: '70px' }}
        >
          <Box
            display="flex"
            gap={{ base: '40px', lg: '50px' }}
            flex={{ lg: '1 1 570px' }}
            flexDirection="column"
            order={{ lg: '1' }}
          >
            <Box textAlign={{ lg: 'initial' }}>
              <Text
                as="h2"
                fontSize="38px"
                lineHeight="1.3"
                fontWeight="700"
                letterSpacing="-0.02em"
                marginBottom="20px"
              >
                Our features
              </Text>
              <Text fontSize="21px" lineHeight="1.5" fontWeight="400">
                Few good reasons why you should use Anima Landing Page Ui Kit to
                make your own pages.
              </Text>
            </Box>
            <Grid
              templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
              gap="18px"
            >
              <Box className="feature_card">
                <Box ratio="1" className="feature_card_icon">
                  <Image
                    width="25.61px"
                    src={FlyingSaucer}
                    alt="FlyingSaucer"
                  />
                </Box>
                <Text
                  as="span"
                  fontSize="16px"
                  lineHeight="1.5"
                  fontWeight="400"
                >
                  Fast building
                </Text>
              </Box>
              <Box className="feature_card">
                <Box ratio="1" className="feature_card_icon">
                  <Image width="25.61px" src={MagicWand} alt="MagicWand" />
                </Box>
                <Text
                  as="span"
                  fontSize="16px"
                  lineHeight="1.5"
                  fontWeight="400"
                >
                  Easy to edit
                </Text>
              </Box>
              <Box className="feature_card">
                <Box ratio="1" className="feature_card_icon">
                  <Image width="25.61px" src={BoundingBox} alt="BoundingBox" />
                </Box>
                <Text
                  as="span"
                  fontSize="16px"
                  lineHeight="1.5"
                  fontWeight="400"
                >
                  Responsiveness
                </Text>
              </Box>
              <Box className="feature_card">
                <Box ratio="1" className="feature_card_icon">
                  <Image width="25.61px" src={Package} alt="Package" />
                </Box>
                <Text
                  as="span"
                  fontSize="16px"
                  lineHeight="1.5"
                  fontWeight="400"
                >
                  No code needed
                </Text>
              </Box>
            </Grid>
          </Box>

          <Box ratio="1" margin="0 auto" flex={{ lg: '1 1 540px' }}>
            <Image src={Visuals} alt="Visuals" w="100%" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

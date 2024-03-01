import React from 'react';
import { Container, Box, Image, Text } from '@chakra-ui/react';
import Logo from '../assets/images/Logo.svg';
import RocketLaunch from '../assets/images/RocketLaunch.svg';
import ArrowLeft from '../assets/images/ArrowLeft.svg';

export default function Nav() {
  return (
    <Box bg={'#F8D57E'}>
      <Container
        as="nav"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={{ base: '20px', lg: '20px 50px 20px 50px' }}
      >
        {/* navbar-logo */}
        <Box as="h1">
          <Box as="a" href="#" display="flex" alignItems="center" gap="6px">
            <Box width="32px" ratio="1">
              <Image src={Logo} alt="logo" />
            </Box>
            <Text hideBelow="md" fontSize="21px" lineHeight="1.3">
              <Text as="span" fontWeight="700">
                Landing
              </Text>
              Page
            </Text>
          </Box>
        </Box>
        {/* nav-item */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap="50px"
        >
          <Box as="a" href="#" hideBelow="md" className="btn tertiary_button">
            Contact
          </Box>
          <Box
            as="a"
            href="#"
            hideBelow="md"
            className="btn secondaryColor_button"
          >
            How it works
          </Box>
          <Box as="a" href="#" className="btn primary_button">
            <Box maxWidth="20px" ratio="1" hideBelow="lg">
              <Image src={RocketLaunch} alt="RocketLaunch" />
            </Box>
            <Text as="span">Get Started</Text>
            <Box maxWidth="20px" ratio="1" hideFrom="lg">
              <Image src={ArrowLeft} alt="ArrowLeft" />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

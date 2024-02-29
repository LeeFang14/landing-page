import React from 'react';
import { Container, Box, Image, Text } from '@chakra-ui/react';
import Photo from '../assets/images/Photo.svg';

export default function Testimonials() {
  return (
    <Box bg="#F8D57E">
      <Container
        as="section"
        p={{ base: '100px 32px 100px 32px', lg: '120px 55px 120px 55px' }}
      >
        <Box
          display="flex"
          flexDirection="column"
          textAlign="center"
          gap="60px"
        >
          <Box>
            <Text
              as="h2"
              fontSize="38px"
              lineHeight="1.3"
              fontWeight="700"
              letterSpacing="-0.02em"
              marginBottom="20px"
            >
              Real Stories from Satisfied Customers
            </Text>
            <Text as="p" fontSize="16px" lineHeight="1.5" fontWeight="400">
              See how our landing page ui kit is making an impact.
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection={{ base: 'column', lg: 'row' }}
            gap={{ base: '60px', lg: '30px' }}
          >
            {/* 這裡要打API傳資料進來，有幾比資料放幾張卡片 */}
            <Box
              className="testimonials_card"
              display="flex"
              flexDirection={{ base: 'column', lg: 'row' }}
              gap="30px"
              p={{ base: '40px 30px 40px 30px', lg: '40px' }}
              alignItems="center"
            >
              <Box
                display="flex"
                flexDirection="column"
                gap="16px"
                // p="52.5px"
                alignItems="center"
                flex={{ lg: '1 1 180px' }}
              >
                <Box maxW="120px">
                  <Image src={Photo} alt="Photo" borderRadius="50%" />
                </Box>
                <Text as="h4" fontSize="21px" lineHeight="1.3" fontWeight="600">
                  Lauren M.
                </Text>
                <Text as="p" fontSize="14px" lineHeight="1.6" fontWeight="400">
                  UI Designer @Boo
                </Text>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                gap="24px"
                flex={{ lg: '1 1 280px' }}
              >
                <Text as="p" order={{ lg: '1' }}>
                  "Anima’s Landing Page UI Kit has become a staple in my design
                  toolkit. This kit has everything I need to get the job done
                  quickly and efficiently."
                </Text>
                <Text as="p">星星容器</Text>
              </Box>
            </Box>
            <Box
              className="testimonials_card"
              display="flex"
              flexDirection={{ base: 'column', lg: 'row' }}
              gap="30px"
              p={{ base: '40px 30px 40px 30px', lg: '40px' }}
              alignItems="center"
            >
              <Box
                display="flex"
                flexDirection="column"
                gap="16px"
                // p="52.5px"
                alignItems="center"
                flex={{ lg: '1 1 180px' }}
              >
                <Box maxW="120px">
                  <Image src={Photo} alt="Photo" borderRadius="50%" />
                </Box>
                <Text as="h4" fontSize="21px" lineHeight="1.3" fontWeight="600">
                  David B.
                </Text>
                <Text as="p" fontSize="14px" lineHeight="1.6" fontWeight="400">
                  Lead Designer @Creative
                </Text>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                gap="24px"
                flex={{ lg: '1 1 280px' }}
              >
                <Text as="p" order={{ lg: '1' }}>
                  “The Landing Page UI Kit has been a game changer. The
                  pre-designed components and templates have helped us deliver
                  projects faster!”
                </Text>
                <Text as="p">星星容器</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
